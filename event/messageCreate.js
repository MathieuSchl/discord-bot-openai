const createCompletion = require("../opai").createCompletion;

module.exports.run = (client) => {
  client.on("messageCreate", async (message) => {
    const botTag = `<@${client.user.id}>`;
    if (message.content.startsWith(botTag) || message.content.endsWith(botTag)) {
      const prompt = message.content.replace(botTag, "");
      const result = await createCompletion(prompt, message.author.username);
      message.reply(result);
    }
  });
};
