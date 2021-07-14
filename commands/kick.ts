import { Command } from "../types";

const kick: Command = {
  name: "!kick",
  description: "kick the given user",
  execute(msg) {
    if (!msg.member || !msg.member.hasPermission("KICK_MEMBERS")) {
      return msg.reply("You don't have permission to kick people.");
    }

    const { users } = msg.mentions;

    for (const [_, user] of users) {
      if (user) {
        const target = msg.guild && msg.guild.members.cache.get(user.id);
        target && target.kick();
      } else {
        msg.reply("User not found");
      }
    }
  },
};

module.exports = kick;
