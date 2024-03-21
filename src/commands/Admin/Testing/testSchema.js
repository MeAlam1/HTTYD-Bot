// DO NOT TOUCH THIS FILE!

/**Servers:
 * How to Own a Dragon
 */

/**Description:
 * This Command lets you add data to the database.
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
        .setName(`test-schema`)
        .setDescription(`Testing the Schema`)
        .addStringOption(option => option.setName(`schema-input`).setDescription(`text to save.`).setRequired(true)),
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
        const string = options.getString(`schema-input`);

        await testSchema.create({
            name: string
        });

        await interaction.reply('I saved the data');
    }
};
