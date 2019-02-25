import { Command } from "../Command";
import { Client, Message } from "discord.js";

module.exports = new Command("ping", function(bot: Client, message: Message, args: string) {
  message.reply("pong!");
});
