/**Servers:
 * How to Own a Dragon
 * Runic isles (Half)
 */

/**Description:
 * This command is used to edit a note of a user.
 * ADMIN ONLY COMMAND
 */

const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const NoteSchema = require('../../../schemas/Notes/NotesSchema.js');

const allowedServers = [
    '1120022058601029652', // How to Own a Dragon Server
];

const allowedRoles = [
    // How to Own a Dragon
    '1120030006626750474', // Owner Role
    '1133420066277437490', // Lead Dev Role
    '1161418815440166943', // Moderator Role
    // Runic Isles
    '1214620041425846272', // Bot Coder Role
    '1151500042843201576'  // Owner Role
];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('editnote')
        .setDescription('edit a note about a user.')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('User to edit the note for.')
                .setRequired(true))
        .addNumberOption(option => 
            option.setName('number')
                .setDescription('Write the Number of the Note you want to Edit.')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('note')
                .setDescription('Write the new content of the note.'))
        .addStringOption(option =>
            option.setName('rulebroken')
                .setDescription('Write the new rule the user broke.'))
        .addStringOption(option =>
            option.setName('punishment')
                .setDescription('Write the new punishment given.'))
        .addStringOption(option =>
            option.setName('proof')
                .setDescription('Proof of the note.'))
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
        .addStringOption(option =>
            option.setName('visibility')
                .setDescription('Visibility of the note.')
                .addChoices(
                    { name: 'Public', value: 'public' },
                    { name: 'Server', value: 'server' })),
        run: async (client, interaction) => {

            if (!allowedServers.includes(interaction.guild.id)) {
                await interaction.reply({ content: 'This command is not available in this server.', ephemeral: true });
                return;
            }

            const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));
                
            if (!hasRole) {
                await interaction.reply({ content: 'You do not have permission to use this command.', ephemeral: true });
                return;
            }

            const { options } = interaction;
            const userOption = options.getUser('user');
            const numberOption = options.getNumber('number');
            const noteOption = options.getString('note');
            const ruleBrokenOption = options.getString('rulebroken');
            const punishmentOption = options.getString('punishment');
            const typeOption = options.getString('type');
            const statusOption = options.getString('status');
            const visibilityOption = options.getString('visibility');
            const proofOption = options.getString('proof');

            const note = await NoteSchema.findOne({ guildId: interaction.guild.id, userId: userOption.id, guildNoteNumber: numberOption });

            if (!note) {
                await interaction.reply({ content: `No note found for ${userOption.username}.`, ephemeral: true });
                return;
            }

            let update = {};

            if (noteOption !== null) update.note = noteOption;
            if (ruleBrokenOption !== null) update.ruleBroken = ruleBrokenOption;
            if (punishmentOption !== null) update.punishment = punishmentOption;
            if (typeOption !== null) update.type = typeOption;
            if (statusOption !== null) update.status = statusOption;
            if (visibilityOption !== null) update.visibility = visibilityOption;
            if (proofOption !== null) update.proof = proofOption;

            if (Object.keys(update).length > 0) {
                await NoteSchema.updateOne({ guildId: interaction.guild.id, userId: userOption.id, guildNoteNumber: numberOption }, update);

                const newNote = await NoteSchema.findOne({ guildId: interaction.guild.id, userId: userOption.id, guildNoteNumber: numberOption });

                const noteEmbed = new EmbedBuilder()
                .setColor(0xbf020f)
                .setTitle(`Note ${newNote.guildNoteNumber} for ${userOption.tag} has been edited!`)
                .setURL(`https://discord.com/users/${userOption.id}`)
                .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png' })
                .setThumbnail(userOption.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                .addFields(
                    { name: 'Moderator', value: `<@${note.userId}>`, inline: true },
                    { name: 'User', value: `<@${userOption.id}>`, inline: true },
                    { name: 'Note Type', value: newNote.type, inline: true },
                    { name: 'Status', value: newNote.status, inline: true },
                    { name: 'Visibility', value: newNote.visibility, inline: true },
                    { name: 'DM User', value: newNote.dmNotification ? 'Yes' : 'No', inline: true },
                    { name: 'Created At', value: newNote.createdAt, inline: true },
                    { name: 'Note', value: newNote.note },
                    { name: 'Rule Broken', value: newNote.ruleBroken },
                    { name: 'Punishment', value: newNote.punishment },
                    { name: 'proof', value: newNote.proof }
                )
                .setTimestamp()
                .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });
                

                await interaction.reply({ content: `The note for ${userOption.username} has been successfully updated.`, embeds: [noteEmbed] });
            } else {
                await interaction.reply({ content: `No updates were made to the note for ${userOption.username}.`, ephemeral: true });
            }



        }
    };                