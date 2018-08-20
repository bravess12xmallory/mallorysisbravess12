const Discord = require('discord.js');
const Rocket = new Discord.Client();
const moment = require("moment");
const fs = require('fs')
const prefix = '!!'

Rocket.on('ready', () => {
  
Rocket.user.setStatus('idle');
  console.log('By wHybh.')
});

Rocket.on('message', message => { //ping
    if(!message.channel.guild) return;
if (message.content.startsWith('!!ping')) {
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
    Rocket.user.setGame(`| !!help`,'https://www.twitch.tv/v5bz');
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
       .setTitle("You got Kick!")
       .setThumbnail(toKick.avatarURL)
       .addField("**# - السيرفر:**",message.guild.name,true)
       .addField("**# - السبب:**",toReason,true)
       .addField("**# - من قبل:**",message.author,true)
       if(message.member.hasPermission("KICK_MEMBERS")) return (
           toKick.sendMessage({embed: toEmbed}).then(() => message.guild.member(toKick).kick()).then(() => message.channel.send(`**# Done! I kicked: ${toKick}**`))
       )
       }
});

Rocket.on('message', async message => {
  if(message.content.startsWith(prefix + "voice.set")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('**ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(Rocket.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('**ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send('**يجب ان تضيف بأخر الاسم رقم 0** :small_orange_diamond: ');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send('**تم انشاء عداد الفويس** :small_orange_diamond: ');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
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
       .setTitle("You got banned!")
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
                            if (message.content.startsWith("!!bot")) {
                            message.channel.send({
                                embed: new Discord.RichEmbed()
                                    .setAuthor(Rocket.user.username,Rocket.user.avatarURL)
                                    .setThumbnail(Rocket.user.avatarURL)
                                    .setColor('FFFFFF')
                                    .setTitle('**Alpha Status:** ')
                                    .addField('Uptime :', [timeCon(process.uptime())], true)
                                    .addField('Ping :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
                                    .addField('servers``', [Rocket.guilds.size], true)
                                          .addField('Prefix :' , ` ${prefix} ` , true)

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
 .addField(':id:**ايدي السيرفر**',`[ ${msg.guild.id} ]`,true)
 msg.channel.send({embed:embed});
}
});


Rocket.on('message', message => {//av mension
    if (message.content.startsWith("!!avatar")) {

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
    if (message.content === "!!roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('FFFFFF')
        .addField('**Roles** :',`[ ${roles} ]`)
        message.channel.sendEmbed(embed);
    }
});
Rocket.on('message', message => {
     if(message.content.startsWith(prefix + "clear")) {
         var args = message.content.split(" ").slice(1);
 if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('انت لا تمتلك الخاصية المطلوبه');
  if (!args[0]) return message.channel.send('**يجب تحديد رقم** :small_orange_diamond: `');

  message.channel.bulkDelete(args[0]).then(() => {
    const embed = new Discord.RichEmbed()
      .setColor(0xF16104)
      .setDescription(`Cleared ${args[0]} messages.`);
    message.channel.send({ embed });

    const actionlog = message.guild.channels.find('name', 'log');

    if (!actionlog) return message.channel.send('Can\'t find action-log channel. Are you sure that this channel exists and I have permission to view it? **CANNOT POST LOG.**');
    const embedlog = new Discord.RichEmbed()
      .setDescription('Alpha.')
      .setColor(0xF16104)
      .addField('Clear By', `<@${message.author.id}> with ID ${message.author.id}`)
      .addField('Clear in', message.channel)
    actionlog.send(embedlog);
   
  });
};

});
Rocket.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});
Rocket.on('message', msg => {
    if(msg.content === '!!help') {
        
        if(!msg.channel.guild) return msg.reply("هذا الأمر للسيرفرات فقط")

if (msg.author.bot) return;
  const embed = new Discord.RichEmbed()
            .setColor("WHITE")
                                .setTitle("**Help list for Alpha Bot.**")
            .setDescription(`
__اوامر ادارية__

  **${prefix}bc** : لارسال رسالة لكل الاعضاء
  **${prefix}role** <user> : لاعطاء شخص رتبة
  **${prefix}role all** : لاعطاء الكل الرتبة المحددة
  **${prefix}role users** : لاعطاء الاعضاء فقط
  **${prefix}role bots** : لاعطاء البوتات فقط
  **${prefix}voice.set** : لصنع روم عدد الاعضاء
  **${prefix}kick** : لطرد شخص من السيرفر
  **${prefix}ban** : لحضر شخص من السيرفر
  **${prefix}mute** : لاسكات عضو في السيرفر
  **${prefix}unmute** : لفك الاسكات عن عضو في السيرفر
  **${prefix}clear** : لمسح كل رسائل الشات

__اوامر عامة__

  **${prefix}avatar** : اظهار صورتك
  **${prefix}icon** : اظهار صورة السيرفر
  **${prefix}server** : لمعلومات السيرفر
  **${prefix}ping** : للتحقق من سرعة الاتصال
  **${prefix}bot** : معلومات حول البوت
  **${prefix}invite** : لاحضار البوت الى سيرفرك
  **${prefix}time** : لرؤية الوقت
  **${prefix}color** : لتغيير لونك
  **${prefix}roles** : اظهار رومات السيرفر
  **${prefix}support** : اظهار سيرفر الدعم الفني

__اوامر اخرى__

  **${prefix}cuttweet** : اسأله عشوائيه
  **${prefix}roll** : لاختيار رقم عشوائي
-
`)
        .setFooter('Alpha beta version')
        
        msg.author.sendEmbed(embed)

    }

});
Rocket.on('message', message => {//help
     if (message.content === "!!help") {
  message.channel.send('**تم ارسال بالخاص** :small_orange_diamond: ')
    }
});
Rocket.on('message', message => {
  if(message.content === '=invite') {
  const embed = new Discord.RichEmbed()
  .setTitle('Invite Alpha Bot')
  .setURL('https://discordapp.com/api/oauth2/authorize?client_id=480653185208418304&permissions=8&scope=bot')
  .setColor('FFFFFF')
  message.author.send(embed);
  }
});
Rocket.on('message', message => {
  if(message.content === '!!support') {
  const embed = new Discord.RichEmbed()
  .setTitle('Support Server.')
  .setURL('https://discord.gg/g4cq9ZT')
  .setColor('FFFFFF')
  message.author.send(embed);
  }
});
Rocket.on('message', message => {//unmute
    if (message.content.startsWith('!!unmute')) {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**انت لا تمتلك الخاصيه المطلوبه** :small_orange_diamond:");
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
  .setDescription(`
<@${men.id}> **Unmuted!**
`)

  Rocket.users.get(men.id).sendEmbed(embed)
  const Embed11 = new Discord.RichEmbed()
  .setColor("FFFFFF")
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setDescription(`
<@${men.id}> **Unmuted!**
`)
  
  message.channel.sendEmbed(Embed11).then(message => {message.delete(20000)})
      }
});
Rocket.on('message', message => {//mute
    if (message.content.startsWith('!!mute')) {
  if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("**انت لا تمتلك الخاصيه المطلوبه** :small_orange_diamond:");
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
  .setDescription(`
<@${men.id}> **Muted!**
 `)

  Rocket.users.get(men.id).sendEmbed(embed)
  const Embed11 = new Discord.RichEmbed()
  .setColor("FFFFFF")
  .setAuthor(message.guild.name, message.guild.iconURL)
  .setDescription(`

<@${men.id}> **Muted!**
`)
  
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
                .addField('**Time :**',
                " "+ hours + ":" + minutes + " .")
                .addField('**Date :**',
                " "+ Day + "-" + Month + "-" + Year + " .")

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
   if (message.content.startsWith("!!cuttweet")) {
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
if(message.content.split(' ')[0] == '!!color'){
     const embedd = new Discord.RichEmbed()
.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**لايوجد لون بهذا الرقم **:small_orange_diamond:`)
.setColor('ff0000')

if(!isNaN(args) && args.length > 0)


if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


 var a = message.guild.roles.find("name",`${args}`)
          if(!a)return;
const embed = new Discord.RichEmbed()

.setFooter('Requested by '+message.author.username, message.author.avatarURL)
.setDescription(`**تم تغيير اللون بنجاح** :small_orange_diamond:`)

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
const adminprefix = "!!";
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
                message.channel.send('**ضع رقم معين ليتم السحب منه** :small_orange_diamond:');
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
    if(message.content === "!!icon"){
        const embed = new Discord.RichEmbed()

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
    if(msg.author.bot) return;
    
    if(msg.content === '!!-s.info') {
      Rocket.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  });

Rocket.login(process.env.BOT_TOKEN);  //لا تغير هنااااااااااااااااا
//Test

