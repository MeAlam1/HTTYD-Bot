const { GatewayIntentBits } = require('discord.js');

module.exports = {
  name: 'autorole',
  description: 'Set up auto-roles for new members',
  execute(client, member) {

    const autoRoleIds = ['1158395515713626172', '1120099102298996876', '1158393719440031895', '1158394497244336170', '1158394548838477956'];
    
    if (!client.options.intents.has(GatewayIntentBits.GuildMembers)) {
      console.error('The GUILD_MEMBERS intent is not enabled. Please enable it in your bot settings.');
      return;
    }

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
