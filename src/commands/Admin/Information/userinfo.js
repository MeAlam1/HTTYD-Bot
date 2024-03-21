/**Servers:
 * How to Own a Dragon
 * Runic Isles Server
 * Ravenstone Peak
 */

/**Description:
 * This command is used to get a user's information.
 * ADMIN ONLY COMMAND
 */

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { time } = require('../../../functions');

const allowedServers = [
    '1120030006626750474', // How to Own a Dragon Server
    '1151497491288690688', // Runic Isles Server
    '1150598668219588701'  // Ravenstone Peak
];

const allowedRoles = [
    // How to Own a Dragon
    '1120030006626750474', // Owner Role
    '1133420066277437490', // Lead Dev Role
    '1161418815440166943', // Moderator Role
    // Runic Isles Server
    '1151500042843201576', // Server Owner Role
    '1189510610556301332', // Server Management Role
    '1203303940364439573', // Server Moderator Role
    // Ravenstone Peak
    '1204164498848743495', // Bot Creater
    '1157855652723560519', // Jr. Administrator
    '1154606355827658783', // Administrator
    '1150599340574900285', // Sr. Administrator
    '1169424986117767218', // Head Administrator
    '1150600192941359194', // Co-Owner
    '1150600195734786078', // Owner
    '1169424425477738577', // Founder
    '1195272590063849562'  // (Retired) Owner
];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Get a user\'s information.')
        .addUserOption((opt) =>
            opt.setName('user')
                .setDescription('The user.')
                .setRequired(false)
        ),
    run: async (client, interaction) => {
        
        if (!allowedServers.includes(interaction.guild.id)) {
            await interaction.reply({ content: 'This command is not available in this server.', ephemeral: true });
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

        const user = interaction.options.getUser('user') || interaction.user;
        const member = interaction.guild.members.cache.get(user.id);

        if (!member) {
            await interaction.reply({
                content: 'That user is not on the Server.'
            });

            return;
        };

        const roles = member.roles.cache
            .sort((a, b) => b.position - a.position)
            .filter(role => role.id !== member.guild.roles.everyone.id)
            .map(role => role.toString());

        const arr = [
            `**Username**: ${user.username}`,
            `**Display name**: ${member.nickname || user.displayName}`,
            `**ID**: ${user.id}`,
            `**Joined Discord**: ${time(user.createdTimestamp, 'd')} (${time(user.createdTimestamp, 'R')})`,
            `**Joined server**: ${time(member.joinedTimestamp, 'd')} (${time(member.joinedTimestamp, 'R')})`,
            `**Roles** [${roles.length}]:\n${roles.join('\n')}`,
            `**In a voice channel?**: ${member.voice.channel ? 'Yes' : 'No'}`,
            `**Guild owner?**: ${interaction.guild.ownerId === user.id ? 'Yes' : 'No'}`,
            `**Timed out?**: ${member.communicationDisabledUntilTimestamp ? 'Yes' : 'No'}`,
        ];

        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle('User info - ' + user.username)
                    .setThumbnail(member.displayAvatarURL())
                    .setDescription(`${arr.join('\n')}`)
                    .setColor('Blurple')
            ]
        });

    }
};