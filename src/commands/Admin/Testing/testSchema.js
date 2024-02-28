const { SlashCommandBuilder } = require(`discord.js`);
const testSchema = require(`../../../schemas/test`);

module.exports = {
    structure: new SlashCommandBuilder()
        .setName(`test-schema`)
        .setDescription(`Testing the Schema`)
        .addStringOption(option => option.setName(`schema-input`).setDescription(`text to save.`).setRequired(true)),
    run: async (client, interaction) => {
        const allowedRoles = [
            '1120030006626750474', // How to Own a Dragon Owner Role
            '1133420066277437490', // How to Own a Dragon Lead Dev Role
            '1140629154748956813'  // How to Own a Dragon Coder Role
        ];

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
