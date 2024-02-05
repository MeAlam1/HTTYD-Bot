const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652'];

const HTOADFAQEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Frequently Asked Questions')
    .setURL('https://discord.com/channels/1120022058601029652/1120302121980543007/1173294933604585583')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription('Welcome to How to Own A Dragon. If you have any questions, please check <#1120302121980543007> to see if they have already been answered. Have fun playing!')
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('faq')
        .setDescription('Please read the FAQ before asking questions!'),
    run: async (client, interaction, args) => {
        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [HTOADFAQEmbed]
            });
        } else {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};

