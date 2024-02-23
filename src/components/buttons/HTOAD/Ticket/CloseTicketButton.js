/**Description:
 * This Button is used to close a ticket in the How to Own a Dragon Server.
 * src\components\buttons\HTOAD\Ticket\CreateTicketButton.js
 */

const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const allowedRoles = [
    //How to Own a Dragon
    '1120030006626750474', //Owner Role
    '1133420066277437490', //Lead Dev Role
    '1161418815440166943', //Moderator Role
];

module.exports = {
    customId: 'close-ticket-button',
    run: async (client, interaction) => {

        // The Button to Create a Transcript
        const CreateTranscriptButton = new ButtonBuilder()
            .setCustomId('htoad-create-transcript-button')
            .setLabel('Create Transcript')
            .setStyle(ButtonStyle.Success);

        // The Embed to Close the Ticket
        const HTOADCloseTicketEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`**${interaction.channel.name}**`)
            .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/VTwEDBO.png'})
            .setDescription(`The title of this Embed will be the name of the Transcript!`)
            .setTimestamp()
            .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/VTwEDBO.png' });

        const row = new ActionRowBuilder().addComponents(CreateTranscriptButton);

        if (!interaction.member.roles.cache.some(role => allowedRoles.includes(role.id))) {

            // If the user does not have the necessary permissions to close the ticket.
            await interaction.reply({ content: 'You do not have the necessary permissions to close the ticket.', ephemeral: true });
            return;
        }

        // To send the Embed and the Button to Create a Transcript/Closed the Ticket.
        await interaction.reply({ 
            embeds: [HTOADCloseTicketEmbed],  
            components: [row] 
        });
    }
};
