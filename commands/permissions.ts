import { PermissionResolvable } from "discord.js";
import { Command } from "../types";

module.exports = new Command(
  "!permissions",
  "Simple Permissions command",
  (msg, cmd, ...args) => {
    const [subcmd] = args;
    if (!msg.member || !msg.member.hasPermission("MANAGE_ROLES"))
      return msg.reply("You do not have Role Management Permissions");

    switch (cmd) {
      case "create-role":
        msg.guild &&
          msg.guild.roles
            .create({
              data: {
                name: subcmd,
                permissions: ["KICK_MEMBERS"],
              },
            })
            .then((role) => msg.channel.send(`Role ${role.name} created!`))
            .catch((err) => console.log(err));
        break;
      case "assign":
        let role = msg.member.guild.roles.cache.find(
          (role) => role.name === args.join(" ")
        );

        if (!role) return msg.reply("role not found");

        const member = msg.guild && msg.guild.members.cache.get(msg.author.id);
        member &&
          member.roles
            .add(role)
            .then(() => msg.reply(`role: ${role!.name} assigned`));
        break;

      case "checkperm":
        if (
          msg.member &&
          msg.member.hasPermission(subcmd as PermissionResolvable)
        )
          msg.reply(`Yes you can: ${subcmd}`);
        else msg.reply(`No you can't!`);
        break;
      default:
        break;
    }
  }
);
