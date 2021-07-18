import { Command } from "../types";

module.exports = new Command("!ping", "Simple ping command", (msg) => {
  msg.reply("Pong");
});
