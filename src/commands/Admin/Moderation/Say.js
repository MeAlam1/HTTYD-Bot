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
    ].filter(msg => msg !== null);

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
            content: messageContents.join('\n'),
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
