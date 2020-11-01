const express = require("express")
const app = express()
const { Client } = require("discord.js")
const { CanvasSenpai } = require("canvas-senpai")
const bot_ = new Client();
const canva = new CanvasSenpai();
app.get("/api/v1/rank/:name/:discriminator/:level/:rank/:curxp/:fulxp", async (req, res) => {
  let { discriminator, name, level, rank, curxp, fulxp } = req.params
  let data = await canva.rankcard(
     {
       link: "https://i.pinimg.com/originals/76/0e/d7/760ed7f52c90870503762ac92db92adc.jpg",
       name: name,
      discriminator: discriminator,
       level: level,
       rank: rank,
       currentXP: curxp,
       fullXP: fulxp,
       avatar: bot_.users.cache.find((u) => u.username === name).displayAvatarURL({ format: "png" })
     })
     res.setHeader('content-type', 'image/png');
    res.status(200).send(data)
})
bot_.on("ready", () => app.listen(26140))
bot_.login("Njk4Mzc1NTIyMDM5NzU4ODU4.XpE64w.hux6Gcw8f8mOpbsEiM9ihcp06FE")
//Db-scripe
const Dlang = require('discordbot-script')
const discordScript = require("discordbot-script")
const bot = new discordScript({
  token: "Njk4Mzc1NTIyMDM5NzU4ODU4.XpE64w.hux6Gcw8f8mOpbsEiM9ihcp06FE",
  prefix: [`$getServerVar[prefix]`]})
bot.MessageEvent()
bot.MessageEditEvent()
bot.Variables({
version:"V 1.9.5",    
helppage:"5",
v5prefix:"8!",
snipe: "這裡沒有我可以snipe的東西",
user: "698375522039758858",
update:"nothing",
wc:"0",
lc:"0",
wm:"join this server",
lm:"left this server",
prefix:"8!",
bank:"0",
level:"0",
time:"20",
rep:"0",
role:"0",
lvc:"0",
number:"1",
bank:"0",
premium:"0",
Money:"0",
item1:"Not set",
item2:"Not set",
item3:"Not set",
item4:"Not set",
item5:"Not set",
item6:"Not set",
item7:"Not set",
item8:"Not set",
item9:"Not set",
item10:"Not set",
i1a:"0",
i2a:"0",
i3a:"0",
i4a:"0",
i5a:"0",
i6a:"0",
i7a:"0",
i8a:"0",
i9a:"0",
i10a:"0",
log:"0",
warncounter:"0",
member:"0",
u1:"no name",
u2:"no name",
u3:"no name",
u4:"no name",
u5:"no name",
u6:"no name",
u7:"no name",
u8:"no name",
u9:"no name",
u10:"no name",
id1:"no set",
id2:"no set",
tvroleID:"0",
vroleID:"0",
id3:"no set",
id4:"no set",
id5:"no set",
id6:"no set",
id7:"no set",
id8:"no set",
id9:"no set",
id10:"no set",
casino:"0",
verify:"",
vr:"0",
wic:"0",
swic:"0",
test:"",
tvr:"0",
ca:"",
warn:"0",
878:"f",
})

