const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs')

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);

	bot.commands.set(command.name, command)
}