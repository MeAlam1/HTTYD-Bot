// DO NOT TOUCH THIS FILE!

/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This command is used to delete the values in the database.
 * ADMIN ONLY COMMAND
 */

const { SlashCommandBuilder } = require(`discord.js`);
const testSchema = require(`../../../schemas/test`);

const allowedServers = [
    '1120030006626750474', // How to Own a Dragon Server
];

const allowedRoles = [
    // How to Own a Dragon
    '1120030006626750474', // Owner Role
    '1133420066277437490', // Dragon Lead Dev Role
    '1140629154748956813'  // Coder Role
];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName(`delete-schema`)
        .setDescription(`esting a Schema`),
    run: async (client, interaction) => {
        
        if (!allowedServers.includes(interaction.guild.id)) {
            await interaction.reply({ content: 'This command is not available in this server.', ephemeral: true });
            return;
        }

        const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));
        
        if (!hasRole) {
            await interaction.reply({
                content: 'You do not have permission to use this command.',
                ephemeral: true
            });
            return;
        }

        const data = await testSchema.find(); 

        await data.forEach(async d => {
            await testSchema.deleteOne({ name: d.name });
        });

        await interaction.reply({ content: `i deleted the values.`});

    }
};