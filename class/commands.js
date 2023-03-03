export default class Commands {
  constructor({ client, name, description, type, options, defaultPermission, run }) {
    this.client = client;
    this.name = name;
    this.description = description;
    this.type = type;
    this.options = options;
    this.defaultPermission = defaultPermission;
    this.run = run;
  }

  async getListCommands(guild) {
    const listCommands = guild ? await guild.commands.fetch() : await this.client.application.commands.fetch();
  }

  async setCommands(guild) {
    if (guild) {
      const listCommands = await guild.commands.fetch();
      for (const command of Array.from(listCommands)) {
        if (command[1].name === this.name) {
          await guild.commands.delete(command[0]);
          break;
        }
      }
      await guild.commands.create({
        name: this.name,
        description: this.description,
        type: this.type,
        defaultPermission: this.defaultPermission,
        options: this.options,
      });
    } else {
      const listCommands = await this.client.application.commands.fetch();
      for (const command of Array.from(listCommands)) {
        if (command[1].name === this.name) {
          await this.client.application.commands.delete(command[0]);
          break;
        }
      }
      await this.client.application.commands.create({
        name: this.name,
        description: this.description,
        type: this.type,
        defaultPermission: this.defaultPermission,
        options: this.options,
      });
    }
  }
}
