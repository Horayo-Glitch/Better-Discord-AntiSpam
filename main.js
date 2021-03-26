const { MessageEmbed, Client } = require("discord.js");
const antispam = require("better-discord-antispam");
const moment = require("moment");
const colors = require("colors");
const { TOKEN, PREFIX, IGNOREDROLES } = require("./config.js");
const client = new Client();


client.on('ready', () => {
  
 antispam(client, {
        limitUntilWarn: 3, // The amount of messages allowed to send within the interval(time) before getting a warn.
        limitUntilMuted: 5, // The amount of messages allowed to send within the interval(time) before getting a muted.
        interval: 2000, // The interval(time) where the messages are sent. Practically if member X sent 5+ messages within 2 seconds, he get muted. (1000 milliseconds = 1 second, 2000 milliseconds = 2 seconds etc etc)
        warningMessage: "If you don't stop spamming, i will punish you!", // Message you get when you are warned!
        muteMessage: "has been muted because he spammmed!", // Message sent after member X was punished(muted).
        maxDuplicatesWarning: 3,// When people are spamming the same message, this will trigger when member X sent over 7+ messages.
        maxDuplicatesMute: 5, // The limit where member X get muted after sending too many messages(10+).
        ignoredRoles: [IGNOREDROLES], // The members with this role(or roles) will be ignored if they have it. Suggest to not add this to any random guys. Also it's case sensitive.
        ignoredMembers: [], // These members are directly affected and they do not require to have the role above. Good for undercover pranks.
        mutedRole: "better-muted", // Here you put the name of the role that should not let people write/speak or anything else in your server. If there is no role set, by default, the module will attempt to create the role for you & set it correctly for every channel in your server. It will be named "muted".
        timeMuted: 1000 * 600, // This is how much time member X will be muted. if not set, default would be 10 min.
        logChannel: "better-antispam-logs" // This is the channel where every report about spamming goes to. If it's not set up, it will attempt to create the channel.
      });

  console.log("Connected!".green)
  console.log("Bot created by horayo!".red)
  
   client.user.setPresence({
     statut: "online",
     activity: {
       name: `Better-Discord-AntiSpam created by 🅗🅞🅡🅐🅨🅞#0666 | Prefix: ${PREFIX}`,
       type: "WATCHING",
     }
   })
});

client.on('message', async message => {
  if (!message.content.startsWith(PREFIX)) return;
  if (message.author.bot) return;
  client.emit('checkMessage', message);
  let cmd = message.content.split(" ")[0];
	cmd = cmd.slice(PREFIX.length);
  
  
  if (cmd === 'ping') {
    message.channel.send(`Pong! ${client.ws.ping} ms`)
  }
  
  // rest of your code
  
});
client.login(TOKEN);
