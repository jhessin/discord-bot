import { Command } from "../types";

module.exports = new Command(
  "!user-info",
  "Returns info for the current user",
  (msg) => {
    msg.author &&
      msg.reply(
        `User id: ${msg.author.id}\nCreated at: ${msg.author.createdAt}`
      );
  }
);
