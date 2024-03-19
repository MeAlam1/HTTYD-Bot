/**Description:
 * This Select is used to view the notes of the user in another server.
 * src\commands\Admin\Notes\Notes.js
 */

const { EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const NoteSchema = require('../../../../schemas/Notes/NotesSchema.js');

module.exports = {
    customId: 'server-notes',
    run: async (client, interaction) => {
        const selectedValue = interaction.values[0];
        const [guildId, userOptionId] = selectedValue.split('_');
        const user = await client.users.fetch(userOptionId);

        const notes = await NoteSchema.find({ userId: userOptionId, guildId, isHidden: false }).sort({ createdAt: -1 });

        if (!notes.length) {
            await interaction.reply({ content: `No public notes found for <@${userOptionId}> in <#${guildId}>.`, ephemeral: true });
            return;
        }

        const noteEmbed = new EmbedBuilder()
            .setColor(0xbf020f)
            .setTitle(`Notes for ${user.username}`)
            .setURL(`https://discord.com/users/${userOptionId}`)
            .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png' })
            .setThumbnail(user.displayAvatarURL({ dynamic: true }));

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

        const serverOptions = client.guilds.cache.filter(guild => guildId !== interaction.guild.id).map(guild => ({
            label: guild.name,
            description: `Select to view notes for ${user.username} in ${guild.name}`,
            value: `${guild.id}_${user.id}`,
        }));

        await interaction.reply({ embeds: [noteEmbed], components: [
            new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('all-notes')
                        .setPlaceholder('Select a Note to view details.')
                        .addOptions(selectOptions)
                ),
            new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('server-notes')
                        .setPlaceholder('Select a server.')
                        .addOptions(serverOptions)
                )] });
    }
};
