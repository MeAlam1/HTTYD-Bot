const { ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');
const RunicETAEmbed = require('../../../components/embed/Runic/ETAEmbed.js');
const HTOAD = ['1120022058601029652'];
const Runic = ['1151585202506838036', '1151497491288690688', '1203659334177792080']

const HTOADETAEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Estimated Time of Arrival (ETA)')
    .setURL('https://discord.com/channels/1120022058601029652/1120302121980543007/1173294933604585583')
    .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
    .setImage('https://imgur.com/xEKQnvq.png')
    .setDescription('The first Alpha already has been released!')
    .addFields(
        { name: 'Links', value: `**[Curseforge](https://www.curseforge.com/minecraft/mc-mods/how-to-own-a-dragon)** - To open the Curseforge page!
        **[Github](https://github.com/MeAlam1/How-to-Own-a-Dragon)** - To open the Github page!` },
    )
    .setTimestamp()
    .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('eta')
        .setDescription('Check when the mod releases!'),
    run: async (client, interaction, args) => {
        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [HTOADETAEmbed]
            });
        } else if (interaction.guild && Runic.includes(interaction.guild.id)) {
            await interaction.reply({
                embeds: [RunicETAEmbed]
            });
        } else {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
        }
    }
};
