const { Client, GatewayIntentBits } = require("discord.js");
const fs = require("fs");
const config = require("./config.json");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

fs.readdir(__dirname + "/event/", (err, files) => {
  files.forEach((file) => {
    if (fs.existsSync(__dirname + "/event/" + file)) require(__dirname + "/event/" + file).run(client);
  });
});

client.login(config.discordToken);
