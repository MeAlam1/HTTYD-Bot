// Testing The new: AntiSpam Logging Embed

const { SlashCommandBuilder, EmbedBuilder } = require(`discord.js`);
const HTOAD = [`1120022058601029652`]; // How to Own a Dragon
const allowedRoles = [
    `1120030006626750474`, // How to Own a Dragon Owner Role
    `1133420066277437490`, // How to Own a Dragon Lead Dev Role
    `1140629154748956813`  // How to Own a Dragon Coder Role
];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName(`test`)
        .setDescription(`Admin Only!!!`),
    run: async (client, interaction, args) => {
        if (!interaction.guild || !HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                content: `This command is not available in this server.`,
                ephemeral: true
            });
            return;
        }

        const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));
        
        if (!hasRole) {
            await interaction.reply({
                content: `You do not have permission to use this command.`,
                ephemeral: true
            });
            return;
        }

        const user = interaction.user;
        const avatarURL = user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 });

    const TestEmbed = new EmbedBuilder()
        .setColor(0xbf020f)
        .setTitle(`${interaction.user.tag}`) // IGN User that did the Punishment
        .setURL(`https://discord.js.org/`) // URL to User
        .setAuthor({ name: `How to Own a Dragon`, iconURL: `https://i.imgur.com/VTwEDBO.png`})
        .setDescription(`Usage of @everyone and @here in the server!`)
        .setThumbnail(avatarURL) // Profile Picture of User
        .addFields(
            { name: `The User Ping:`, value: `***User:*** <@${interaction.user.id}>⠀⠀⠀⠀`, inline: true }, // The Ping of the User 
            { name: `The User ID:`, value: `${interaction.user.id}⠀⠀⠀`, inline: true  }, // The ID of the User
            { name: `The Message ID:`, value: `***ID:*** [message]⠀⠀⠀`, inline: true  }, // The Message ID
        )
        .addFields(
            { name: `Message Content:`, value: `***Message:*** [Message]` } // The Message that got deleted
        )
        .setTimestamp()
        .setFooter({ text: `How to Own a Dragon Coder Team`, iconURL: `https://i.imgur.com/VTwEDBO.png` });

            await interaction.reply({
                embeds: [TestEmbed]
                
            });
    }
};