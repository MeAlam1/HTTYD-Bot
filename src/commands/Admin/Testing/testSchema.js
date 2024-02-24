/**
const { SlashCommandBuilder } = require(`discord.js`);
const testSchema = require(`../../../schemas/test`);

module.exports = {
    structure: new SlashCommandBuilder()
        .setName(`test-schema`)
        .setDescription(`Testing the Schema`)
        .addStringOption(option => option.setName(`schema-input`).setDescription(`text to save.`).setRequired(true)),
    run: async (client, interaction) => {

        const { options } = interaction;
        const string = options.getString(`schema-input`);

        await testSchema.create({
            name: string
        });

        await interaction.reply('I saved the data');

    }
};
*/