const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("ESquad Project, !help");
    console.log("Le bot a bien été initialiser");
});

bot.login("NDYwNDE2MDU1NDQyMDE0MjA4.DhEgRw.Y00-lMdbJyNXSLGWazZrEf38GUs");
