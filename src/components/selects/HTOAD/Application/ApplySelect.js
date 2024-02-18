module.exports = {
    customId: 'apply-category',
    run: async (client, interaction) => {
        
    const value = interaction.values[0];

    // How to Own a Dragon
    const categoryId = '1200532880019951726'; // Ticket Category
    const channelName = `Application-${interaction.user.username.replace(/\s+/g, '-').toLowerCase()}`;

    interaction.guild.channels.create({
        name: channelName,
        type: ChannelType.GuildText,
        parent: categoryId, 
        permissionOverwrites: [
            {
                id: interaction.user.id, // User that Creates the Ticket
                allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages], 
            },
            {
                id: interaction.guild.roles.everyone, // Everyone
                deny: [PermissionFlagsBits.ViewChannel],
            },
            /**{
                id: '1133420066277437490', // Lead Dev
                allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
            }, 
            {
                id: '1161418815440166943', // Moderator
                allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
            }, */
        ],
    }).then(async channel => {
        interaction.reply({
            content: `Your Application has been created! <#${channel.id}>`,
            ephemeral: true
        });


        const CloseApplicationButton = new ButtonBuilder()
         .setCustomId('close-ticket-button')
         .setLabel('Close Application')
         .setStyle(ButtonStyle.Danger);

         const RenameApplicationButton = new ButtonBuilder()
         .setCustomId('htoad-rename-channel-button')
         .setLabel('Rename Channel')
         .setStyle(ButtonStyle.Danger);


        const row = new ActionRowBuilder().addComponents(CloseApplicationButton, RenameApplicationButton);
          
    

    if (value === 'htoad-apply-discord-bot-coder') {
        await interaction.reply({
            content: 'You have selected the `Discord Bot Coder` role.',
            components: [row],
            ephemeral: true
        });
    } else if (value === 'htoad-apply-website-coder') {
        await interaction.reply({
            content: 'You have selected the `Website Coder` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-modeler') {
        await interaction.reply({
            content: 'You have selected the `Modeler` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-animator') {
        await interaction.reply({
            content: 'You have selected the `Animator` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-sfx-artist') {
        await interaction.reply({
            content: 'You have selected the `SFX Artist` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-concept-artist') {
        await interaction.reply({
            content: 'You have selected the `Concept Artist` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-builder') {
        await interaction.reply({
            content: 'You have selected the `Builder` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-texture-artist') {
        await interaction.reply({
            content: 'You have selected the `Texture Artist` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-tester') {
        await interaction.reply({
            content: 'You have selected the `Tester` role.',
            ephemeral: true
        });
    } else if (value === 'htoad-apply-translator') {
        await interaction.reply({
            content: 'You have selected the `Translator` role.',
            ephemeral: true
        });
    }
});
}
};