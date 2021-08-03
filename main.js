const Discord = require('discord.js');
const client = new Discord.Client();
const randomstring = require("randomstring");

const prefix = '~';

client.on('message', msg => {

    let args = msg.content.slice(prefix.length).trim().split(' ');

    if (msg.content.startsWith(`${prefix}setup`)) {

        if (!msg.guild.member(client.user).hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) return;
        msg.guild.channels.create(`mining`, 'text').catch(e => { });

    }

    if (msg.content.startsWith(`${prefix}gen`)) {

        msg.delete()

        msg.channel.send("https://discord.gift/" + randomstring.generate(24));

    }


    if (msg.content.startsWith(`${prefix}start`)) {
        if (!msg.guild.member(client.user).hasPermission(["ADMINISTRATOR"])) return;

        msg.delete()

        var interval = setInterval(function () {

            msg.channel.send("https://discord.gift/" + randomstring.generate(24));

        }, 2000);

    }

});

client.on('ready', async () => {
    console.log('lets mine!')

    let statuses = [
        `skuva`,
        `ok`,
        `${client.users.cache.size} Miners👀`
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {
            type: "STREAMING",
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        })
    }, 4000)
})

client.login('TOKEN')