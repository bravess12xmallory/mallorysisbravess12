const Discord = require('discord.js');
const Rocket = new Discord.Client();
const moment = require("moment");
const fs = require('fs')
const prefix = '#'

client.on('ready', () => {
client.user.setStatus('idle');
  console.log('By wHybh.')
});

Rocket.on('message', message => { //ping
    if(!message.channel.guild) return;
if (message.content.startsWith('#ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(Rocket.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('FFFFFF')
.addField('Ping:',msg + " ms 📶 ")
message.channel.send({embed:embed});
}
});
Rocket.on('ready', () => { //playing
    Rocket.user.setGame(`#help | Servers : ${Rocket.guilds.size}	`,'https://www.twitch.tv/faresgameryt');
});
Rocket.on('message',function(message) {
    let toKick = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + 'kick')) {
       if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply('**# - ليس لديك البرمشنات المطلوبة!**');
       if(toKick.kickable) return message.reply("**# - لا استطيع طرد شخص اعلى مني**");
       if(!toReason) return message.reply("**# - اكتب سبب**")
       if(toKick.id === message.author.id) return message.reply("**# لا استطيع طردك**")
       if(!message.guild.member(toKick).kickable) return message.reply("**# - لا استطيع طرد هذا الشخص!**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("تم طردك من السيرفر")
       .setThumbnail(toKick.avatarURL)
       .addField("**# - السيرفر:**",message.guild.name,true)
       .addField("**# - السبب:**",toReason,true)
       .addField("**# - من قبل:**",message.author,true)
       if(message.member.hasPermission("KICK_MEMBERS")) return (
           toKick.sendMessage({embed: toEmbed}).then(() => message.guild.member(toKick).kick()).then(() => message.channel.send(`**# Done! I kicked: ${toKick}**`))
       )
       }
});
Rocket.on("message", function(message) {
    let toBan = message.mentions.users.first();
    let toReason = message.content.split(" ").slice(2).join(" ");
    let toEmbed = new Discord.RichEmbed()
   if(message.content.startsWith(prefix + "ban")) {
       if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("**# - ليس لديك البرمشنات المطلوبه**");
       if(!toBan) return message.reply("**# - Mention a user!**");
       if(toBan.id === ("480653185208418304")) return message.reply("**انا لا استطيع طرد نفسي**");
       if(toBan === message.member.guild.owner) return message.reply("**# لا تستطيع طرد اونر السيرفر*");
       if(toBan.bannable) return message.reply("**لا استطيع طرد شخص اعلى مني**");
       if(!toReason) return message.reply("**# - اكتب سبب**")
       if(toBan.id === message.author.id) return message.reply("**# لا استطيع طردك**")
       if(!message.guild.member(toBan).bannable) return message.reply("**# - لا استطيع طرد هذا الشخص**")
       let toEmbed;
       toEmbed = new Discord.RichEmbed()
       .setTitle("تم طردك من السيرفر")
       .setThumbnail(toBan.avatarURL)
       .addField("**# - السيرفر:**",message.guild.name,true)
       .addField("**# - السبب:**",toReason,true)
       .addField("**# - من قبل:**",message.author,true)
       if(message.member.hasPermission("BAN_MEMBERS")) return (
           toBan.sendMessage({embed: toEmbed}).then(() => message.guild.member(toBan).ban({reason: toReason})).then(() => message.channel.send(`**# Done! I banned: ${toBan}**`))
       );

   }
});

                        Rocket.on('message', message => { //bot
                            if (message.content.startsWith("#bot")) {
                            message.channel.send({
                                embed: new Discord.RichEmbed()
                                    .setAuthor(Rocket.user.username,Rocket.user.avatarURL)
                                    .setThumbnail(Rocket.user.avatarURL)
                                    .setColor('FFFFFF')
                                    .setTitle('**Brave 🔸** ')
                                    .addField('Uptime :', [timeCon(process.uptime())], true)
                                    .addField('Ping :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                                    .addField('servers``', [Rocket.guilds.size], true)
                                          .addField('Prefix :' , `[ ${prefix} ]` , true)

                            })
                        }
                        });

                        function timeCon(time) { //bot2
                            let days = Math.floor(time % 31536000 / 86400)
                            let hours = Math.floor(time % 31536000 % 86400 / 3600)
                            let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
                            let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
                            days = days > 9 ? days : '0' + days
                            hours = hours > 9 ? hours : '0' + hours
                            minutes = minutes > 9 ? minutes : '0' + minutes
                            seconds = seconds > 9 ? seconds : '0' + seconds
                            return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
                        }

 Rocket.on('message', function(msg) {
if(msg.content.startsWith (prefix  + 'server')) {
 let embed = new Discord.RichEmbed()
 .setColor('FFFFFF')
 .setThumbnail(msg.guild.iconURL)
 .setTitle(`Showing Details Of  **${msg.guild.name}*`)
 .addField(':globe_with_meridians:** نوع السيرفر**',`[ ${msg.guild.region} ]`,true)
 .addField(':medal:** الرتب**',`[ ${msg.guild.roles.size} ]`,true)
 .addField(':red_circle:**عدد الاعضاء**',`[ ${msg.guild.memberCount} ]`,true)
 .addField(':large_blue_circle:**عدد الاعضاء الاونلاين**',`[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]`,true)
 .addField(':pencil:**الرومات الكتابية**',`[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]`,true)
 .addField(':microphone:**رومات الصوت**',`[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
 .addField(':crown:** الأونـر**',`[ ${msg.guild.owner} ]`,true)
 .addField(':id:**ايدي السيرفر**',`[ ${msg.guild.id} ]`,true)
 msg.channel.send({embed:embed});
}
});


Rocket.on('message', message => {//av mension
    if (message.content.startsWith("#avatar")) {

        var mentionned = message.mentions.users.first();
    var king66s;
      if(mentionned){
          var king66s = mentionned;
      } else {
          var king66s = message.author;

      }
        const embed = new Discord.RichEmbed()
        .setColor("FFFFFF")
          .setAuthor(message.author.username, message.author.avatarURL)
        .setImage(`${king66s.avatarURL}`)
      message.channel.sendEmbed(embed);

    }
  });
Rocket.on('message', message => {//roles
    if (message.content === "#roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('FFFFFF')
        .addField('**Roles** :',`[ ${roles} ]`)
        message.channel.sendEmbed(embed);
    }
});
Rocket.on('message', message => {//rooms
    if (message.content === "#rooms") {
        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('**Rooms** :',`[ ${channels} ]`)
        message.channel.sendEmbed(embed);
    }
});
Rocket.on('message', message => {//help msg
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
        message.react("☑")




        message.author.sendMessage(`**لتفعيل اللوق انشئ روم اسمه log**

        __**الاوامر الادارية :gear:**__

  ❖${prefix}** bc ** ==>**لارسال رسالة لكل الاعضاء**
  ❖${prefix}** role <user> ** ==>**لاعطاء شخص رتبة**
  ❖${prefix}** role all ** ==>**لاعطاء الكل الرتبة المحددة**
  ❖${prefix}** role users ** ==>**لاعطاء الاعضاء فقط**
  ❖${prefix}** role bots ** ==>**لاعطاء البوتات فقط**
  ❖${prefix}** ct ** ==>**لانشاء روم  كتابي**
  ❖${prefix}** cc ** ==>**لانشاء مستند**
  ❖${prefix}** cv ** ==>**لانشاء روم صوتي **
  ❖${prefix}** kick ** ==>**لطرد شخص من السيرفر**
  ❖${prefix}** ban ** ==>**لحضر شخص من السيرفر**
  ❖${prefix}** mute ** ==>**لاسكات عضو في السيرفر**
  ❖${prefix}** unmute ** ==>**لفك الاسكات عن عضو في السيرفر**
  ❖${prefix}** clear ** ==>**لمسح كل رسائل الشات**
        __**الاوامر العامة :coffee:**__
  ❖${prefix}** avatar ** ==>**لكي يعطيك رابط صورتك او صورة صديقك**
  ❖${prefix}** serveravatar ** ==>**لكي يعطيك رابط صورة السيرفر**
  ❖${prefix}** server ** ==>**لمعلومات السيرفر**
  ❖${prefix}** ping ** ==>**للتحقق من سرعة الاتصال**
  ❖${prefix}** bot ** ==>**معلومات عن البوت**
  ❖${prefix}** invite ** ==>**لاحضار البوت الى سيرفرك**
  ❖${prefix}** time ** ==>**لرؤية الوقت**
  ❖${prefix}** color ** ==>**لتغيير لونك**
  ❖${prefix}** roles ** ==>**لكي ترى كل رتب السيرفر**
  ❖${prefix}** rooms ** ==>**لكي ترى كل قنوات السيرفر**
  ❖${prefix}** date ** ==>**لكي ترى التاريخ**
        __**الاوامر الترفيهية :video_game:**__
  ❖${prefix}** cuttweet ** ==>**لكي يعطيك جمل كت تويت عشوائية**
  ❖${prefix}** roll ** ==>**لاختيار رقم عشوائي**

        **لتفعيل الحمآية , يرجى رفع رتبة البوت فوق كل الرتب**
           **لو حاب تشوف اللوق؟ , سو روم كتآبي بأسم : log**
====================================================================

  **Developers : wHybH & CuteS7T** | شكرا لكم لاستعمال البوت

====================================================================

  `);
//  ** يشمل البوت اشياء كثيرة ومنها مانع التهكير - لـ تفعيل مانع التهكير ارفع رتبة البوت فوق كل رتب الادارة **


  }
  });


Rocket.on('message', message => {//help
     if (message.content === "#help") {
  message.channel.send('تم ارسال جميع الاوامر بالخاص')
    }
});
Rocket.on('message', message => {//invite
     if (message.content === "#invite") {
     let embed = new Discord.RichEmbed()
.setColor("FFFFFF")
.setTitle("invite Brave")
.setAuthor("Brave", "https://discordapp.com/channels/350923773140271115/469576599696834560")
.setTimestamp()
.setURL("https://discordapp.com/api/oauth2/authorize?client_id=480653185208418304&permissions=8&scope=bot")
  message.author.sendEmbed(embed);
    }
});
Rocket.on('message', message => {//unmute
    if (message.content.startsWith('#unmute')) {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
   let men = message.mentions.users.first()
   let mas = message.author
   if(!men) return message.channel.send('`منشن الشخص الذي تريد فك الميوت عنه `');
   message.guild.channels.forEach(c => {
   c.overwritePermissions(men.id, {
           SEND_MESSAGES: true
           })
      })
  const embed = new Discord.RichEmbed()
  .setColor("FFFFFF")
  .setDescription(`**
   <@${men.id}>
  تم فك الميوت الكتابي
  بواسطة : <@${message.author.id}> **`)
  .setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")

  Rocket.users.get(men.id).sendEmbed(embed)
  const Embed11 = new Discord.RichEmbed()
  .setColor("FFFFFF")
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setDescription(`          <@${men.id}>
  تم فك الميوت الكتابي
  بواسطة : <@${message.author.id}>
  `)
  .setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452093541003296788/start-button-hi.png")
  message.channel.sendEmbed(Embed11).then(message => {message.delete(20000)})
      }
});
Rocket.on('message', message => {//mute
    if (message.content.startsWith('#mute')) {
  if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("**انت لا تمتلك الخاصيه المطلوبه** | ❎ ");
  let men = message.mentions.users.first()
  let mas = message.author
  if(!men) return message.channel.send('`منشن الشخص الذي تريد ان تعطيه ميوت كتابي` ');
  message.guild.channels.forEach(c => {
  c.overwritePermissions(men.id, {
            SEND_MESSAGES: false
  })
      })
  const embed = new Discord.RichEmbed()
  .setColor("FFFFFF")
  .setDescription(`**
   <@${men.id}>
  لقد تم اعطائك ميوت كتابي
  بواسطة : <@${message.author.id}> **`)
  .setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")

  Rocket.users.get(men.id).sendEmbed(embed)
  const Embed11 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setDescription(`          <@${men.id}>
  لقد تم اعطائه الميوت الكتابي بنجاح
  بواسطة : <@${message.author.id}> `)
  .setThumbnail("https://cdn.discordapp.com/attachments/408952032112803850/452090205793681419/fd684707fc14f41663f15ecebf089f06.png")
  message.channel.sendEmbed(Embed11).then(message => {message.delete(20000)})
      }


});
    Rocket.on('message', message => {//time
        if (message.content === prefix + "time") {
            if (!message.channel.guild) return message.reply('** This command only for servers **');
var currentTime = new Date(),
            hours = currentTime.getHours() + 0 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds();
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }


                var Date15= new Discord.RichEmbed()
                .setThumbnail(message.author.avatarURL)
                .setTitle("**الوقت وتاريخ**")
                .setColor('FFFFFF')
                .setTimestamp()
                .addField('Time',
                "["+ hours + ":" + minutes + "]")
                .addField('Date',
                "["+ Day + "-" + Month + "-" + Year + "]")

                 message.channel.sendEmbed(Date15);
        }
    });
 const cuttweet = [//cuttweet
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 Rocket.on('message', message => {//cuttweet
   if (message.content.startsWith("#cuttweet")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('FFFFFF')
   .setThumbnail(message.author.avatarURL)
 .addField('Brave 🔸' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});
Rocket.on('message', message => {//color
    let args = message.content.split(' ').slice(1);
if(message.content.split(' ')[0] == '#color'){
     const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**لايوجد لون بهذا الرقم ** :x:`)
.setColor('ff0000')

if(!isNaN(args) && args.length > 0)


if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


 var a = message.guild.roles.find("name",`${args}`)
          if(!a)return;
const embed = new Discord.RichEmbed()

.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**تم تغيير اللون بنجاح** :white_check_mark:`)

.setColor(`${a.hexColor}`)
message.channel.sendEmbed(embed);
    if (!args)return;
setInterval(function(){})
            let count = 0;
            let ecount = 0;
  for(let x = 1; x < 201; x++){

      message.member.removeRole(message.guild.roles.find("name",`${x}`))

      }
          message.member.addRole(message.guild.roles.find("name",`${args}`));


}
});
const adminprefix = "!#";
const devs = ['380307890235506698' , 'id2' , 'id3'];
Rocket.on('message', message => {//for dev
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(adminprefix + 'setgame')) {
  Rocket.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
Rocket.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
Rocket.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else
if (message.content.startsWith(adminprefix + 'setT')) {
  Rocket.user.setGame(argresult, "https://www.twitch.tv/faresgameryt");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

Rocket.on('message', message => {//restart
    if(message.content === adminprefix + "restart") {
          if (!devs.includes(message.author.id)) return;
              message.channel.send(`⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**`);
            console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
            Rocket.destroy();
            child_process.fork(__dirname + "/bot.js");
            console.log(`تم اعادة تشغيل البوت`);
        }


    });
});

Rocket.on('message', function(message) {//roll
        if(message.content.startsWith(prefix + 'roll')) {
            let args = message.content.split(" ").slice(1);
            if (!args[0]) {
                message.channel.send('**ضع رقم معين ليتم السحب منه**');
                return;
                }
        message.channel.send(Math.floor(Math.random() * args.join(' ')));
                if (!args[0]) {
              message.edit('1')
              return;
            }
        }
    });
    Rocket.on("message", message => {    //serv-av
        if(!message.channel.guild) return;
 if(message.author.bot) return;
    if(message.content === "#serveravatar"){
        const embed = new Discord.RichEmbed()

    .setTitle(`صورة سيرفر : ** ${message.guild.name} **`)
.setAuthor(message.author.username, message.guild.iconrURL)
  .setColor('FFFFFF')
  .setImage(message.guild.iconURL)

 message.channel.send({embed});
    }
});
Rocket.on('message', message => {//role
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'role')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).removeRole(role1.id);
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
                if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
                message.guild.member(member).addRole(role1);
            } else {
                message.reply(`يجب عليك كتابة اسم الرتبة`);
            }
        }
 else if(args[0] == 'all') {
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
    });
}
} else if(args[0] == 'users') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
            msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
        });
    }
} else if(args[0] == 'bots') {
    if(role) {
        let role1 = message.guild.roles.find('name', role);
        if(!role1) return message.reply(`الرتبة غير موجودة بالسيرفر تأكد من الاسم`);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
msg.edit(`تم الانتهاء من الامر ${message.guild.members.size}`);
});
}
}
}
});
Rocket.on('message', msg => {
      if(!msg.guild) return;
        if (msg.content.startsWith(prefix +'cc')) {
         let args = msg.content.split(" ").slice(1);
        if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
    let ra3d = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.author.avatarURL)
    .setDescription(`هل انت متاكد من انشاء مستند الكاتيجوري ؟\n  ✅  \n  ❌ \n  لديك 60 ثانية للاختيار`)
    msg.channel.send(ra3d).then(message => {
     message.react('✅').then(r=>{
     message.react('❌').then(r=>{
     let eyadandr3d = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
     let eyadandr3dd = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;

     let tt  = message.createReactionCollector(eyadandr3d, { time: 60000 });
     let er  = message.createReactionCollector(eyadandr3dd, { time: 60000 });
    er.on("collect", r => {
    msg.channel.send("`تم الالغاء`")
    message.delete();
    })
    tt.on("collect", r => {
    msg.guild.createChannel(args.join(' '), 'category').then(ra3deyad => {
    channelCreated = ra3deyad.createdAt
          const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail('https://cdn.discordapp.com/attachments/453024271560867853/455104628674134019/2000px-Twemoji_1f4dd.svg.png')
      .addField(`اسم القناة`, `${ra3deyad.name}`, true)
      .addField(`أيدي القناة`, `${ra3deyad.id}`, true)
      .addField(`نوع القناة`, `${ra3deyad.type}`, true)
      .addField(`متى انشأت القناة`, `${channelCreated}`)
     msg.channel.send({embed})
        message.delete();
    })
    })
    })
    })
    })
    }
    });
    Rocket.on('message', msg => {
          if(!msg.guild) return;
            if (msg.content.startsWith(prefix +'cv')) {
             let args = msg.content.split(" ").slice(1);
            if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
        let ra3d = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(msg.author.avatarURL)
        .setDescription(`هل انت متاكد من انشاء روم صوتي ؟\n  ✅  \n  ❌ \n  لديك 60 ثانية للاختيار`)
        msg.channel.send(ra3d).then(message => {
         message.react('✅').then(r=>{
         message.react('❌').then(r=>{
         let eyadandr3d = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
         let eyadandr3dd = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
         let tt  = message.createReactionCollector(eyadandr3d, { time: 60000 });
         let er  = message.createReactionCollector(eyadandr3dd, { time: 60000 });
        er.on("collect", r => {
        msg.channel.send("`تم الالغاء`")
        message.delete();
        })
        tt.on("collect", r => {
        msg.guild.createChannel(args.join(' '), 'voice').then(ra3deyad => {
        channelCreated = ra3deyad.createdAt
              const embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setImage()
          .setThumbnail('https://cdn.discordapp.com/attachments/453024271560867853/455104628674134017/1500920527.jpg')
          .setURL('')
          .addField(`اسم القناة`, `${ra3deyad.name}`, true)
          .addField(`أيدي القناة`, `${ra3deyad.id}`, true)
          .addField(`نوع القناة`, `${ra3deyad.type}`, true)
          .addField(`متى انشأت القناة`, `${channelCreated}`)
         msg.channel.send({embed})
            message.delete();
        })
        })
        })
        })
        })
        }
        });
        Rocket.on('message', msg => {
              if(!msg.guild) return;
                if (msg.content.startsWith(prefix +'ct')) {
                 let args = msg.content.split(" ").slice(1);
                if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
            let ra3d = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(msg.author.avatarURL)
            .setDescription(`هل انت متاكد من انشاء شات كتابي ؟\n  ✅  \n  ❌ \n  لديك 60 ثانية للاختيار`)
            msg.channel.send(ra3d).then(message => {
             message.react('✅').then(r=>{
             message.react('❌').then(r=>{
             let eyadandr3d = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
             let eyadandr3dd = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
             let tt  = message.createReactionCollector(eyadandr3d, { time: 60000 });
             let er  = message.createReactionCollector(eyadandr3dd, { time: 60000 });
            er.on("collect", r => {
            msg.channel.send("`تم الالغاء`")
            message.delete();
            })
            tt.on("collect", r => {
            msg.guild.createChannel(args.join(' '), 'text').then(ra3deyad => {
            channelCreated = ra3deyad.createdAt
                  const embed = new Discord.RichEmbed()
              .setColor('RANDOM')
              .setImage()
              .setThumbnail('http://cdn.onlinewebfonts.com/svg/img_323299.png')
              .addField(`اسم القناة`, `${ra3deyad.name}`, true)
              .addField(`أيدي القناة`, `${ra3deyad.id}`, true)
              .addField(`نوع القناة`, `${ra3deyad.type}`, true)
              .addField(`متى انشأت القناة`, `${channelCreated}`)
             msg.channel.send({embed})
                message.delete();
            })
            })
            })
            })
            })
            }
            });

client.login(process.env.BOT_TOKEN);  //لا تغير هنااااااااااااااااا
//Test

