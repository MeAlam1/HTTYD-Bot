/** Description:
 * This event will filter all messages sent in Runic Isles.
 * It Checks them for known spam links.
 * Send a Message in the Automod Channel.
 * Timeout the User for 7 days.
 * The Owner, Admin, Management, Moderator, Developer and Bot roles are allowed to use spam links in the server.
 */

const { EmbedBuilder } = require('discord.js');
const KnownLinkSchema = require('../../../schemas/Moderation/KnownLinkSchema.js');

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, ...args) => {
        const message = args[0];

        const allowedRoles = [
            // Runic Isles
            '1214620041425846272', // Bot Coder Role
            '1151500042843201576', // Owner Role
            '1189510610556301332', // Management Role
            '1203303940364439573', // Moderator Role
            '1151500178331807896'  // Developer Role
        ];

        const Runic = '1151497491288690688'; // Runic Isles Server

        if (message.guild.id === Runic) {
            const hasAllowedRole = message.member.roles.cache.some(role => allowedRoles.includes(role.id));

            if (!hasAllowedRole) {
                try {
                    const knownLinks = await KnownLinkSchema.find({});
                    const spamLinks = knownLinks.map(link => link.value);

                    const containsSpamLink = spamLinks.some(spamLink => message.content.includes(spamLink));

                    if (containsSpamLink) {
                        const AntiSpamLinkLog = new EmbedBuilder()
                            .setColor(0xbf020f)
                            .setTitle(`${message.author.tag}`) 
                            .setURL(`https://discord.com/users/${message.author.id}`) 
                            .setAuthor({ name: 'Runic Isles', iconURL: 'https://i.imgur.com/xR54d7T.png' })
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
                            .setFooter({ text: 'Runic Isles Management Team', iconURL: 'https://i.imgur.com/xR54d7T.png' });

                        await message.delete();

                        const logChannelId = '1151645114146488390'; // Runic Isles infraction channel ID
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
