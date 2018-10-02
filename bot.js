const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
السلام عليكم يقلبي 
و سمحت طالبك طلب حبي تكقا ادخل السيرفر
دعوة نقية بيضاء تحت المطر.
ابتسامة رقيقة من القلب بمجرد لقاء !
ندعوك من القلب الا الدخول  لكلانا المحترم 

https://media.discordapp.net/attachments/492247516448817152/492986808129552395/i7RyGir.gif?width=400&height=200
                               [ https://discord.gg/MAUjmBe ] 
:gem: :two_hearts: الدعووة خاصة لك ي قلبي :gem: :two_hearts: ... [ ${member}  ]
**`)
}).catch(console.error)

})
 

client.login('NDkyOTY5ODE3MDQ5OTIzNTk0.DoeNwg.IsQwvPCgAtpu4dfu1h0nZUA0EEw');

               
