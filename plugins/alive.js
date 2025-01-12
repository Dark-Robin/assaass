const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(robin, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
await robin.sendMessage(from,{sticker: { url : "https://github.com/Dark-Robin/Bot-Helper/raw/refs/heads/main/autosticker/alive.webp"},package: 'S_I_H_I_L_E_L'},{ quoted: mek })
await robin.sendPresenceUpdate('recording', from);
await robin.sendMessage(from, { audio: { url: "https://github.com/Dark-Robin/Bot-Helper/raw/refs/heads/main/autovoice/Hiruu%20s.mp3" }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
return await robin.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})

