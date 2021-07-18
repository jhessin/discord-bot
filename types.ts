import { Message } from "discord.js";

export type IExecute = (msg: Message, ...args: string[]) => void;

export class Command {
  name: string;
  description: string;
  execute: IExecute;

  constructor(name: string, description: string, execute: IExecute) {
    this.name = name;
    this.description = description;
    this.execute = execute;
  }
}
