/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * this command is used to send a message thru the Bot to a specific channel.
 * ADMIN ONLY COMMAND
 */

const { SlashCommandBuilder } = require('discord.js');
const AllowedServers = [
    '1120022058601029652',  // How to Own a Dragon
    '1151497491288690688'  // Runic Isles

];
const HTOAD = ['1120022058601029652']; // How to Own a Dragon
const Runic = ['1151497491288690688']; // Runic Isles
const allowedRoles = [
    // How to Own a Dragon
    '1120030006626750474', // Owner Role
    '1133420066277437490', // Lead Dev Role
    '1140629154748956813', // Coder Role
    // Runic Isles
    '1151500042843201576', // Owner Role
    '1214620041425846272'  // Bot Coder Role

];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Send a Bot Message.')
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('Channel to send the message to.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('message')
                .setDescription('Message to send.')
                .setRequired(true)),
    run: async (_, interaction) => {
        if (!interaction.guild || !AllowedServers.includes(interaction.guild.id)) {
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
        
        const { options } = interaction;
        const channelOption = options.getChannel('channel');
        const messageOption = options.getString('message');

        let channelLogId;

        if (interaction.guild && HTOAD.includes(interaction.guild.id)) {
            channelLogId = '1168633539676344490'; // How to Own a Dragon Log Channel 
        } else if (interaction.guild && Runic.includes(interaction.guild.id)) {
            channelLogId = '1151645114146488390'; // Runic Isles Log Channel
        }
        
        const channelLog = interaction.guild.channels.cache.get(channelLogId);

        const channel = interaction.guild.channels.cache.get(channelOption.id);
        if (!channel) {
            await interaction.reply({
                content: 'The channel you provided is not valid.',
                ephemeral: true
            });
            return;
        }
        try {
            await channel.send(messageOption);
            await interaction.reply({
                content: `Message sent to ${channel.name}.`,
                ephemeral: true
            });
            await channelLog.send({
                content: `Message sent to ${channel.name} by ${interaction.user.tag}.`,
            });

        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: 'An error occurred while sending the message.',
                ephemeral: true
            });
        }
    }
};
