import { Command } from "../types";

const ping: Command = {
  name: "!ping",
  description: "Simple ping command",
  execute(msg) {
    msg.reply("Pong");
  },
};

module.exports = ping;
