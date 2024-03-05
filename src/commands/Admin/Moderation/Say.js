/**Servers:
 * How to Own a Dragon
 * Runic Isles
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
    '1161418815440166943', // Moderator Role
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
            option.setName('message1')
                .setDescription('First line of the message')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('message2')
                .setDescription('Second line of the message')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('message3')
                .setDescription('Third line of the message')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('message4')
                .setDescription('Fourth line of the message')
                .setRequired(false))
        .addStringOption(option =>
            option.setName('message5')
                .setDescription('Fifth line of the message')
                .setRequired(false))
        .addAttachmentOption(option => 
            option.setName('attachment')
                .setDescription('Attachment to add to the Message.')
                .setRequired(false)),
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
        let messageContents = [
            options.getString('message1'),
            options.getString('message2'),
            options.getString('message3'),
            options.getString('message4'),
            options.getString('message5')
        ].filter(msg => msg !== null); // Filter out null values if any option is not provided
    
        const attachment = options.getAttachment('attachment');
        const files = attachment ? [attachment.url] : [];
    
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
            const sentMessage = await channel.send({
                content: messageContents.join('\n'), // Join the messages with a newline
                files: files
            });
            await interaction.reply({
                content: `Message sent to <#${channel.id}>.`,
                ephemeral: true
            });
    
            const messageLink = `https://discord.com/channels/${interaction.guild.id}/${channel.id}/${sentMessage.id}`;
    
            await channelLog.send({
                content: `Message sent to <#${channel.id}> by <@${interaction.user.id}>. [View Message](${messageLink})`,
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