bot.Command({
	name: "help",
	code: `
$title[welcome use 878 bot]
$thumbnail[https://cdn.discordapp.com/attachments/714459896950816779/716647645518626856/20200531_214110.png]
$description[
Hi~ I am 878bot.
My creater is \`$username[670194432657588234]\`.
My prefix is\`$getServerVar[prefix]\`.

$getVar[update;670194432657588234]
--------------------------------
一般 general \`$getServerVar[prefix]help 1\`
管理員 admin  \`$getServerVar[prefix]help 2\`
物品 item \`$getServerVar[prefix]help 3\`
娛樂 fun \`$getServerVar[prefix]help 4\`
音樂 music \`$getServerVar[prefix]help 5\`
878專屬only 878\`$getServerVar[prefix]help 6\`
$addTimestamp] $footer[Page no page] $color[$random[0;999999]] 

$onlyIf[$message[]==;{execute:help$message[]}]
$onlyIf[$message[]<=$getVar[helppage;670194432657588234];沒有第$message[]頁/I haven't page$message[]]`})
bot.ExecutableCommand({
  name:"help1",
  code:`$title[**一般 General**]
$description[
$getServerVar[prefix]say \`重複輸入說話/Repeat typing\`
$getServerVar[prefix]botinvite \`{@機器人} 查看他的邀請連結/{@bot} view it's invite URL\`
$getServerVar[prefix]botinfo \`Info of 878 bot\`
$getServerVar[prefix]server \`伺服器信息/server information\`
$getServerVar[prefix]av \`查看頭像/view avatar\`
$getServerVar[prefix]checkwarns \`查看警告/view warn\`
$getServerVar[prefix]invite \`邀878 Bot/invite 878 Bot\`
$getServerVar[prefix]report \`{錯誤} 錯誤回報/{error} Error report\`
$getServerVar[prefix]snipe \`查看上一個刪除的訊息/View the last deleted message\`
$getServerVar[prefix]rank \`查看等級/view level\` 名字不可為特殊文字
$addTimestamp] $color[$random[0;999999]] $footer[Page 1/$getVar[helppage;670194432657588234]]
`})
bot.ExecutableCommand({
  name:"help2",
  code:`
$title[**管理員 Admin**]
$description[
管理員:
Admin:
$getServerVar[prefix]warn \`{@成員} 警告/{@member} warn\`
$getServerVar[prefix]clearwarns \`{@成員} 清徐警告/{@member} clear warns\`
$getServerVar[prefix]kick \`{@成員} 踢掉/{@member} kick\`
$getServerVar[prefix]ban \`{@成員} 禁止/{@member} ban\`
$getServerVar[prefix]purge \`{數字} 清除訊息/{number} clear message\`
$getServerVar[prefix]poll \`{問題} 投票/{Question} Vote\`
$getServerVar[prefix]mute \`{@成員} 禁言/{@MEMBER} Mute\`
$getServerVar[prefix]unmute \`{@成員} 取消禁言/{@member} unmute\`
$getServerVar[prefix]welcomechannel \`加入訊息/ welcome message\`
$getServerVar[prefix]leavechannel \`離開訊息/leave message\`
$getServerVar[prefix]clearwelcomechannel \`移除歡迎訊息/remove welcome message\`
$getServerVar[prefix]clearleavechannel \`移除離開訊息/remove leave message\`
$getServerVar[prefix]autorole \`{身份組名字} 加入給身份組/{role name}join  give role\`***(一定要設置)***
$getServerVar[prefix]setlog \`{頻道編號} 設定log/{channel ID} set log\`
$getServerVar[prefix]delwarn \`{成員} 刪除警告/{member} Delete warn\`
$getServerVar[prefix]welcomemessage \`{歡迎訊息} 歡迎訊息/{welcome message} set wlcome message\`
$getServerVar[prefix]leavemessage \`{離開訊息} 離開訊息/{leave message} set leave message\`
$addTimestamp]
$color[$random[0;999999]]

$footer[Page 2/$getVar[helppage;670194432657588234]]`})
bot.ExecutableCommand({
  name:"help3",
  code:`$title[**物品 Item**]
$description[
$getServerVar[prefix]shop \`商店/shop\`
$getServerVar[prefix]buy \`{1~10} 買在$getServerVar[prefix]shop裡的物品/buy in $getServerVar[prefix]shop's item\`
$getServerVar[prefix]bal \`查看餘額/View balance\`
$getServerVar[prefix]work \`工作/work\`
$getServerVar[prefix]setitem \`{物品名稱 物品價錢 物品數字}創造物品/{item name item price item number} Create item\`
$getServerVar[prefix]moveitem \`{數字} 移除物品/{item number} Remove item\`
$getServerVar[prefix]save \`{金錢} 儲存銀行/{money} save to bank\`
$getServerVar[prefix]take \`{金錢} 拿取金錢/{money} take money in your bank\`
$getServerVar[prefix]day \`每日獎勵/Daily Reward\`
$getServerVar[prefix]week \`每週獎勵/week Reward\`
$getServerVar[prefix]lb \`金錢排行榜/money Leaderboard\`
$getServerVar[prefix]blb \`銀行排行榜/bank Leaderboard\`
$getServerVar[prefix]fish \`釣魚/fishing\`
$getServerVar[prefix]pay \`{@使用者} {金錢} 給予金錢/{@member} {money} give money\`
$getServerVar[prefix]interest \`獲得利息/get interest\`
$getServerVar[prefix]eat \`吃飯/eat\`
$getServerVar[prefix]rob \`{@名字} 搶劫/{@user name} rob\`
$getServerVar[prefix]month \`每月獎勵/month Reward (Premium)\`
$getServerVar[prefix]bankrob \`{@名字} 搶劫銀行/{@user name} rob bank(Premium)\`
$getServerVar[prefix]bpre \`購買高級版/buy premium\`
$getServerVar[prefix]beg \`乞丐/begger (Premium)\`
$getServerVar[prefix]casino \`老虎機/Slot machine\`
$getServerVar[prefix]number \`幸運號碼/number\`
$addTimestamp]
$color[$random[0;999999]]

$footer[Page 3/$getVar[helppage;670194432657588234]]`})
bot.ExecutableCommand({
  name:"help4",
  code:`
$title[**娛樂 Fun**]
$description[
$getServerVar[prefix]gay \`同性戀/gay\`
$getServerVar[prefix]handsome \`帥哥/handsome\`
$getServerVar[prefix]luck \`運氣/luck\`
$getServerVar[prefix]beautiful \`美女/beautiful\`
$getServerVar[prefix]cute \`可愛/cute\`
$getServerVar[prefix]sexy \`性感/sexy\`
$getServerVar[prefix]mp \`變態/Metamorphosis\`
$getServerVar[prefix]ugly \`醜/ugly\`
$getServerVar[prefix]earth \`地球毀滅/Earth destruction\`
$getServerVar[prefix]smart \`智商/IQ\`
$getServerVar[prefix]rubbish  \`垃圾/rubbish\`
$addTimestamp]
$color[$random[0;999999]]

$footer[Page 4/$getVar[helppage;670194432657588234]]`})

