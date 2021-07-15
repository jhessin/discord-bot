import "dotenv/config";
import Discord, { Client, Collection } from "discord.js";
import { Command } from "./types";
import fs from "fs";

interface MyClient extends Client {
  commands?: Collection<string, Command>;
}

const client: MyClient = new Client();
const token = process.env.BOT_TOKEN;

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".ts"));

for (const file of commandFiles) {
  const command: Command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("Ready");
});

client.on("message", (msg) => {
  const { author } = msg;

  if (author.bot) return;

  console.log(msg.content);
  const args = msg.content.trim().split(/ +/);

  if (client.commands && client.commands.has(args[0])) {
    const cmd = client.commands.get(args[0]);
    cmd && cmd.execute(msg, args.slice(1));
  }
});

client.login(token);
