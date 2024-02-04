// autorole.js
const { GatewayIntentBits } = require('discord.js');

module.exports = {
  name: 'Autorole',
  description: 'Set up auto-roles for new members',
  execute(client, member) {
    const guildId = member.guild.id;

    // Define an array of role IDs to assign to the user
    const autoRoleIds = ['1151622963213377596', '1151572475281424514']; // Add more role IDs as needed

    // Check if the guild has the GUILD_MEMBERS intent enabled
    if (!client.options.intents.has(GatewayIntentBits.GuildMembers)) {
      console.error('The GUILD_MEMBERS intent is not enabled. Please enable it in your bot settings.');
      return;
    }

    // Loop through the role IDs and add each role to the member
    autoRoleIds.forEach((roleId) => {
      const role = member.guild.roles.cache.get(roleId);
      if (role) {
        member.roles.add(role)
          .then(() => {
          })
          .catch(console.error);
      }
    });
  },
};
