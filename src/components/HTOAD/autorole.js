// autorole.js
const { GatewayIntentBits } = require('discord.js');

module.exports = {
  name: 'autorole',
  description: 'Set up auto-roles for new members',
  execute(client, member) {
    const guildId = member.guild.id;

    // Define an array of role IDs to assign to the user
    const autoRoleIds = ['1158395515713626172', '1120099102298996876', '1158393719440031895', '1158394497244336170', '1158394548838477956']; // Add more role IDs as needed

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
