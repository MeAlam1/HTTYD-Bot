const { SlashCommandBuilder } = require(`discord.js`);
const testSchema = require(`../../../schemas/test`);

module.exports = {
    structure: new SlashCommandBuilder()
        .setName(`delete-chema`)
        .setDescription(`esting a Schema`),
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

        const data = await testSchema.find(); 

        await data.forEach(async d => {
            await testSchema.deleteOne({ name: d.name });
        });

        await interaction.reply({ content: `i deleted the values.`});

    }
};