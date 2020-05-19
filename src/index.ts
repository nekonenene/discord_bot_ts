import { Client } from 'discord.js';

const client = new Client();

client.on('ready', () => {
  console.log(`${client.user?.username} の準備ができました！`);
});

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('pong').catch(err => {
      console.error(err);
    });
  }
});

client.login(process.env.DISCORD_BOT_TOKEN).catch(err => {
  console.error(err);
});