bot.ExecutableCommand({
    name:"help5",
    code:`$title[**音樂 music**]
$description[\`$getServerVar[v5prefix]8d\` - (V5 premium) 8D音響, 單聲道手機勿用
\`$getServerVar[v5prefix]bass\` - (V5 premium) 重音加速, 訊號不好者勿用
\`$getServerVar[v5prefix]configure\` - 調整伺服器設置
\`$getServerVar[v5prefix]download\` - (V5 premium) 下載歌曲, 本人不負任何法律責任
\`$getServerVar[v5prefix]eval\` - [Developer] 運行 JS 代碼
\`$getServerVar[v5prefix]export\` - 用目前的隊列創建自製歌單
\`$getServerVar[v5prefix]forceexport\` - 強制用目前的隊列創建自製歌單
\`$getServerVar[v5prefix]getlist\` - 獲取指定歌單的訊息
\`$getServerVar[v5prefix]help\` - 獲得指令幫助
\`$getServerVar[v5prefix]info\` - 作者的話
\`$getServerVar[v5prefix]karaoke\` - (V5 premium) 去人聲, 不太乾淨
\`$getServerVar[v5prefix]list\` - 獲取總歌單
\`$getServerVar[v5prefix]lyrics\` - 從魔鏡歌詞網獲取歌詞
\`$getServerVar[v5prefix]nightcore\` - (V5 premium) nightcore\`, 訊號不好者勿用
\`$getServerVar[v5prefix]now-playing\` - 獲取目前播放
\`$getServerVar[v5prefix]pause\` - 暫停隊列
\`$getServerVar[v5prefix]play\` - 播放您最愛的歌曲
\`$getServerVar[v5prefix]playlist\` - 播放您最愛的自制歌單
\`$getServerVar[v5prefix]queue\` - 查詢目前隊列
\`$getServerVar[v5prefix]remove\` - 從隊列裡移除歌曲
\`$getServerVar[v5prefix]removelist\` - 移除指定歌單
\`$getServerVar[v5prefix]repeat\` - 單曲循環
\`$getServerVar[v5prefix]remuse\` - 繼續播放
\`$getServerVar[v5prefix]search\` - 搜尋歌曲並播放
\`$getServerVar[v5prefix]seek\` - 跳至指定時間
\`$getServerVar[v5prefix]skip\` - 跳過歌曲
\`$getServerVar[v5prefix]stop\` - 停止播放
\`$getServerVar[v5prefix]subboost\` - (V5 premium) 採樣率不同的重音加速
\`$getServerVar[v5prefix]volume\` - 調整音量]
$color[fow0w1]
$footer[Page 5/$getVar[helppage;670194432657588234]]`})

//help

bot.ExecutableCommand({
name:"help6",
code:`$title[only for my developer]
$description[你不是我主人，你也沒辦法用
\`up\` 設定help更新
\`version\`設置版本
\`srv\`查看群組
\`helppage\`]
$color[fow0w1]
$footer[Page 5/$getVar[helppage;670194432657588234]]`})
bot.Command({
name:"only878",
code:`<@670194432657588234>成功給<@$mentioned[1]>使用私人指令的權限
$setVar[878;y;$mentioned[1]]
$onlyIf[$authorID==670194432657588234;這個指令只有878能用喔]`})
bot.Command({
name:"helppage",
code:`$setVar[helppage;$message[];670194432657588234]
$onlyIf[$getVar[878;$authorID]==y;你沒有權限使用/you don't have permission to use]`})
bot.Command({
name: "srv",
code:`$title[以下為我所在的群/The following is my group]
$description[

$replaceText[$guildNames[$serverCount];,;

]]
$color[ff0000]
$dm[670194432657588234]
$onlyIf[$getVar[878;$authorID]==y;你沒有權限使用/you don't have permission to use]`})

bot.Command({
name:"up",
code:`$setVar[update;$message[];670194432657588234]
你設置我在help command的更新為
$message[]
$onlyIf[$getVar[878;$authorID]==y;你沒有權限使用/you don't have permission to use]`})

