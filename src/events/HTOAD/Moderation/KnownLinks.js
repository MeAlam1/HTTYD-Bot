/** Description:
 * This event will filter all messages sent in How to Own a Dragon.
 * It Checks them for known spam links.
 * Send a Message in the Automod Channel.
 * Timeout the User for 7 days.
 * The Owner, Lead Dev and Bot roles are allowed to use spam links in the server.
 */

const { EmbedBuilder } = require('discord.js');
const KnownLinkSchema = require('../../../schemas/Moderation/KnownLinkSchema.js');

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, ...args) => {
        const message = args[0];

        const allowedRoles = [
            // How to Own a Dragon
            '1120030006626750474', // Owner
            '1133420066277437490', // Lead Devs 
            '1120033014416670895'  // Bots 
        ];

        const HTOAD = '1120022058601029652'; // How to Own a Dragon Server

        if (message.guild.id === HTOAD && message.member) {
            const hasAllowedRole = message.member.roles.cache.some(role => allowedRoles.includes(role.id));

            if (!hasAllowedRole) {
                try {
                    // Fetch known spam links from the database
                    const knownLinks = await KnownLinkSchema.find({});
                    const spamLinks = knownLinks.map(link => link.link);

                    // Check if the message contains any known spam links
                    const containsSpamLink = spamLinks.some(spamLink => message.content.includes(spamLink));

                    if (containsSpamLink) {
                        const AntiSpamLinkLog = new EmbedBuilder()
                            // Embed configuration remains the same
                            .setColor(0xbf020f)
                            .setTitle(`${message.author.tag}`) 
                            .setURL(`https://discord.com/users/${message.author.id}`) 
                            .setAuthor({ name: 'How to Own a Dragon', iconURL: 'https://i.imgur.com/gSjyLDH.png' })
                            .setDescription('Known Spam Link has been Located!')
                            .setThumbnail(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })) 
                            .addFields(
                                { name: 'The User:', value: `<@${message.author.id}>⠀⠀⠀⠀`, inline: true }, 
                                { name: 'The User ID:', value: `${message.author.id}⠀⠀⠀⠀`, inline: true }, 
                            )
                            .addFields(
                                { name: 'Message Content:', value: `${message.content}⠀⠀⠀⠀`}, 
                                { name: 'The Message ID:', value: `${message.id}⠀⠀⠀⠀`, inline: true  }, 
                            )
                            .setTimestamp()
                            .setFooter({ text: 'How to Own a Dragon Coder Team', iconURL: 'https://i.imgur.com/gSjyLDH.png' });

                        await message.delete();

                        const logChannelId = '1168633106757070928'; // How to Own a Dragon infraction channel ID
                        const logChannel = await client.channels.fetch(logChannelId);

                        const now = new Date();
                        const sevenDaysLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
                        const sevenDaysLaterTimestamp = Math.floor(sevenDaysLater.getTime() / 1000);

                        await logChannel.send({ 
                            content: `<@&1161418815440166943>
<@${message.author.id}> got timed out until <t:${sevenDaysLaterTimestamp}:F>`,
                            embeds: [AntiSpamLinkLog] });

                        const timeoutDuration = 7 * 24 * 60 * 60 * 1000; // 7 days

                        await message.member.timeout(timeoutDuration, 'Sending a Known Spam link!.');
                    }
                } catch (error) {
                    console.error('Error trying to delete a spam message or timeout the user: ', error);
                }
            }
        }
    }
};
