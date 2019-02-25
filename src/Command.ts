import { Client, Message } from "discord.js";

export type CommandName = string
export type CustomCommand = (
  bot: Client,
  message: Message,
  args: string
) => void;

export class Command {
  name: CommandName
  func: CustomCommand;

  constructor(name: CommandName, func: CustomCommand) {
    this.name = name;
    this.func = func;
  }
  
  execute(bot: Client, message: Message, args: string) {
    console.log(`Executing "${this.name}" with args: "${args}"`);
    this.func(bot, message, args);
  }
}
