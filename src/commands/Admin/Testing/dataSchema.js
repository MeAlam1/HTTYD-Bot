// DO NOT TOUCH THIS FILE!

/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This command is used to read the values in the database.
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
        .setName(`read-schema`)
        .setDescription(`Testing a Schema`),
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

        if (data.length === 0) {
            await interaction.reply({ content: `The database is empty.` });
            return; 
        }

        var values = data.map(d => d.name);

        await interaction.reply({ content: values.join(`\n`) || `The database is empty.` });
    }
};