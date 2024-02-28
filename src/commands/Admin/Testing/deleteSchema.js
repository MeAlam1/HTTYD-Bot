const { SlashCommandBuilder } = require(`discord.js`);
const testSchema = require(`../../../schemas/test`);

module.exports = {
    structure: new SlashCommandBuilder()
        .setName(`delete-chema`)
        .setDescription(`esting a Schema`),
    run: async (client, interaction) => {

        const data = await testSchema.find(); 

        await data.forEach(async d => {
            await testSchema.deleteOne({ name: d.name });
        });

        await interaction.reply({ content: `i deleted the values.`});

    }
};