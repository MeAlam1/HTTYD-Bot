# Standard EmbedBuilder
```javascript
const HelpEmbed = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Some title')
    .setURL('https://discord.js.org/')
    .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
    .setDescription('Some description here')
    .setThumbnail('https://i.imgur.com/AfFp7pu.png')
    .addFields(
        { name: 'Regular field title', value: 'Some value here' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Inline field title', value: 'Some value here', inline: true },
        { name: 'Inline field title', value: 'Some value here', inline: true },
    )
    .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
    .setImage('https://i.imgur.com/AfFp7pu.png')
    .setTimestamp()
    .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
```
![EmbedBuilder](/assets/ReadMe/EmbedBuilder.png)   

```javascript
const { ChatInputCommandInteraction, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder, ButtonStyle } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');
const HTOAD = ['1120022058601029652'];
const allowedRoles = ['1120030006626750474', '1133420066277437490'];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('components')
        .setDescription('Test the components handler.'),
    run: async (client, interaction) => {
        if (!interaction.guild || !HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
            return;
        }
        const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));
        if (!hasRole) {
            await interaction.reply({
                content: 'You do not have permission to use this command.',
                ephemeral: true
            });
            return;
        }

        await interaction.reply({
            content: 'Select one of the components below.',
            components: [
                new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('example-button')
                            .setLabel('Example Button')
                            .setStyle(ButtonStyle.Primary)
                    ),
                new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId('example-select')
                            .setPlaceholder('Example Select menu')
                            .addOptions(
                                { label: 'Option 1', value: 'option 1' },
                                { label: 'Option 2', value: 'option 2' },
                                { label: 'Option 3', value: 'option 3' },
                            )
                    )
            ]
        });
    }
};
```
![Components](/assets/ReadMe/Components.png)

```javascript
const { ChatInputCommandInteraction, SlashCommandBuilder, ModalBuilder, ActionRowBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const ExtendedClient = require('../../../class/ExtendedClient');
const HTOAD = ['1120022058601029652'];
const allowedRoles = ['1120030006626750474', '1133420066277437490'];

module.exports = {
    structure: new SlashCommandBuilder()
        .setName('show-modal')
        .setDescription('Modal interaction testing.'),
    run: async (client, interaction) => {
        if (!interaction.guild || !HTOAD.includes(interaction.guild.id)) {
            await interaction.reply({
                content: 'This command is not available in this server.',
                ephemeral: true
            });
            return;
        }
        const hasRole = interaction.member.roles.cache.some(role => allowedRoles.includes(role.id));
        if (!hasRole) {
            await interaction.reply({
                content: 'You do not have permission to use this command.',
                ephemeral: true
            });
            return;
        }

        const modal = new ModalBuilder()
            .setTitle('Modal Example')
            .setCustomId('modal-example')
            .addComponents(
                new ActionRowBuilder()
                    .addComponents(
                        new TextInputBuilder()
                            .setLabel('What\'s your name?')
                            .setCustomId('name')
                            .setPlaceholder('Type your name here!')
                            .setStyle(TextInputStyle.Short)
                            .setRequired(true)
                    )
            );

        await interaction.showModal(modal);
    }
};
```

![show-modal](/assets/ReadMe/modal.png)
