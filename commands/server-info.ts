import { Command } from "../types";

const cmd: Command = {
  name: "!server-info",
  description: "Get information for the current server",
  execute(msg) {
    msg.guild &&
      msg.reply(
        `Server Name: ${msg.guild.name}
Total members: ${msg.guild.memberCount}`
      );
  },
};

module.exports = cmd;
