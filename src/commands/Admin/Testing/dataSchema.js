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

module.exports = {
    structure: new SlashCommandBuilder()
        .setName(`read-schema`)
        .setDescription(`Testing a Schema`),
    run: async (client, interaction) => {
        const data = await testSchema.find();

        if (data.length === 0) {
            await interaction.reply({ content: `The database is empty.` });
            return; 
        }

        var values = data.map(d => d.name);

        await interaction.reply({ content: values.join(`\n`) || `The database is empty.` });
    }
};