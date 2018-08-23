const Discord = require('discord.js');
var prefix = "!!";
const db = require('quick.db');
const client = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 
,ti={}  
,spee={};

client.on('ready', () => { 
    client.user.setStatus("dnd");
     client.user.setActivity("!!help",{type: 'PLAYING'});
	console.log('I am ready!'); 
  });

var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "superaction"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "superaction"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "superaction"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });

////////////////////////////////////////////

client.on('guildCreate', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("#565656")
     .setTitle('Alpha.')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=480653185208418304&permissions=8&scope=bot')
  .setDescription(`**
  New Server Add Alpha Bot 
Name Server: ${guild.name}
Owner Server: ${guild.owner}**`);
client.channels.get("481026303412142083").sendEmbed(embed)
});

client.on('guildDelete', guild => {
         const embed = new Discord.RichEmbed()
     .setColor("#565656")
     .setTitle('Alpha.')
     .setURL('https://discordapp.com/oauth2/authorize?client_id=480653185208418304&permissions=8&scope=bot')
  .setDescription(`**
  Server Kicked Alpha Bot
Name Server: ${guild.name}
Owner Server: ${guild.owner}**`);
client.channels.get("481026303412142083").sendEmbed(embed)
});

client.on('message', msg => {
	
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("**```اختر عدد للمسح```**").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("**```عدد الرسائل التي تم مسحها : " + textxt + " ```**").then(m => m.delete(3000));
        }    
    }
}
});

client.on('message', msg => {
	
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        }    
    }
}
});

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('!!bcall')){
 if (message.author.id !== '380307890235506698') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
 if(!message.author.id === '0') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

const adminprefix = "!admin";
const devs = ['380307890235506698','0'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
});

client.on("message", message => {
 if (message.content === "!!help") {
	 message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#565656")
      .setDescription(`
**Alpha command's**

•) **!!mute** - اعطاء شخص ميوت

•) **!!unmute** - ازالة من شخص ميوت

•) **!!ban** - طرد عضو من السيرفر بشكل مؤبد

•) **!!clear** - حذف رسائل بالشات

•) **!!conut** - لرؤية عدد اعضاء السيرفر

•) **!!trans** - لترجمة الكلام

•) **!!kick** - طرد عضو من السيرفر بشكل مؤقت

•) **!!bots** - لرؤية جميع بوتات السيرفر

•) **!!server** - معلومات حول السيرفر

•) **!!bot** - معلومات حول البوت

•) **!!cal** - لأستعمال الحاسبة

•) **!!short** - لأختصار الروابط

•) **!!perms** - لرؤية الصلاحيات التي تملكها

•) **!!role** - اعطاء او ازالة رتبه

•) **!!emojis** - لرؤية ايموجي السيرفر المضافة

•) **!!embed** - لتكلم بالبوت

•) **!!contact** - مراسله صاحب البوت

•) **!!inv** - رابط اضافة البوت

•) **!!support** - سيرفر الدعم الفني
`)
   message.author.sendEmbed(embed)
   }
   }); 

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("#565656")
    message.channel.sendEmbed(say);
    message.delete();
  }


});

client.on('message', message => { 
	
    if (message.content.startsWith(prefix + 'emojis')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('Emojis')  
            .setColor("#565656") 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});

const Langs = ['afrikaans', 'albanian', 'amharic', 'arabic', 'armenian', 'azerbaijani', 'bangla', 'basque', 'belarusian', 'bengali', 'bosnian', 'bulgarian', 'burmese', 'catalan', 'cebuano', 'chichewa', 'chinese simplified', 'chinese traditional', 'corsican', 'croatian', 'czech', 'danish', 'dutch', 'english', 'esperanto', 'estonian', 'filipino', 'finnish', 'french', 'frisian', 'galician', 'georgian', 'german', 'greek', 'gujarati', 'haitian creole', 'hausa', 'hawaiian', 'hebrew', 'hindi', 'hmong', 'hungarian', 'icelandic', 'igbo', 'indonesian', 'irish', 'italian', 'japanese', 'javanese', 'kannada', 'kazakh', 'khmer', 'korean', 'kurdish (kurmanji)', 'kyrgyz', 'lao', 'latin', 'latvian', 'lithuanian', 'luxembourgish', 'macedonian', 'malagasy', 'malay', 'malayalam', 'maltese', 'maori', 'marathi', 'mongolian', 'myanmar (burmese)', 'nepali', 'norwegian', 'nyanja', 'pashto', 'persian', 'polish', 'portugese', 'punjabi', 'romanian', 'russian', 'samoan', 'scottish gaelic', 'serbian', 'sesotho', 'shona', 'sindhi', 'sinhala', 'slovak', 'slovenian', 'somali', 'spanish', 'sundanese', 'swahili', 'swedish', 'tajik', 'tamil', 'telugu', 'thai', 'turkish', 'ukrainian', 'urdu', 'uzbek', 'vietnamese', 'welsh', 'xhosa', 'yiddish', 'yoruba', 'zulu'];

client.on('message', message => {
if (message.content.startsWith(prefix + 'trans')) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
    
        const embed = new Discord.RichEmbed()
            .setColor("#565656")
            .setDescription("`!!translate <الكلمة> <االغة>`");

        return message.channel.send(embed);

    } else {

        if (args.length === undefined) {

            return message.channel.send("!!translate <الكلمة> <االغة>");

        } else {

            let transArg = args[0].toLowerCase();

            args = args.join(' ').slice(1)
            let translation;

            if (!Langs.includes(transArg)) return message.channel.send(`**اللغة غير متوفرة**`);
            args = args.slice(transArg.length);

            translate(args, {
                to: transArg
            }).then(res => {

                const embed = new Discord.RichEmbed()
                    .setAuthor("Translator", client.user.displayAvatarURL)
                    .addField(`الكلمة`, `\`\`\`${args}\`\`\``)
                    .setColor("#565656")
                    .addField(`الترجمة`, `\`\`\`${res.text}\`\`\``);
                return message.channel.send(embed);
            });
        }
    }
}
});

