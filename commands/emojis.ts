import { Command } from "../types";

module.exports = new Command("!emojis", "Simple emojis command", (msg) => {
  const emoji = msg.guild && msg.guild.emojis.cache.first();
  msg.channel.send(`Custom emoji: ${emoji}`);
});
