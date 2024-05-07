/**
 * Description: 
 * This Modal is used to kick a user from a VC.
 * src\components\buttons\HTOAD\TempVC\LimitButton.js
 */

let member;

module.exports = {
    customId: 'kick-vc-modal',
    run: async (client, interaction) => {
        const inputValue = interaction.fields.getTextInputValue('kick-vc');
        
        if (interaction.guild.members.cache.has(inputValue)) {
            member = interaction.guild.members.cache.get(inputValue);
        } else {
            member = interaction.guild.members.cache.find(m => m.user.username === inputValue);
        }

        if (!member) {
            console.error(`No member found with ID or username: ${inputValue}`);
            interaction.reply({ content: `No member found with ID or username: ${inputValue}`, ephemeral: true });
        } else {
            await member.voice.kick();
            await interaction.reply({ content: `${member} has been kicked from the VC.`, ephemeral: true });
        }
    }
};
