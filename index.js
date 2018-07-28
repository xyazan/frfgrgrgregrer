const Discord = require('discord.js');
const client = new Discord.Client(); 
var roles = {}; 
var prefix = '!'; 

console.log("__________________");
console.log("");
console.log("By Najzx ");
console.log("");
console.log("__________________");
 

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["444636120550998028"];
if (message.content.startsWith(prefix + 'ownerbot')) {
    if(!message.channel.guild) return;
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage("**انت صاحب البوت **")
} else {
   message.reply("**انت لسا صاحب البوت**");   
}
}
}); 
 
 
 client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('!b')){
 if (message.author.id !== '444636120550998028') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.login("NDcyNzI2MDk2NzQwMDg5ODU2.Dj3m6w.gD5LLMqrZABtWk53LfJve_ax21Y");