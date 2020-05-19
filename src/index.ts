import dayjs from 'dayjs';
import { Client, Message } from 'discord.js';

const client = new Client();
const commandPrefix = '/';

const doCommand = (message: Message) => {
  const args = message.content.slice(commandPrefix.length).split(/ +/);
  const command = args.shift()!.toLowerCase();

  switch (command) {
    case 'ping':
      const currentTime = dayjs();
      const messageTime = dayjs(message.createdAt);
      message.channel.send(`ポンです！ こっちに来るまで${currentTime.diff(messageTime) / 1000}秒かかってました！`);
      break;
  }
}

client.on('ready', () => {
  console.log(`${client.user?.username} の準備ができました！`);
});

client.on('message', message => {
  if (message.author.bot) { return; } // bot自身の投稿に反応しないように

  // コマンドの処理
  if (message.content.startsWith(commandPrefix)) {
    doCommand(message);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN).catch(err => {
  console.error(err);
});
