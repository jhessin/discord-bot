import { PermissionResolvable } from "discord.js";
import { Command } from "../types";

const cmd: Command = {
  name: "!permissions",
  description: "Simple Permissions command",
  execute(msg, args = []) {
    if (!msg.member || !msg.member.hasPermission("MANAGE_ROLES"))
      return msg.reply("You do not have Role Management Permissions");

    switch (args[0]) {
      case "create-role":
        msg.guild &&
          msg.guild.roles
            .create({
              data: {
                name: args[1],
                permissions: ["KICK_MEMBERS"],
              },
            })
            .then((role) => msg.channel.send(`Role ${role.name} created!`))
            .catch((err) => console.log(err));
        break;
      case "assign":
        let role = msg.member.guild.roles.cache.find(
          (role) => role.name === args.slice(1).join(" ")
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
          msg.member.hasPermission(args[1] as PermissionResolvable)
        )
          msg.reply(`Yes you can: ${args[1]}`);
        else msg.reply(`No you can't!`);
        break;
      default:
        break;
    }
  },
};

module.exports = cmd;
