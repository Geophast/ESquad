const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("ESquad Project, !help");
    console.log("Le bot a bien été initialiser");
});

bot.login("bot.token");
