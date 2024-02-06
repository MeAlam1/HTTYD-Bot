const { ChannelType, PermissionFlagsBits, EmbedBuilder } = require('discord.js');

module.exports = {
    customId: 'create-ticket-button',
    run: async (client, interaction) => {
        const categoryId = '1126638959716470886'; 
        const channelName = `ticket-${interaction.user.username.replace(/\s+/g, '-').toLowerCase()}`;

        interaction.guild.channels.create({
            name: channelName,
            type: ChannelType.GuildText,
            parent: categoryId, 
            permissionOverwrites: [
                {
                    id: interaction.user.id,
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages], 
                },
                {
                    id: interaction.guild.roles.everyone,
                    deny: [PermissionFlagsBits.ViewChannel],
                },
            ],
        }).then(channel => {
            interaction.reply({
                content: `Your ticket has been created! [${channel.name}](https://discord.com/channels/${interaction.guild.id}/${channel.id})`,
                ephemeral: true
            });

            const embed = new EmbedBuilder()
                .setTitle('Welcome to your ticket!')
                .setDescription('Please describe your issue, and we will be with you shortly.')
                .setColor(0x0099FF);

            channel.send({ embeds: [embed] });
        }).catch(console.error);
    }
};
