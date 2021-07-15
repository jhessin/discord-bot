import { Command } from "../types";

const cmd: Command = {
  name: "!emojis",
  description: "Simple emojis command",
  execute(msg, args = []) {
    //msg.channel.send(":smile:");
    //msg.channel.send("🏊😃");
    const emoji = msg.guild && msg.guild.emojis.cache.first();
    msg.channel.send(`Custom emoji: ${emoji}`);
  },
};

module.exports = cmd;
