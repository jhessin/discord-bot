import { Command } from "../types";

module.exports = new Command("!ban", "Ban the given user", (msg) => {
  if (!msg.member || !msg.member.hasPermission("BAN_MEMBERS")) {
    return msg.reply("You don't have permission to ban people.");
  }

  const { users } = msg.mentions;

  for (const [_, user] of users) {
    if (user) {
      const target = msg.guild && msg.guild.members.cache.get(user.id);
      target && target.ban();
    } else {
      msg.reply("User not found");
    }
  }
});
