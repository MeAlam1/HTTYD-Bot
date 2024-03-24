/**Description:
 * This button is to Edit a Note.
 */

const { ActionRowBuilder, TextInputBuilder, TextInputStyle, ModalBuilder } = require('discord.js');

module.exports = {
    customId: 'edit-note-button',
    run: async (client, interaction) => {

		const modal = new ModalBuilder()
			.setCustomId('edit-note-modal')
			.setTitle('My Modal');

		const userNoteText = new TextInputBuilder()
			.setCustomId('user-text')
			.setLabel("Which user is the note for? Use their username, NOT NICKNAME!")
			.setStyle(TextInputStyle.Short);

		const serverNoteText = new TextInputBuilder()
			.setCustomId('server-text')
			.setLabel( `Which server is the note for?
            HTOAD = How to Own a Dragon
            Runic = Runic Isles`)
			.setStyle(TextInputStyle.Paragraph);

        const numberNoteText = new TextInputBuilder()
            .setCustomId('number-text')
            .setLabel('What is the note number?')
            .setStyle(TextInputStyle.Short);

        const noteText = new TextInputBuilder()
            .setCustomId('note-text')
            .setLabel(`What is the note?
            "-" = Not applicable`)
            .setStyle(TextInputStyle.Paragraph);

        const ruleText = new TextInputBuilder()
            .setCustomId('rule-text')
            .setLabel(`What rule was broken?
            "-" = Not applicable`)
            .setStyle(TextInputStyle.Short);

        const punishmentText = new TextInputBuilder()
            .setCustomId('punishment-text')
            .setLabel(`What was the punishment?
            "-" = Not applicable`)
            .setStyle(TextInputStyle.Short);
        
        const typeText = new TextInputBuilder()
            .setCustomId('type-text')
            .setLabel(`What is the type of note?
            "-" = Not applicable`)
            .setStyle(TextInputStyle.Short);

        const statusText = new TextInputBuilder()
            .setCustomId('status-text')
            .setLabel(`What is the status of the note?
            Open = Note is still active
            Closed = Note is resolved
            "-" = Not applicable`)
            .setStyle(TextInputStyle.Paragraph);
    
        const visibilityText = new TextInputBuilder()
            .setCustomId('visibility-text')
            .setLabel(`What is the visibility of the note?
            Public = all servers can see
            Server = Only your server can see
            "-" = Not applicable`)
            .setStyle(TextInputStyle.Paragraph);

		const firstActionRow = new ActionRowBuilder().addComponents();
		const secondActionRow = new ActionRowBuilder().addComponents();

		modal.addComponents(firstActionRow, secondActionRow);

        interaction.showModal(modal);
    }
};