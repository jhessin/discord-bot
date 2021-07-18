import { Command } from "../types";

module.exports = new Command(
  "!server-info",
  "Get information for the current server",
  (msg) => {
    msg.guild &&
      msg.reply(
        `Server Name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`
      );
  }
);
