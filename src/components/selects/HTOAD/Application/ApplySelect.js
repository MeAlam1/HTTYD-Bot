const { ChannelType, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const HTOADDiscordBotCoderApplyEmbed = require('../../../../embed/HTOAD/Application/DiscordBotCoderApplyEmbed.js');
const HTOADWebsiteCoderApplyEmbed = require('../../../../embed/HTOAD/Application/WebsiteCoderApplyEmbed.js');
const HTOADModelerApplyEmbed = require('../../../../embed/HTOAD/Application/ModelerApplyEmbed.js');
const HTOADAnimatorApplyEmbed = require('../../../../embed/HTOAD/Application/AnimatorApplyEmbed.js');
const HTOADSFXArtistApplyEmbed = require('../../../../embed/HTOAD/Application/SFXArtistApplyEmbed.js');
const HTOADConceptArtistApplyEmbed = require('../../../../embed/HTOAD/Application/ConceptArtistApplyEmbed.js');
const HTOADBuilderApplyEmbed = require('../../../../embed/HTOAD/Application/BuilderApplyEmbed.js');
const HTOADTextureArtistApplyEmbed = require('../../../../embed/HTOAD/Application/TextureArtistApplyEmbed.js');
const HTOADTesterApplyEmbed = require('../../../../embed/HTOAD/Application/TesterApplyEmbed.js');
const HTOADTranslatorApplyEmbed = require('../../../../embed/HTOAD/Application/TranslatorApplyEmbed.js');


module.exports = {
    customId: 'apply-category',
    run: async (client, interaction) => {
        
        const value = interaction.values[0];

        // Base channel name
        let channelName = `${interaction.user.username.replace(/\s+/g, '-').toLowerCase()}`;

        // Adjust channelName based on the value
        switch (value) {
            case 'htoad-apply-discord-bot-coder':
                channelName += '-discord-bot-coder';
                break;
            case 'htoad-apply-website-coder':
                channelName += '-website-coder';
                break;
            case 'htoad-apply-modeler':
                channelName += '-modeler';
                break;
            case 'htoad-apply-animator':
                channelName += '-animator';
                break;
            case 'htoad-apply-sfx-artist':
                channelName += '-sfx-artist';
                break;
            case 'htoad-apply-concept-artist':
                channelName += '-concept-artist';
                break;
            case 'htoad-apply-builder':
                channelName += '-builder';
                break;
            case 'htoad-apply-texture-artist':
                channelName += '-texture-artist';
                break;
            case 'htoad-apply-tester':
                channelName += '-tester';
                break;
            case 'htoad-apply-translator':
                channelName += '-translator';
                break;
            // You can add more cases as needed
            default:
                // Keep the base channelName if no match is found
                break;
        }

        // How to Own a Dragon
        const categoryId = '1200532880019951726'; // Applications Category

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
                {
                    id: '1133420066277437490', // Lead Dev
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
                }, 
                {
                    id: '1161418815440166943', // Moderator
                    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
                },
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
        await channel.send({
            embeds: [HTOADDiscordBotCoderApplyEmbed],
            components: [row],
        });
    } else if (value === 'htoad-apply-website-coder') {
        await channel.send({
            embeds: [HTOADWebsiteCoderApplyEmbed],
            components: [row],
        });
    } else if (value === 'htoad-apply-modeler') {
        await channel.send({
            embeds: [HTOADModelerApplyEmbed],
            components: [row],
        });
    } else if (value === 'htoad-apply-animator') {
        await channel.send({
            embeds: [HTOADAnimatorApplyEmbed],
            components: [row],
        });
    } else if (value === 'htoad-apply-sfx-artist') {
        await channel.send({
            embeds: [HTOADSFXArtistApplyEmbed],
            components: [row],
        });
    } else if (value === 'htoad-apply-concept-artist') {
        await channel.send({
            embeds: [HTOADConceptArtistApplyEmbed],
            components: [row],
        });
    } else if (value === 'htoad-apply-builder') {
        await channel.send({
            embeds: [HTOADBuilderApplyEmbed],
            components: [row],
        });
    } else if (value === 'htoad-apply-texture-artist') {
        await channel.send({
            embeds: [HTOADTextureArtistApplyEmbed],
            components: [row],
        });
    } else if (value === 'htoad-apply-tester') {
        await channel.send({
            embeds: [HTOADTesterApplyEmbed],
            components: [row],
        });
    } else if (value === 'htoad-apply-translator') {
        await channel.send({
            embeds: [HTOADTranslatorApplyEmbed],
            components: [row],
        });
    }
});
}
};