bot.Command({
    name:"version",
    code:`
$setVar[version;$message[];670194432657588234]
you set my version to $message[]
$onlyIf[$getVar[878;$authorID]==y;你沒有權限使用/you don't have permission to use]`})
bot.Command({
  name:"report",
  code:`
$title[錯誤回報]
$description[
**提出人: <@$authorID>
提出人名字和tag: \` $username[$authorID]#$discriminator[$authorID]\` 
提出人id:\` $authorID\` 
在 \` $serverName[$guildID]\`  使用
伺服器id: \` $guildID\` 
伺服器邀請連結: https://$getServerInvite[$guildID]
內容:$message[]**]
$footer[感謝您的回報，您的一個回報，能讓我變更好]
$color[$random[0;999999]]
$deletecommand[1ms]
$dm[670194432657588234]
$onlyIf[$message[]!=;不能為白]`})


bot.Command({
  name:"uptime",
  code:`
我已經連續上線 \`$replaceText[$replaceText[$replaceText[$replaceText[$uptime;d;天];h;小時];m;分鐘];s;秒] \`了！`})

bot.Command({
  name:"serverinfo",
  code:`
$thumbnail[$serverIcon]
$title[伺服器信息 Server info]
$description[
伺服器ID server ID:\`$guildID\`

伺服器名稱 Server name: 
\`$serverName[]\` 

擁有者 Owner: \`$username[$ownerID]#$discriminator[$ownerID]\` 

伺服器所在地 Server location : \`$region\` 

成員人數 Number of members:\`$membersCount[]\`

頻道數量 Number of channels: \` $channelCount\`

身份組數量 Number of identity groups: \`$roleCount\` 
$addTimestamp]
$color[cd1a8c]`})
bot.Command({
    name:"botinfo",
    code:`$title[878 bot info]
$description[
name#tag: \`($getServerVar[prefix])878 bot#8251\`

ID : \`698375522039758858\`

creation date : \`2020/3/17(實際上)\`

up time:\`$replaceText[$replaceText[$replaceText[$replaceText[$uptime;d;天];h;小時];m;分鐘];s;秒] \`

invite ink : {hyper:878 bot:https://discord.com/oauth2/authorize?client_id=698375522039758858&scope=bot&permissions=2147483647}

support server: {hyper:support server:https://discord.gg/S4jMCtK}

server: \`$serverCount servers\`

members: \`$allMembersCount members\`

ping: \`$ping\`ms

version: \`$getVar[version;670194432657588234]\`] $color[19aa08]`})

bot.Command({
  name:"checkwarns",
  code:`$title[**警告數Warns**]
$addTimestamp
$description[<@$authorID>有 \` $getUserVar[warn;$authorID]\`  次警告.

<@$authorID> has \` $getUserVar[warn;$authorID]\`  warnings.]
$color[0000ff]

$onlyIf[$message[]==;{execute:checkwarns}]`
})

bot.ExecutableCommand({
  name:"checkwarns",
  code:`$title[**警告數Warns**]
$addTimestamp
$description[<@$mentioned[1]>有 \` $getUserVar[warn;$mentioned[1]]\`  次警告.
$color[0000ff]
<@$mentioned[1]> has \` $getUserVar[warn;$mentioned[1]]\`  warnings.]

$onlyIf[$mentioned[1]!=;]`})

bot.Command({
  name:"av",
  code:`$description[**<@$authorID>的頭像**]
$image[$userAvatar[$authorID]?size=4096]
$onlyIf[$message[]==;{execute:av}]`})
  
bot.ExecutableCommand({
  name:"av",
  code:`$description[**<@$mentioned[1]>的頭像**]
$image[$userAvatar[$mentioned[1]]?size=4096]`})

bot.Command({
    name:"rank",
    code:`
$color[ff0000]
$image[http://fi1.falixnodes.net:26140/api/v1/rank/$replaceText[$username[$authorID]; ;_]/$discriminator[$authorID]/$getUserVar[level]/no/$sub[$getUserVar[time];$getUserVar[rep]]/$getUserVar[rep]]`})

bot.Command({
  name:"verrole",
  code:`$setServerVar[vr;$roleID[$message[]]] 成功設置驗證完給身份組
$onlyAdmin[你不是管理員]`})

bot.Command({
  name:"takeverrole",
  code:`$setServerVar[tvr;$roleID[$message[]]]
成功設置驗證完要拿走的身份組
$onlyAdmin[你不是管理員]`})

bot.Command({
  name:"captcha",
  code:`
$title[驗證碼]
$description[你的驗證碼為:\`$randomString[6]\`]
$footer[use: $getServerVar[prefix]verify $randomString[6]] 
$setUserVar[ca;$randomString[6]]
$onlyIf[$getServerVar[vr]!=0;請叫管理員設置要給予的身份組•|•$getServerVar[prefix]vr]
$onlyIf[$getServerVar[tvr]!=0;請叫管理員設置要拿走的身份組•|•$getServerVar[prefix]tvr]`})

