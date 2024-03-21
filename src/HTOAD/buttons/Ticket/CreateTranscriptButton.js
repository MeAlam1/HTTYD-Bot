/**Description:
 * This button is used to create a transcript of the ticket or application channel.
 * src\HTOAD\buttons\Ticket\CloseTicketButton.js
 */

const { AttachmentBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    customId: 'htoad-create-transcript-button',
    run: async (client, interaction) => {
        
        function getCurrentDateFormatted() {
            const now = new Date();
            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const year = now.getFullYear();
            return `${day}-${month}-${year}`;
        }

        if (!interaction.guildId || !interaction.channel) {

            await interaction.reply({ content: 'This command can only be used in a server channel.', ephemeral: true });
            return;
        }   

        // How to Own a Dragon
        const TicketChannelId = '1197930601836191764'; // Ticket Transcript Channel
        const ApplicationChannelId = '1208542656129662986'; // Application Transcript Channel

        try {
            const filePath = await createTranscript(interaction.channel);
            const fileAttachment = new AttachmentBuilder(filePath);
            const TicketChannel = await client.channels.fetch(TicketChannelId);
            const ApplicationChannel = await client.channels.fetch(ApplicationChannelId);
            const TicketCategoryId = '1126638959716470886'; // Ticket Transcript Category
            const ApplicationCategoryId = '1200532880019951726'; // Application Transcript Category


            if (!TicketChannel) {

                await interaction.reply({ content: 'Custom channel not found.', ephemeral: true });
                return;
            }

            if (interaction.channel.parentId === TicketCategoryId) {

                await TicketChannel.send({ content: `
Name: ${interaction.channel.name}
Date: ${getCurrentDateFormatted()}
Closed By: ${interaction.user}
            `, files: [fileAttachment] });

            await interaction.channel.delete()

            } else if (interaction.channel.parentId === ApplicationCategoryId) {

                await ApplicationChannel.send({ content: `
Name: ${interaction.channel.name}
Date: ${getCurrentDateFormatted()}
Closed By: ${interaction.user}
            `, files: [fileAttachment] });

            await interaction.channel.delete()
            }

            fs.unlinkSync(filePath);
        } catch (error) {
            console.error(error);

            await interaction.reply({ content: 'Failed to create a transcript.', ephemeral: true });
        }
    }
};

