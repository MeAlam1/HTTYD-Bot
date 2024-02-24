// Testing The new: AntiSpam Logging Embed

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const HTOAD = ['1120022058601029652']; // How to Own a Dragon
const allowedRoles = [
    '1120030006626750474', // How to Own a Dragon Owner Role
    '1133420066277437490', // How to Own a Dragon Lead Dev Role
    '1140629154748956813'  // How to Own a Dragon Coder Role
];

const TestEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('How to Train your Dragon Content')
    .setURL('https://drive.google.com/drive/folders/1fKXuKjjZOmeRWR5Ar2EhiDnHyMm_Ikbx?usp=sharing')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .setImage('https://imgur.com/oAi74ES.png')
    .setDescription('[Google Drive](https://drive.google.com/drive/folders/1fKXuKjjZOmeRWR5Ar2EhiDnHyMm_Ikbx?usp=sharing) - Click here to open the Google Drive!')
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Admin Only!!!'),
    run: async (client, interaction, args) => {
        if (!interaction.guild || !HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
            return;
        }

        const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));
        
        if (!hasRole) {
            await interaction.reply({
                content: 'You do not have permission to use this command.',
                ephemeral: true
            });
            return;
        }
        
            await interaction.reply({
                embeds: [TestEmbed]
            });
    }
};