bot.Command({
  name:"verify",
  code:`
$title[驗證]
$description[$username[$authorID]已驗證成功，已給 $username[$authorID]身份組]
$color[19ff07]
$setUserVar[ca;]
$giveRole[$authorID;$getServerVar[vr]]
$takeRole[$authorID;$getServerVar[tvr]]
$onlyIf[$message[]==$getUserVar[ca];{title:驗證失敗} {description:驗證碼錯誤} {color:19ff07}]
$onlyIf[$message[]!=;{title:驗證失敗} {description:驗證碼不為空白} {color:19ff07}]
$onlyIf[$getServerVar[vr]!=0;請叫管理員設置要給予的身份組•|•$getServerVar[prefix]vr]
$onlyIf[$getServerVar[tvr]!=0;請叫管理員設置要拿走的身份組•|•$getServerVar[prefix]tvr]`})

bot.Command({
  name:"wiki",
  code:`
$useChannel[$getServerVar[wic]]
$author[NEW WIKI!;$authorAvatar]
$description[
$message[]]
$footer[By: $username[$authorID]#$discriminator[$authorID];$userAvatar[698375522039758858]]
$onlyIf[$channelID[]==$getServerVar[swic];<@$authorID>請到<#$getServerVar[swic]>]
$onlyIf[$getServerVar[wic]!=0;{title:未設置維基頻道} {description:pls use $getServerVar[prefix]swic} {color:19ff07}]
$onlyIf[$getServerVar[swic]!=0;{title:未設置提交維基頻道} {description:pls use $getServerVar[prefix]sswic} {color:19ff07}]`})
bot.Command({
  name:"swic",
  code:`
成功設置維基頻道為: <#$channelID[]>
$setServerVar[wic;$channelID[]]`})
bot.Command({
  name:"sswic",
  code:`成功設置提交維基頻道為: <#$channelID[]>
$setServerVar[swic;$channelID[]]`})

bot.Command({
  name:"buy",
  code:`
$description[
物品名: $getServerVar[item$message[1]]
價格: $getServerVar[i$message[1]a]
創造者: $getServerVar[u$message[1]]
購買者: $username
在 $year 年 $month $day 日 $hour 點 $minute 分 $second 秒購買]$time[Etc/GMT-8]
$setServerVar[item$message[1];Not set]
$setServerVar[i$message[1]a;0]
$setServerVar[u$message[1];no name]
$setServerVar[id$message[1];no set]
$setVar[Money;$sub[$getVar[Money;$authorID];$getServerVar[i$message[1]a]];$authorID]
$setVar[Money;$sum[$getVar[Money;$getServerVar[id$message[1]]];$getServerVar[i$message[1]a]];$getServerVar[id$message[1]]]
$onlyIf[$getVar[money;$authorID]>$getServerVar[i$message[1]a];\`你的金錢不夠 You don't have enough money\`]`
})

