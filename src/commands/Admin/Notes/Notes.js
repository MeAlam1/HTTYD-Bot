/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This command is used to read the notes of a user.
 * ADMIN ONLY COMMAND
 */

const { SlashCommandBuilder, EmbedBuilder, StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');
const NoteSchema = require('../../../schemas/Notes/NotesSchema.js');

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('notes')
        .setDescription('Read the notes of a user.')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('Select a user to view notes for.')
                .setRequired(true)),
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

        const userOption = interaction.options.getUser('user');
        const notes = await NoteSchema.find({ user: userOption.id, guild: interaction.guild.id });

        if (!notes.length) {
            await interaction.reply({ content: `No notes found for ${userOption.username}.`, ephemeral: true });
            return;
        }

        const noteEmbed = new EmbedBuilder()
            .setColor(0xbf020f)
            .setTitle(`Notes for ${userOption.username}`)
            .setURL(`https://discord.com/users/${userOption.id}`)
            .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
            .setThumbnail(userOption.displayAvatarURL({ dynamic: true }));

        const displayedNotes = notes.slice(0, 25);

        displayedNotes.forEach((note, index) => {
            const discordTimestamp = `<t:${Math.floor(new Date(note.createdAt).getTime() / 1000)}:R>`;
            const noteContent = note.note.length > 1020 ? note.note.substring(0, 1020) + '...' : note.note;
            noteEmbed.addFields(
                { name: `Note ${index + 1}`, value: noteContent, inline: true},
                { name: `Created:`, value: discordTimestamp, inline: true },
                { name: `Moderator:`, value: `<@${note.moderator}>`, inline: true},
            );
        });

        const selectOptions = notes.map((note, index) => ({
            label: `Note ${index + 1}`,
            description: `Select to view details about Note ${index + 1}`,
            value: `note_${index + 1}`,
        }));
    
        await interaction.reply({ embeds: [noteEmbed], components: [
            new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('all-notes')
                        .setPlaceholder(`Select a Note to view details.`)
                        .addOptions(selectOptions)
                )
        ], });
    }
};
