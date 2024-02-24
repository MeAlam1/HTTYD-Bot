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

        // Check if the message content matches "POTL"
        if (!message.content.includes("POTL")) return;

        // Check if the member has one of the allowed roles
        const hasRole = message.member.roles.cache.some(role => allowedRoles.includes(role.id));

        // If the member does not have an allowed role, do nothing
        if (!hasRole) return;

        const logChannelId = '1203770237795836004'; // Bot Testing Channel
        const logChannel = await client.channels.fetch(logChannelId);
        if (!logChannel) return; // Stop if log channel is not found

        const embed = new EmbedBuilder()
            .setColor(0xbf020f)
            .setTitle(`${message.author.tag}`) // User that sent the message
            .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
            .setDescription('A message containing "POTL" was sent in the server.')
            .setThumbnail(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) // Profile Picture of User
            .addFields(
                { name: 'The User:', value: `***User:*** <@${message.author.id}>`, inline: true }, // The Ping of the User
                { name: 'The User ID:', value: `***ID:*** ${message.author.id}`, inline: true }, // The ID of the User
                { name: 'The Message ID:', value: `***ID:*** ${message.id}`, inline: true  }, // The Message ID
            )
            .addFields(
                { name: 'Message Content:', value: `***Message:*** ${message.content}` } // The Message that was sent
            )
            .setTimestamp()
            .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

        await logChannel.send({ embeds: [embed] });

        // Delete the original message
        await message.delete();
    }
};
