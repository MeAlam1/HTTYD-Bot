const { EmbedBuilder } = require('discord.js');
const HTOAD = '1120022058601029652'; // How to Own a Dragon
const allowedRoles = [
    '1120030006626750474', // How to Own a Dragon Owner Role
    '1133420066277437490', // How to Own a Dragon Lead Dev Role
    '1140629154748956813'  // How to Own a Dragon Coder Role
];

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, message) => {
        if (!message.guild || message.guild.id !== HTOAD) return;

        if (!message.content.includes("POTL")) return;

        const hasRole = message.member.roles.cache.some(role => allowedRoles.includes(role.id));

        if (hasRole) return;

        const logChannelId = '1131214666757058654'; // Bot Testing Channel
        const logChannel = await client.channels.fetch(logChannelId);
        if (!logChannel) return; 

        const embed = new EmbedBuilder()
            .setColor(0xbf020f)
            .setTitle(`${message.author.tag}`) 
            .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
            .setDescription('A message containing "POTL" was sent in the server.')
            .setThumbnail(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) 
            .addFields(
                { name: 'The User:', value: `✨<@${message.author.id}>✨⠀⠀⠀⠀`, inline: true }, 
                { name: 'The User ID:', value: `✨${message.author.id}✨⠀⠀⠀⠀`, inline: true }, 
            )
            .addFields(
                { name: 'Message Content:', value: `${message.content}⠀⠀⠀⠀`}, 
                { name: 'The Message ID:', value: `✨${message.id}✨⠀⠀⠀⠀`, inline: true  }, 
            )
            .setTimestamp()
            .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

        await logChannel.send({ embeds: [embed] });

        await message.delete();
    }
};
