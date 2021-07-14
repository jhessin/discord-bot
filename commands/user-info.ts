import { Command } from "../types";

const cmd: Command = {
  name: "!user-info",
  description: "Returns info for the current user",
  execute(msg) {
    msg.author &&
      msg.reply(
        `User id: ${msg.author.id}
Created at: ${msg.author.createdAt}`
      );
  },
};

module.exports = cmd;
