import 'dotenv/config';
import { Client, GatewayIntentBits } from 'discord.js';
import { CommandKit } from 'commandkit';
import paths from '@util/path';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

new CommandKit({
    client,
    commandsPath: paths.command,
    eventsPath: paths.event,
    validationsPath: paths.validation,
    devGuildIds: [],
    devUserIds: [],
    skipBuiltInValidations: false,
    bulkRegister: true,
});

client.login(process.env.TOKEN);