async function createTranscript(channel) {
    const fetchedMessages = await channel.messages.fetch({ limit: 100 });
    let transcriptHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Transcript of #${channel.name}</title>
<style>
    body {
        font-family: 'Whitney', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        margin: 0;
        padding: 20px;
        background-color: #36393f;
        color: #dcddde;
    }
    .channel-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #36393f;
        color: #ffffff;
        margin: 0;
        padding: 0;
        font-size: 1.25rem;
        text-align: left;
        z-index: 1000;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #272a2f;
    }
    .channel-icon svg {
        fill: #72767d; 
        margin-right: 10px;
        height: 24px; 
        width: auto;
    }
    .channel-name {
        display: flex;
        align-items: center;
        font-size: 20px; 
        color: #ffffff; 
    }
    .message {
        display: flex;
        width: 100%;
        margin-bottom: 20px;
        transition: background-color 0.1s;
        position: relative; /* Make sure this is relative to allow absolute positioning inside it. */
        z-index: 1; /* Ensure this layer is above the pseudo-element. */
    }
    
    .message::before {
        content: '';
        position: absolute;
        top: 0;
        left: -20px; /* Extend to the left as much as you like. */
        right: 0;
        bottom: 0;
        background-color: transparent; /* Initially transparent background. */
        z-index: -1; /* Render behind the content. */
        transition: background-color 0.1s;
    }
    
    .message:hover::before {
        background-color: #32353b; /* Background color extends on hover. */
    }
    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .message-content {
        max-width: calc(100% - 50px);
    }
    .author {
        font-weight: 600;
    }
    .timestamp {
        margin-left: 5px;
        font-size: 0.75rem;
        color: #72767d;
    }
    .content {
        margin-top: 2px;
    }
    .embed {
        background-color: #2f3136;
        border-radius: 4px;
        padding: 8px;
        margin-top: 10px;
    }
    
    .embed-title {
        color: #00b0f4;
        font-weight: 600;
        margin-bottom: 4px;
    }
    
    .embed-description {
        margin-bottom: 4px;
    }
    
    .embed-fields {
        display: flex;
        flex-wrap: wrap;
    }
    
    .embed-field {
        flex-basis: 100%;
        margin-bottom: 4px;
    }
    
    .embed-field-name {
        font-weight: 600;
    }
    
    .embed-thumbnail {
        margin-top: 8px;
    }
    
    .embed-thumbnail img {
        max-width: 80px;
        border-radius: 4px;
    }
    
    .embed-footer {
        display: flex;
        align-items: center;
        margin-top: 8px;
        font-size: 0.7em;
    }
    
    .embed-footer-icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 8px;
    }
    
    .embed-author {
        display: flex;
        align-items: center;
        margin-bottom: 4px;
        font-size: 0.8em;
    }
    
    .embed-author-icon {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 8px;
    }
    .attachment {
        margin-top: 5px;
    }
    a {
        color: #00b0f4;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    .welcome-section {
        padding: 20px; 
        text-align: left; 
        margin-top: 60px;
        font-family: "Open Sans",sans-serif;
</style>
</head>
<body>
<div class="channel-bar">
    <span class="channel-icon">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"/>
        </svg>
    </span>
    <span class="channel-name">${channel.name}</span>
</div>
<div class="welcome-section">
    <h1>Welcome to ${channel.name}!</h1>
    <p>This is the start of the ${channel.name} channel.</p>
</div>
`;

fetchedMessages.reverse().forEach(msg => {
    let timestamp = new Date(msg.createdTimestamp).toLocaleString(); 
    let authorAvatarUrl = msg.author.displayAvatarURL();
    
    let coloredRoles = msg.member.roles.cache.filter(role => role.color !== 0);
    let highestColoredRole = coloredRoles.reduce((highest, role) => highest.position > role.position ? highest : role, {position: -1, color: 0}); // Fallback role
    let roleColor = highestColoredRole.position !== -1 ? `#${highestColoredRole.color.toString(16).padStart(6, '0')}` : '#FFFFFF'; // Default color
    
    let messageContent = msg.content;
    let mentionMatches = messageContent.match(/<@!?(\d+)>/g);
    if (mentionMatches) {
        mentionMatches.forEach(mention => {
            let id = mention.replace(/<@!?(\d+)>/, '$1');
            let mentionedUser = msg.guild.members.cache.get(id);
            if (mentionedUser) {
                messageContent = messageContent.replace(mention, `@${mentionedUser.user.tag}`);
            }
        });
    }

    messageContent = messageContent.replace(/<:(.*?):(\d+)>/g, (match, emojiName, emojiId) => {
        return `<img src="https://cdn.discordapp.com/emojis/${emojiId}.png" alt="${emojiName}" style="width: 20px; height: 20px;">`;
    });

    transcriptHtml += `
    <div class="message">
        <img src="${authorAvatarUrl}" alt="Avatar" class="avatar">
        <div class="message-content">
            <div>
                <span class="author" style="color: ${roleColor};">${msg.author.tag}</span>
                <span class="timestamp">${timestamp}</span>
            </div>
            <div class="content">${messageContent.replace(/\n/g, '<br>')}</div>`;

    if (msg.attachments.size > 0) {
        msg.attachments.forEach(attachment => {
            let urlBeforeParams = attachment.url.split('?')[0];
            
            if (urlBeforeParams.match(/\.(jpeg|jpg|gif|png|webp)$/i)) {
                transcriptHtml += `<div class="attachment"><img src="${attachment.url}" style="max-width: 100%; height: auto;"></div>`;
            } 
            else if (urlBeforeParams.match(/\.(mp4|webm|mov|mkv)$/i)) {
                transcriptHtml += `<div class="attachment"><video controls style="max-width: 100%; height: auto;"><source src="${attachment.url}" type="video/mp4">Your browser does not support the video tag.</video></div>`;
            }
            else {
                transcriptHtml += `<div class="attachment"><a href="${attachment.url}" target="_blank">View Attachment</a></div>`;
            }
        });
    }
    
    if (msg.embeds.length > 0) {
        msg.embeds.forEach(embed => {
            transcriptHtml += `<div class="embed">`;
            
            if (embed.author) {
                transcriptHtml += `<div class="embed-author">
                                       <img src="${embed.author.iconURL}" alt="Author Icon" class="embed-author-icon">
                                       ${embed.author.name}
                                   </div>`;
            }
    
            if (embed.title) {
                transcriptHtml += `<div class="embed-title"><a href="${embed.url}" target="_blank">${embed.title}</a></div>`;
            }
    
            if (embed.description) {
                transcriptHtml += `<div class="embed-description">${embed.description.replace(/\n/g, '<br>')}</div>`;
            }
    
            if (embed.fields.length > 0) {
                transcriptHtml += `<div class="embed-fields">`;
                embed.fields.forEach(field => {
                    transcriptHtml += `<div class="embed-field">
                                           <div class="embed-field-name">${field.name}</div>
                                           <div class="embed-field-value">${field.value.replace(/\n/g, '<br>')}</div>
                                        </div>`;
                });
                transcriptHtml += `</div>`;
            }
    
            if (embed.thumbnail) {
                transcriptHtml += `<div class="embed-thumbnail"><img src="${embed.thumbnail.url}" alt="Thumbnail"></div>`;
            }
    
            if (embed.footer) {
                transcriptHtml += `<div class="embed-footer">
                                       <img src="${embed.footer.iconURL}" alt="Footer Icon" class="embed-footer-icon">
                                       ${embed.footer.text}
                                   </div>`;
            }
    
            transcriptHtml += `</div>`;
        });
    }
    

    transcriptHtml += `</div></div>`;
});

transcriptHtml += `
</body>
</html>`;

function getCurrentDateFormatted() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}-${month}-${year}`;
}
    const filePath = `transcript-${channel.name}-${getCurrentDateFormatted()}.html`;
    fs.writeFileSync(filePath, transcriptHtml);

    return filePath;
}
