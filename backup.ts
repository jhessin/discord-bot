switch (args[0].toLowerCase()) {
  // PING-PONG
  case "!ping":
    msg.reply("PONG!");
    break;

  // server-info
  case "!server-info":
    if (guild) {
      msg.reply(`
Server Name: ${guild.name}
Total members: ${guild.memberCount}
`);
    }
    break;
  case "!user-info":
    if (author) {
      msg.reply(`
User id: ${author.id}
Created at: ${author.createdAt}
`);
    }
    break;
  case "!args-info":
    if (args.length <= 1) {
      msg.reply("Arguments required");
    } else {
      msg.reply(
        `Command Name: ${args[0]}
Arguments: ${args.slice(1)}`
      );
    }
    break;
  case "!kick":
    if (!msg.member || !msg.member.hasPermission("KICK_MEMBERS")) {
      return msg.reply("You don't have permission to kick people.");
    }

    if (!guild) return msg.reply("ERROR: Channel NOT FOUND!");

    if (args.length <= 1) {
      return msg.reply("Provide a user");
    }

    for (const [_, user] of users) {
      if (user) {
        const memberTarget = guild.members.cache.get(user.id);
        if (!memberTarget) return;
        memberTarget.kick();
      } else {
        msg.reply("User not found");
      }
    }
    break;
  case "!ban":
    if (!msg.member || !msg.member.hasPermission("BAN_MEMBERS")) {
      return msg.reply("You don't have permission to ban people.");
    }

    if (!guild) return msg.reply("ERROR: Channel NOT FOUND!");

    if (args.length <= 1) {
      return msg.reply("Provide a user");
    }

    for (const [_, user] of users) {
      if (user) {
        const memberTarget = guild.members.cache.get(user.id);
        if (!memberTarget) return;
        memberTarget.ban();
      } else {
        msg.reply("User not found");
      }
    }
    break;
  default:
    break;
}