bot.Command({
  name:"shop",
  code:`商店:
$title[$serverName[$guildID]'s Shop!]
$description[
輸入 \`$getServerVar[prefix]setitem {物品名稱} {物品金額} 1~10\`
enter \`$getServerVar[prefix]setitem {item name} {item money} 1~10\`
__________________
輸入 \`$getServerVar[prefix]buy 1~10\`來購買物品，被賣掉的會歸0
Enter \`$getServerVar[prefix]buy 1~10\` to buy items]
$addField[Item 1;**名稱 Name: \`$getServerVar[item1]\`
金錢 Money: \`$getServerVar[i1a]\`
創造者: \`$getServerVar[u1]\`**]
$addField[Item 2;**名稱 Name: \`$getServerVar[item2]\`
金錢 Money: \`$getServerVar[i2a]\`
創造者: \`$getServerVar[u2]\`**]
$addField[Item 3;**名稱 Name:\`$getServerVar[item3]\`
金錢 Money: \`$getServerVar[i3a]\`
創造者: \`$getServerVar[u3]\`**]
$addField[Item 4;**名稱 Name: \`$getServerVar[item4]\`
金錢 Money: \`$getServerVar[i4a]\`
創造者: \`$getServerVar[u4]\`**]
$addField[Item 5;**名稱 Name: \`$getServerVar[item5]\`
金錢 Money: \`$getServerVar[i5a]\`
創造者: \`$getServerVar[u5]\`**]
$addField[Item 6;**名稱 Name: \`$getServerVar[item6]\`
金錢 Money: \`$getServerVar[i6a]\`
創造者: \`$getServerVar[u6]\`**]
$addField[Item 7;**名稱 Name: \`$getServerVar[item7]\`
金錢 Money: \`$getServerVar[i7a]\`
創造者: \`$getServerVar[u7]\`**]
$addField[Item 8;**名稱 Name: \`$getServerVar[item8]\`
金錢 Money: \`$getServerVar[i8a]\`
創造者: \`$getServerVar[u8]\`**]
$addField[Item 9;**名稱 Name: \`$getServerVar[item9]\`
金錢 Money: \`$getServerVar[i9a]\`
創造者: \`$getServerVar[u9]\`**]
$addField[Item 10;**名稱 Name: \`$getServerVar[item10]\`
金錢 Momey: \`$getServerVar[i10a]\`
創造者: \`$getServerVar[u10]\`**]
$color[00FF00]
$cooldown[3s;\`請等等三秒 Please wait 3s\`]
`
})
bot.Command({
  name:"welcomemessage",
  code:`$setServerVar[wm;$message[]]
$onlyAdmin[你不是管理員]
$deletecommand[0.1s]`
})
bot.Command({
  name:"leavemessage",
  code:`$setServerVar[lm;$message[]] 
$onlyAdmin[你不是管理員] 
$deletecommand[0.1s]`})
bot.Command({
  name:"welcomechannel",
  code:`歡迎訊息的頻道為： <#$channelID[]> 
請使用$getServerVar[prefix]welcomemessage 設置歡迎訊息
使用$getServerVar[prefix]autorole設置自動身份組(一定要，不然不會顯示)
$setServerVar[wc;$channelID[]] 
$onlyAdmin[你不是管理員] 
$deletecommand[0.1s]`})

bot.Command({
  name:"leavechannel",
  code:`離開訊息的頻道為： <#$channelID[]> 
$setServerVar[lc;$channelID[]] 
$onlyAdmin[你不是管理員] 
$deletecommand[0.1s]`
})


bot.Command({
  name:"autorole",
  code:`
$message[]
$setServerVar[role;$roleID[$message[]]]`
})

bot.LeaveCommand({
name: "$getServerVar[lc]",
code: `
$useChannel[$getServerVar[lc]]
$author[Sad!We lost a member.;$userAvatar[$authorID]]
$description[$username[$authorID]#$discriminator[$authorID],$getServerVar[lm]
總人數: $membersCount[]]
$color[ff92of]
$addTimestamp`});
bot.onLeave()
bot.JoinedCommand({
name: "$getServerVar[wc]",
code: `
$useChannel[$getServerVar[wc]]
$author[Welcome!;$userAvatar[$authorID]]
$description[<@$authorID>,$getServerVar[wm]
總人數: $membersCount[]]
$color[ff92of]
$addTimestamp
$giveRole[$authorID;$getServerVar[role]]`});
bot.onJoined()
//level
bot.Command({
  name:"lvc",
  code:`<#$channelID[]>
$setServerVar[lvc;$channelID[]]`
})


bot.SpaceCommand({
  name:"time",
  code:`$setUserVar[rep;$sum[$getUserVar[rep];1]]
$onlyIf[$getServerVar[lvc]!=0;]`})
bot.SpaceCommand({
  name:"level",
  code:`
$setUserVar[level;$sum[$getUserVar[level];1]]
$setUserVar[time;$sum[$getUserVar[time];$random[24;98]]]
$onlyIf[$getUserVar[rep]==$getUserVar[time];]
$onlyIf[$getServerVar[lvc]!=0;]`})
bot.SpaceCommand({
  name:"levelup",
  code:`
$useChannel[$getServerVar[lvc]]
<@$authorID>,你現在為\`Lv.$sum[$getUserVar[level];1]\`
$onlyIf[$getUserVar[rep]==$getUserVar[time];]
$onlyIf[$getServerVar[lvc]!=0;]`})
//level

bot.Command({
  name:"work",
  code:`
$setVar[money;$sum[$getVar[money;$authorID];$random[50;101]];$authorID]
$description[
你做了一日的\`$randomText[老師;農夫;警察;消防員;司機;工匠;會計;服務員;調酒師;攝影師]\`,賺了\`$random[50;101]\`]
$cooldown[20m;還有{time}]`
})

bot.SpaceCommand({
  name:"pin",
  code:`
$title[My prefix]
$description[
我在這群一般指令的前綴為 \`$getServerVar[prefix]\`

我在這群MUSIC V5的前綴為\`$getServerVar[v5prefix]\`

我的MUSIC V3.5的前綴為\`!!!\`***(有時會不在線)***]
$color[19ff07]
$onlyIf[$mentioned[1]==698375522039758858;]`
})


bot.ExecutableCommand({
name: "bal",
code: `
<@$mentioned[1]> 有 $getUserVar[money;$mentioned[1]]`
})

