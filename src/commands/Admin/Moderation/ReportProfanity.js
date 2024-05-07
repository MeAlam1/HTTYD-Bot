const { SlashCommandBuilder } = require('discord.js');


const allowedServers = [
    '1120022058601029652', // How to Own a Dragon Server
];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('reportcurse')
        .setDescription('Report a Profanity Word to the Staff.')
        .addStringOption(option =>
            option.setName('profanity')
                .setDescription('Profanity to report.')
                .setRequired(true)),
        run: async (client, interaction) => {

            if (!allowedServers.includes(interaction.guild.id)) {
                await interaction.reply({ content: 'This command is not available in this server.', ephemeral: true });
                return;
            }

            const Profanity = interaction.options.getString('profanity');
            try {
                const ChannelId = '1168633539676344490';
                const Channel = interaction.guild.channels.cache.get(ChannelId);
                Channel.send({ content: `
Profanity Word: 
# ${Profanity} 
has been reported by <@${interaction.user.id}>` });
                await interaction.reply({ content: 'Profanity word has been Reported to the Staff.', ephemeral: true });
            } catch (error) {
                await interaction.reply({ content: 'An error occurred while Reporting the profanity word.', ephemeral: true });
                return;
            }

        }
    }            