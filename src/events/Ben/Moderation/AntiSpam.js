/** Description:
 * This event will filter all messages sent in BFS Fintastic Sharks.
 * It Checks them for Spam. [@everyone or @here ]
 * If @everyone or @here are found it will delete the message.
 * Send a Message in the Automod Channel.
 * Timeout the User for 7 days.

 */

const { EmbedBuilder } = require('discord.js');

module.exports = {
    event: 'messageCreate',
    once: false,

    run: async (client, ...args) => {
        const message = args[0];

        function isSpam(content) {
            const pattern = ['@everyone', '@here'];
            return pattern.some(spamWord => content.includes(spamWord));
        }

        const allowedRoles = [
            '1122271311985639434', // Owner
            '1122271190443098173', // Lead Devs 
            '1122297542202363976', // Bots 
            //'1228375626600415294'  // Bot Coder
        ];

        const BFS = '1121921556130566204'; // BFS Server

        if (message.guild && message.guild.id === BFS && isSpam(message.content)) {
            const hasAllowedRole = message.member.roles.cache.some(role => allowedRoles.includes(role.id));

            if (!hasAllowedRole) {
                try {

                    const AntiSpamLog = new EmbedBuilder()
                        .setColor(0xbf020f)
                        .setTitle(`${message.author.tag}`) 
                        .setURL(`https://discord.com/users/${message.author.id}`) 
                        .setAuthor({ name: 'Bens Fintastic Sharks', iconURL: 'https://i.imgur.com/Y2kTsOt.png' })
                        .setDescription('Usage of @everyone and @here in the server!')
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
                        .setFooter({ text: 'Bens Fintastic Sharks Bot Coder Team', iconURL: 'https://i.imgur.com/Y2kTsOt.png' });

                    await message.delete();

                    const logChannelId = '1190698582781722774'; // BFS infraction channel ID
                    const logChannel = await client.channels.fetch(logChannelId);

                    const now = new Date();
                    const sevenDaysLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
                    const sevenDaysLaterTimestamp = Math.floor(sevenDaysLater.getTime() / 1000);

                    await logChannel.send({ 
                        content: `<@&1122271190443098173>
<@${message.author.id}> got timed out until <t:${sevenDaysLaterTimestamp}:F>`,
                        embeds: [AntiSpamLog] });

                    const timeoutDuration = 7 * 24 * 60 * 60 * 1000; // 7 days

                    await message.member.timeout(timeoutDuration, 'Using `@everyone` or `@here` inappropriately.');
                } catch (error) {
                    console.error('Error trying to delete a spam message or timeout the user: ', error);
                }
            }
        }
    }
};
