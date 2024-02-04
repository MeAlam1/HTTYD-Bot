const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');
const HTOAD = ['1120022058601029652'];
const Runic = ['1151585202506838036', '1151497491288690688', '1203659334177792080']

const HTOADHelpEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Help')
    .setURL('https://discord.com/channels/1120022058601029652/1120302121980543007/1173294933604585583')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription('Welcome to How to Own a Dragon. If you have any questions, please check <#1120302121980543007>!')
    .addFields(
        { name: 'Links', value: `**[/faq](https://discord.com/channels/1120022058601029652/1120302121980543007/1173294933604585583)** - Please read the FAQ before asking Questions!
        **[/google-drive](https://drive.google.com/drive/folders/1fKXuKjjZOmeRWR5Ar2EhiDnHyMm_Ikbx?usp=sharing)** - To open the Google Drive!
        **[/eta](https://www.curseforge.com/minecraft/mc-mods/how-to-own-a-dragon/files/all?page=1&pageSize=20)** - We already released the First Alpha!
        
        ` },
    )
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

const RunicHelpEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Help')
    .setURL('https://discord.com/channels/1151497491288690688/1203741477424070656/1203744983912419359')
    .setAuthor({ name: 'Runic Isles', iconURL: 'https://imgur.com/KgKhMsg.png'})
    .setDescription('Welcome to Runic Isles. If you have any questions, please check <#1203741477424070656>!')
    .addFields(
        { name: '\u200B', value: `**/eta** - Check if we released the Mod!
        ` },
    )
    .setTimestamp()
    .setFooter({ text: 'Runic Isles Management Team', iconURL: 'https://imgur.com/KgKhMsg.png' });

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Check all the Commands available in the server!'),
    run: async (client, interaction, args) => {
        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [HTOADHelpEmbed]
            });
        } else if (interaction.guild && Runic.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [RunicHelpEmbed]
            });
        } else {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};