bot.Command({
name: "bal",
code: `
$description[<@$authorID> 有 $getUserVar[money]]
$onlyIf[$message[]==;{execute:bal}]
`})

bot.Command({
  name:"prefix",
  code:`
<@$authorID>,把我的前綴設置為\`$message[]\`
$setServerVar[prefix;$message[]]
$setNickname[698375522039758858;($message[])$replaceText[$nickname[698375522039758858];($getServerVar[prefix]);]]
$onlyIf[$message[]!=;不能為空白]
$onlyAdmin[你這個菜雞，我的前綴不是你能設定的]`
})

bot.ExecutableCommand({
name: "nummber",
code: `
<@$authorID>,我說的是\`$getUserVar[number]\`
你輸入\`$message[]\`
所以要扣25元
$setUserVar[money;$sub[$getUserVar[money];25];$authorID]
`
})

bot.Command({
name: "number",
code: `
<@$authorID>,你答對了！
加50元
$setUserVar[money;$sum[50;$getUserVar[money]];$authorID]
$onlyIf[$message[]==$random[1;10];{execute:nummber}]
$setUserVar[number;$random[1;10]]
$cooldown[1m;還有{time}]
$onlyIf[$message[]<=10;不能超過十]
$onlyIf[$message[]>=1;不能低於1]`})
bot.Command({
name:"botinvite",
code:`$title[bot invite ink]
$description[
bot name: $username[$mentioned[1]]
{hyper:$username[$mentioned[1]]'s invite link:https://discordapp.com/oauth2/authorize?client_id=$mentioned[1]&scope=bot&permissions=2146958847}]
$color[19ff07]
$onlyIf[$message[1]!=;沒有標注機器人]
$onlyIf[$isBot[$mentioned[1]]==true;he isn't a bot.]`})
bot.Command({
name:"ping",
  code: `這個機器人的延遲為 \`$ping\` ms`}) 

bot.Command({
  name: "say",
  code: `$deletecommand[1ms]
$replaceText[$replaceText[$message[];@everyone;@ everyone];@here; @ here]`})


bot.Command({
  name: "invite",
  code: `
$title[可以邀請878bot去你的伺服器]
$color[$random[0;999999]]
$description[
878 bot群
{hyper:878 bot群:https://discord.gg/S4jMCtK}
**878bot**
{hyper:878 bot:https://discord.com/oauth2/authorize?client_id=698375522039758858&scope=bot&permissions=2147483647}
**加入discord.js機器人交流中心**
{hyper:here!!!:https://discord.gg/wQSZ8xU}] `})
 
bot.Command({
 name: "purge",
aliases: ["clear"],
 code: `
$onlyAdmin[你不是管理員]
$clear[$message[]]
$description[你刪除了\`$message[]\` 個訊息]
$onlyIf[$message[]<=100;最大值為100]
$color[99fuck]`})
//snipe
bot.MessageDeleteCommand({
name: "$channelID[]",
code: `$setChannelVar[snipe;$message[]]
$setChannelVar[user;$authorID]`})
bot.onMessageDelete()
bot.Command({
 name: "snipe",
 code: `
$author[$username[$getChannelVar[user]]#$discriminator[$getChannelVar[user]];$userAvatar[$getChannelVar[user]]]
$description[$getChannelVar[snipe]]
$color[19ff07]
$addTimestamp`})
//help4內容
bot.ExecutableCommand({
name: "handsome",
code: `$title[**帥哥探測儀** handsome  detector]
$description[<@$mentioned[1]> $random[0;100]%  是帥哥
<@$mentioned[1]> $random[0;100]% is handsome ]
$color[$random[0;999999]]
`})

bot.Command({
name: "handsome",
code: `
$title[**帥哥探測器**handsome detector]$description[<@$authorID> $random[0;100]% 是帥哥
<@$authorID> $random[0;100]% is handsome ]
$color[$random[0;999999]]
$onlyIf[$message[]==;{execute:handsome}]`})
                                           
bot.ExecutableCommand({
name: "gay",
code: `$title[**同性戀探測儀**  gay detector]
$description[<@$mentioned[1]> $random[0;100]%  是同性戀
<@$mentioned[1]> $random[0;100]% is gay]
$color[$random[0;999999]]
`})

bot.Command({
name: "gay",
code: `
$title[**同性戀探測器**  detector]$description[<@$authorID> $random[0;100]% 是同性戀
<@$authorID> $random[0;100]% is gay ]
$color[$random[0;999999]]

$onlyIf[$message[]==;{execute:gay}]`})
                                           
bot.ExecutableCommand({
name: "cute",
code: `$title[**可愛探測儀** cute detector]
$description[<@$mentioned[1]> $random[0;100]% 很可愛
<@$mentioned[1]> $random[0;100]% is very cute ]
$color[$random[0;999999]]
`})

