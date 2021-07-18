import { Command } from "../types";
import { MessageEmbed } from "discord.js";

module.exports = new Command("!embed", "Custom bot message", (msg) => {
  const embedMsg = new MessageEmbed()
    .setTitle("Custom Msg")
    .setAuthor("Jim")
    .attachFiles([
      "https://i.imgur.com/wSTFkRM.png",
      "https://sample-videos.com/doc/Sample-doc-file-100kb.doc",
    ])
    .setFooter("Sample Footer");

  if (msg.author && msg.author.bot) {
    embedMsg.setTitle("Modify");
  }
  msg.channel.send(embedMsg);
});
