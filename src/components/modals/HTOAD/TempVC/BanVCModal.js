/**
 * Description: 
 * This Modal is used to ban a user from a VC.
 * src\components\buttons\HTOAD\TempVC\LimitButton.js
 */

let member;

module.exports = {
    customId: 'ban-vc-modal',
    run: async (client, interaction) => {
        const inputValue = interaction.fields.getTextInputValue('ban-vc');
        
        if (interaction.guild.members.cache.has(inputValue)) {
            member = interaction.guild.members.cache.get(inputValue);
        } else {
            member = interaction.guild.members.cache.find(m => m.user.username === inputValue);
        }

        if (!member) {
            console.error(`No member found with ID or username: ${inputValue}`);
            interaction.reply({ content: `No member found with ID or username: ${inputValue}`, ephemeral: true });
        } else {
            member.voice.setChannel(null);
            await interaction.channel.permissionOverwrites.create(member, {
                Connect: false,
                Speak: false,
                SendMessages: false,
                ReadMessageHistory: false,
              })
            await interaction.reply({ content: `${member} has been Banned from the VC.`, ephemeral: true });
        }
    }
};