client.on('message', message => {
     if(!message.channel.guild) return;
                if(message.content.startsWith(prefix + 'bots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setDescription(`**${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});

 client.on('message', message => {
	
 if(message.content.startsWith(prefix +"server")){
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**Server ID:**", message.guild.id,true)
.addField("**Created On:**", message.guild.createdAt.toLocaleString(),true)
.addField("**Owner:**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("**Members :**",`[${message.guild.memberCount}]`,true)
.addField('**Channels :**',`${message.guild.channels.filter(m => m.type === 'text').size}` + ' text | Voice  '+ `${message.guild.channels.filter(m => m.type === 'voice').size} `,true)
.addField("**Others :**" , message.guild.region,true)
.addField("**Roles :**",`[${message.guild.roles.size}] Role `,true)
.setColor('#565656')
message.channel.sendEmbed(embed)

}
});

client.on('message', message => {
    if (message.content.startsWith("!!bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor("#565656")
            .addField('**My Ping**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('**RAM Usage**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('**Servers**', [client.guilds.size], true)
            .addField('**Channels**' , `[ ${client.channels.size} ]` , true)
            .addField('**Users**' ,`[ ${client.users.size} ]` , true)
            .addField('**My Name**' , `[ ${client.user.tag} ]` , true)
            .addField('**My ID**' , `[ ${client.user.id} ]` , true)
			      .addField('``My Prefix``' , `[ !! ]` , true)
			      .setFooter('Developers | wHybH & CuteS7T.')
    })
}
});

 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='!!count')
      var IzRo = new Discord.RichEmbed()
      .setFooter(message.author.username, message.author.avatarURL)
      .addField('Number Of Members',`${message.guild.memberCount}`)
      .setColor("#565656")
      message.channel.send(IzRo);
    });

client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'cal')) {
    let args = msg.content.split(" ").slice(1);
        const question = args.join(' ');
    if (args.length < 1) {
        msg.reply('**ضع المعادلة الحسابية رجاء**');
} else {    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        msg.reply(`Error: ${err}`);
    }
    
    const embed = new Discord.RichEmbed()
    .addField("**المعادلة** ",`**${question}**`, true)
    .addField("**الناتج** ",`**${answer}**`, true)
    .setColor("#565656")
    msg.channel.send(embed)
    }
};
});

client.on('message', message => { 

 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;  

        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
        });
}
});

client.on('message', message => {

if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor("#565656")
         .addField('**Your Permissions:**',perms)
                  message.channel.send({embed:zPeRms});

    }
});


client.on("message", message => {

	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **لا تمتلك الخاصية المطلوبه**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الاعضاء رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الاعضاء رتبة**');
		} 
	} 
});

client.on('message', async message =>{
  if (message.author.boss) return;

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**لا تمتلك الخاصية المطلوبة**").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**لا امتلك الخاصية المطلوبة**").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("#565656")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**الاسم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**من قبل**", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} : انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} : تمت معاقبتك بواسطة
${reason} : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسوؤلين
`)
		.setFooter(`Server : ${message.guild.name}`)
		.setColor("#565656")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**لا تمتلك الخاصية المطلوبه**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**لا امتلك الخاصية المطلوبه**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**تم ازالة الميوت**");

  return;

  }

});

client.on('message' , message => { 

if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("380307890235506698","0").send(
    "\n" + "**" + " السيرفر :" + "**" +
    "\n" + " " + " " + message.guild.name + " " +
    "\n" + "**" + " المرسل : " + "**" +
    "\n" + " " + "» " + message.author.tag + " " +
    "\n\n" + "**" + " الرسالة : " + "**" +
    "\n" + " " + args + " ")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('**تم ارسال الرسالة الى صاحب البوت بنجاح**')
     .setThumbnail(message.author.avatarURL)
     .setFooter("Developers : wHybh & CuteS7T")
                                                

message.channel.send(embed);


}
    
});

client.on('message', message => { 

  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**لا تمتلك الخاصية المطلوبة**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**لا امتلك الخاصية المطلوبة**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لا يمكنني طرد شخص اعلى من رتبتي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed() 

  .setColor("#565656")
  .setTimestamp()
  .addField("**الاسم**",  ' ' + `${user.tag}` + ' ')
  .addField("**من قبل**", ' ' + `${message.author.tag}` + ' ')
  .addField("**السبب**", ' ' + `${reason}` + ' ')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => { 

  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**لا تمتلك الخاصية المطلوبة**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**لا امتلك الخاصية المطلوبة**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لا يمكنني طرد شخص اعلى من رتبتي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed() 

  .setColor("#565656")
  .setTimestamp()
  .addField("**الاسم**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', message => {
        if (message.content === "!!inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: Alpha Bot `)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=480653185208418304&permissions=8&scope=bot`)
        .setColor("#565656")      
     message.channel.sendEmbed(embed);
       }
   });


client.on('message', message => {
        if (message.content === "!!support") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: Support`)
        .setURL(`https://discord.gg/mj37PRv`)
        .setColor("#565656")      
     message.channel.sendEmbed(embed);
       }
   });

//////////////////////////////////////



//////////////////////////////////////

client.login(process.env.BOT_TOKEN);
