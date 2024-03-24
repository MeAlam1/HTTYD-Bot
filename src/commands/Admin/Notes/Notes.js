/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This command is used to read the notes of a user.
 * ADMIN ONLY COMMAND
 */

const { SlashCommandBuilder, EmbedBuilder, StringSelectMenuBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
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
        const allowedServers = [
            '1120022058601029652', // How to Own a Dragon
        ]

        if (!allowedServers.includes(interaction.guild.id)) {
            await interaction.reply({ content: 'This command is not available in this server.', ephemeral: true });
            return;
        }

        const allowedRoles = [
            '1120030006626750474', // How to Own a Dragon Owner Role
            '1133420066277437490', // How to Own a Dragon Lead Dev Role
            '1161418815440166943'  // How to Own a Dragon Moderator Role
        ];
        
        const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));
        
        if (!hasRole) {
            await interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
            return;
        }

        const userOption = interaction.options.getUser('user');
        const notes = await NoteSchema.find({ userId: userOption.id, guildId: interaction.guild.id, isHidden: false }).sort({ createdAt: -1 });

        if (!notes.length) {
            await interaction.reply({ content: `No notes found for ${userOption.username}.`, ephemeral: true });
            return;
        }

        const noteEmbed = new EmbedBuilder()
            .setColor(0xbf020f)
            .setTitle(`Notes for ${userOption.username} in ${interaction.guild}`)
            .setURL(`https://discord.com/users/${userOption.id}`)
            .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
            .setThumbnail(userOption.displayAvatarURL({ dynamic: true }));

        let lastModeratorId = null;
        let displayedNotes = notes.slice(0, 25);
        
        displayedNotes.forEach((note, index) => {
            const discordTimestamp = `<t:${Math.floor(new Date(note.createdAt).getTime() / 1000)}:R>`;
            const noteContent = note.note.length > 1020 ? note.note.substring(0, 1020) + '...' : note.note;
            const isSameModeratorAsPrevious = note.moderatorId === lastModeratorId;

            const fieldsToAdd = [];

            if (!isSameModeratorAsPrevious) {
                fieldsToAdd.push({ name: `Moderator:`, value: `<@${note.moderatorId}>`, inline: false });
            }

            fieldsToAdd.push(
                { name: `Note ${index + 1}`, value: noteContent },
                { name: `Rule Broken:`, value: note.ruleBroken },
                { name: `Punishment:`, value: note.punishment },
                { name: `Created:`, value: discordTimestamp, inline: true }
            );

            noteEmbed.addFields(fieldsToAdd);

            lastModeratorId = note.moderator;
        });

        const selectOptions = displayedNotes.map((note, index) => ({
            label: `Note ${index + 1}`,
            description: `Select to view details about Note ${index + 1}`,
            value: `note_${index + 1}`,
        }));

        const serverOptions = client.guilds.cache.filter(guild => guild.id !== interaction.guild.id).map(guild => ({
            label: guild.name,
            description: `Select to view notes for ${userOption.username} in ${guild.name}`,
            value: `${guild.id}_${userOption.id}`,
        }));

        await interaction.reply({ embeds: [noteEmbed], components: [
            new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('all-notes-select')
                        .setPlaceholder('Select a Note to view details.')
                        .addOptions(selectOptions)
                ),
            new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('server-notes-select')
                        .setPlaceholder('Select a server.')
                        .addOptions(serverOptions)
                ),
            new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('edit-note-button')
                        .setLabel('Edit Note')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('✏️')
                )
        ] });
    }
};
