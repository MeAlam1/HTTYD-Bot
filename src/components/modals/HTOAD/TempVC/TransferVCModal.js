/**
 * Description: 
 * This Modal is used to transfer a VC to a user.
 * src\components\buttons\HTOAD\TempVC\LimitButton.js
 */

let member;

module.exports = {
    customId: 'transfer-vc-modal',
    run: async (client, interaction) => {
        const inputValue = interaction.fields.getTextInputValue('transfer-vc');
        
        if (interaction.guild.members.cache.has(inputValue)) {
            member = interaction.guild.members.cache.get(inputValue);
        } else {
            member = interaction.guild.members.cache.find(m => m.user.username === inputValue);
        }

        if (!member) {
            console.error(`No member found with ID or username: ${inputValue}`);
            interaction.reply({ content: `No member found with ID or username: ${inputValue}`, ephemeral: true });
        } else {
            
            await interaction.channel.permissionOverwrites.create(member, {
                ManageChannels: true,
              })
            await interaction.reply({ content: `The VC has been transferred to ${member}.`, ephemeral: true });
        }
    }
};
