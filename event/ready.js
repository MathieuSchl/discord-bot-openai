module.exports.run = (client) => {
  client.on("ready", () => {
    console.log(`Logged in as : ${client.user.tag}\n\n`);
  });
};
