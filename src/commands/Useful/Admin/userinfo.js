const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { time } = require('../../../functions');
const HTOAD = ['1120022058601029652', `1151585202506838036`, `1151497491288690688`];
const allowedRoles = ['1120030006626750474', '1133420066277437490', '1161418815440166943', '1151500042843201576', '1189510610556301332', '1203303940364439573', '1151758461412057098', '1153054168127381544', '1203312420987211776'];

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

        const user = interaction.options.getUser('user') || interaction.user;
        const member = interaction.guild.members.cache.get(user.id);

        if (!member) {
            await interaction.reply({
                content: 'That user is not on the guild.'
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