bot.Command({
name: "cute",
code: `$title[**可愛探測器** cute detector]
$description[<@$authorID> $random[0;100]% 很可愛
<@$authorID> $random[0;100]% is very cute]
$color[$random[0;999999]]

$onlyIf[$message[]==;{execute:cute}]`})
                                           
bot.ExecutableCommand({
name: "luck",
code: `$title[**幸運探測儀** luck detector]
$description[<@$mentioned[1]>有 $random[0;100]%  是幸運的
<@$mentioned[1]> have $random[0;100]% is luckily ]
$color[$random[0;999999]]`})

bot.Command({
name: "luck",
code: `
$title[**幸運探測器** luck detector]
$description[<@$authorID>有 $random[0;100]% 是幸運
<@$authorID> have  $random[0;100]% is luckily]
$color[$random[0;999999]]

$onlyIf[$message[]==;{execute:luck}]`})
                                           
bot.ExecutableCommand({
name: "beautiful",
code: `$title[**美麗探測儀** beautiful detector]
$description[<@$mentioned[1]>有 $random[0;100]%  是美女
<@$mentioned[1]> have  $random[0;100]% is beautifulness]
$color[$random[0;999999]]
`})

bot.Command({
name: "beautiful",
code: `$title[**美麗探測器** beautiful detector]
$description[<@$authorID>有 $random[0;100]% 是美女
<@$authorID> have $random[0;100]%  is beautifulness]
$color[$random[0;999999]]

$onlyIf[$message[]==;{execute:beautiful}]`})
                                           
bot.ExecutableCommand({
name: "smart",
code: `$title[**智商探測儀** IQ detector]
$description[<@$mentioned[1]>的智商是  $random[0;100] 
<@$mentioned[1]>'s IQ is  $random[0;100]  ]
$color[$random[0;999999]]
`})

bot.Command({
name: "smart",
code: `$title[**智商探測器** IQ detector]
$description[<@$authorID>的智商是 $random[0;100]
<@$authorID>'s IQ is $random[0;100] ]
$color[$random[0;999999]]

$onlyIf[$message[]==;{execute:smart}]`})
                                           
bot.ExecutableCommand({
name: "ugly",
code: `$title[**醜陋探測儀** ugly detector]
$description[<@$mentioned[1]>有  $random[0;100]%  很醜
<@$mentioned[1]> have  $random[0;100]% is ugly]
$color[$random[0;999999]]
`})

bot.Command({
name: "ugly",
code: `$title[**醜陋探測器** ugly detector]$description[<@$authorID> 有 $random[0;100]% 很醜
<@$authorID> have $random[0;100]% is ugly ]
$color[$random[0;999999]]

$onlyIf[$message[]==;{execute:ugly}]`})
                                           
bot.ExecutableCommand({
name: "mp",
code: `$title[**變態探測儀** MP detector]
$description[<@$mentioned[1]>有  $random[0;100]%  是變態
<@$mentioned[1]> have  $random[0;100]% is MP ]
$color[$random[0;999999]]
`})

bot.Command({
name: "mp",
code: `$title[**變態探測器** MP detector]$description[<@$authorID> 有 $random[0;100]% 是變態
<@$authorID>have  $random[0;100]% is MP ]
$color[$random[0;999999]]

$onlyIf[$message[]==;{execute:mp}]`})
                                           
bot.ExecutableCommand({
name: "sexy",
code: `$title[**性感探測儀** sexy detector]
$description[<@$mentioned[1]>有 $random[0;100]%  很性感
<@$mentioned[1]>have  $random[0;100]% is sexy]
$color[$random[0;999999]]
`})

bot.Command({
name: "sexy",
code: `$title[**性感探測器** sexy detector]$description[<@$authorID> 有 $random[0;100]% 很性感
<@$authorID> have  $random[0;100]% is sexy]
$color[$random[0;999999]]

$onlyIf[$message[]==;{execute:sexy}]`})

bot.Command({
  name:"earth",
  code:`
$title[**地球探測器** Earth Probe]
$description[地球在 $random[10;100]年後 $random[0;101]% 會毀滅!
After $random[10;100] years, earth $random[0;101]% will be destroyed!]
$color[$random[0;1777776]]
$cooldown[3s;\`請等等三秒 Please wait 3s\`]`})
//help4

bot.Status({
        0: {
            description: "ping me to get my prefix", 
            type: "PLAYING" 
        }, 
        1: {
            description: "srv: $serverCount, members:$allMembersCount", 
            type: "WATCHING" 
        },
     2: {
            description: "thanks NCT skyouo", 
            type: "PLAYING" 
        },
    3: {
            description: "i have music function",
            type: "PLAYING"
        }
    }, 20000)
 
