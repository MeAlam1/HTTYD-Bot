const { EmbedBuilder } = require('discord.js');

const HTOADInformationEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Server Information')
    .setURL('https://discord.com/channels/1120022058601029652/1120302121980543007/1173294933604585583')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription('Description goes here!')
    .addFields(
        { name: 'Subtitle goes here', value: `Personal message goes here` },
    )
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = HTOADInformationEmbed;