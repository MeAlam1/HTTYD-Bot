const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const NoteSchema = require('../../../schemas/Notes/NotesSchema.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('addnote')
        .setDescription('Add a note about a user.')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('User to add the note to.')
                .setRequired(true))
        .addStringOption(option => 
            option.setName('note')
                .setDescription('Text to add as note.')
                .setRequired(true))
        .addStringOption(option => 
            option.setName('type')
                .setDescription('type for the note.'))
        .addStringOption(option => 
            option.setName('status')
                .setDescription('Status of the note.')
                .addChoices(
                    { name: 'Open', value: 'open' },
                    { name: 'Closed', value: 'closed' }
                ))
        .addAttachmentOption(option => 
            option.setName('attachment')
                .setDescription('Attachment to add to the note.'))
        .addBooleanOption(option => 
            option.setName('dm')
                .setDescription('DM the user?')),
    run: async (client, interaction) => {
        const allowedRoles = [
            '1120030006626750474', // How to Own a Dragon Owner Role
            '1133420066277437490', // How to Own a Dragon Lead Dev Role
        ];

        const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));

        if (!hasRole) {
            await interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
            return;
        }

        const { options } = interaction;

        const attachmentOption = options.getAttachment('attachment');
        let attachments = [];
        if (attachmentOption) {
            attachments.push(attachmentOption.url);
        }

        await NoteSchema.create({
            guild: interaction.guild.id,
            moderator: interaction.user.id,
            user: options.getUser('user').id,
            note: options.getString('note'),
            createdAt: new Date(),
            updatedAt: new Date(),
            isHidden: false,
            type: options.getString('type') || 'general',
            status: options.getString('status') || 'closed',
            attachments: attachments,
            visibility: 'public',
            dmNotification: options.getBoolean('dm') || false,
        });

        const noteEmbed = new EmbedBuilder()
        .setColor('#0099ff')
        .setTitle(`A note for ${NoteSchema.user} has been created! `) 
        .setURL(`https://discord.com/users/${NoteSchema.user}`)
        .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
        .setThumbnail(options.getUser('user').displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        .addFields(
            { name: 'Moderator', value: `<@${NoteSchema.moderator}>`, inline: true },
            { name: 'User', value: `<@${NoteSchema.user}>`, inline: true },
            { name: 'Note Type', value: NoteSchema.type, inline: true },
            { name: 'Status', value: NoteSchema.status, inline: true },
            { name: 'visibility', value: NoteSchema.visibility, inline: true },
            { name: 'DM Notification', value: NoteSchema.dmNotification, inline: true },
            { name: 'Created At', value: NoteSchema.createdAt, inline: true },
            { name: 'Note', value: NoteSchema.note },
        )
        .setTimestamp()
        .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

    if (attachments.length > 0) {
        noteEmbed.setImage(attachments[0]); 
    }

    await interaction.reply({ embeds: [noteEmbed] });
    }
};