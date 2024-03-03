/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This command is used to add a note to a user.
 * ADMIN ONLY COMMAND
 */

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
                .setDescription('Type of note.'))
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

            function formatDateToMinutes(date) {
                const year = date.getFullYear();
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const day = date.getDate().toString().padStart(2, '0');
                const hours = date.getHours().toString().padStart(2, '0');
                const minutes = date.getMinutes().toString().padStart(2, '0');
                return `${year}-${month}-${day} ${hours}:${minutes}`;
            }

            const userOption = options.getUser('user');
            const noteDocument = await NoteSchema.create({
                guild: interaction.guild.id,
                moderator: interaction.user.id,
                user: userOption.id,
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
                .setColor(0xbf020f)
                .setTitle(`A note for ${userOption.tag} has been created!`)
                .setURL(`https://discord.com/users/${userOption.id}`)
                .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
                .setThumbnail(userOption.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                .addFields(
                    { name: 'Moderator', value: `<@${interaction.user.id}>`, inline: true },
                    { name: 'User', value: `<@${userOption.id}>`, inline: true },
                    { name: 'Note Type', value: noteDocument.type, inline: true },
                    { name: 'Status', value: noteDocument.status, inline: true },
                    { name: 'Visibility', value: noteDocument.visibility, inline: true },
                    { name: 'DM User', value: noteDocument.dmNotification ? 'Yes' : 'No', inline: true },
                    { name: 'Created At', value: formatDateToMinutes(noteDocument.createdAt), inline: true },
                    { name: 'Note', value: noteDocument.note },
                )
                .setTimestamp()
                .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });
                
            if (attachments.length > 0) {
                noteEmbed.setImage(attachments[0]);
            }
                
        await interaction.reply({ embeds: [noteEmbed] });

        if (noteDocument.dmNotification) {
            const dmEmbed = new EmbedBuilder()
                .setColor(0xbf020f)
                .setTitle(`You've received a new note!`)
                .setDescription(`A note has been added to your profile.`)
                .addFields(
                    { name: 'Note Type', value: noteDocument.type, inline: true },
                    { name: 'Created At', value: formatDateToMinutes(noteDocument.createdAt), inline: true },
                    { name: 'Note', value: noteDocument.note },
                )
                .setTimestamp()
                .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' })

                if (attachments.length > 0) {
                    dmEmbed.setImage(attachments[0]);
                }

            try {
                await userOption.send({ embeds: [dmEmbed] });
            } catch (error) {
                console.error("Failed to send DM", error);
                await interaction.followUp({ content: 'Failed to send DM to the user.', ephemeral: true });
            }
        }
    }
};                