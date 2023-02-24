import Opai from "./opai.js";
const openAi = new Opai();

export default class Events {
  constructor(client) {
    this.client = client;

    this.client.on("ready", () => {
      console.log(`Logged in as : ${client.user.tag}\n\n`);
    });

    this.client.on("messageCreate", async (message) => {
      const botTag = `<@${client.user.id}>`;
      if (message.content.startsWith(botTag) || message.content.endsWith(botTag)) {
        const prompt = message.content.replace(botTag, "");
        const result = await openAi.ask(prompt, message.author.id + message.channel.id);
        message.reply(result);
      }
    });

    this.client.on("interactionCreate", (interaction) => {
      try {
        console.log("interactionCreate");
      } catch (error) {
        console.log(error);
      }
    });
  }
}
