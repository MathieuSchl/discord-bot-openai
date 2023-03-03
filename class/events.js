import { ChannelType } from "discord.js";
import Opai from "./opai.js";
import help from "../commands/help.js";
const commands = {};
const openAi = new Opai();

export default class Events {
  constructor(client) {
    this.client = client;

    this.client.on("ready", async () => {
      console.log(`Logged in as : ${client.user.tag}\n\n`);
      const helpCommand = help(client);
      commands[helpCommand.name] = helpCommand;
    });

    this.client.on("messageCreate", async (message) => {
      const botTag = `<@${client.user.id}>`;
      client.user.setActivity("/help");
      if (
        !message.author.bot &&
        (message.content.startsWith(botTag) ||
          message.content.endsWith(botTag) ||
          message.channel.type === ChannelType.DM)
      ) {
        const prompt = message.content.replace(botTag, "");
        const result = await openAi.ask(prompt, message.author.id + message.channel.id);
        message.reply(result);
      }
    });

    this.client.on("interactionCreate", (interaction) => {
      try {
        if (interaction.isCommand()) {
          commands[interaction.commandName].run(interaction);
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}
