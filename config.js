const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349055658460";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_17_25_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDM1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDY0LFxuICAgICAgICA0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNixcbiAgICAgICAgMTU5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNixcbiAgICAgICAgMTMzLFxuICAgICAgICA5OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDksXG4gICAgICAgIDExLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTExLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDQsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDksXG4gICAgICAgIDgzLFxuICAgICAgICA4OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDc2LFxuICAgICAgICAxODksXG4gICAgICAgIDI2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxLFxuICAgICAgICAxMSxcbiAgICAgICAgOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDc0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgODUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDc1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODksXG4gICAgICAgIDg0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODQsXG4gICAgICAgIDYwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPMFFwU245a0RKU3cxNHRxa3FlOHp6VnZBMHNqWmZqU2pLZkFkV2ZLQ2kwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjQ1ZGSUN2VFNtMkUyZnlwQzExOTZnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjA0ZDcxZjk2LWU0ZTYtNGZkMi05ODJiLTVhMDRhNWI5MTIxZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAxOTAsXG4gICAgICAxMzksXG4gICAgICA0MSxcbiAgICAgIDE5MyxcbiAgICAgIDE5MixcbiAgICAgIDEzLFxuICAgICAgOTIsXG4gICAgICA5NCxcbiAgICAgIDIzNSxcbiAgICAgIDIwMCxcbiAgICAgIDIxNSxcbiAgICAgIDExNixcbiAgICAgIDE4NixcbiAgICAgIDE1NCxcbiAgICAgIDMsXG4gICAgICAxMDMsXG4gICAgICA4MCxcbiAgICAgIDI1MSxcbiAgICAgIDIzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICAxNzEsXG4gICAgICAxMzIsXG4gICAgICA1MixcbiAgICAgIDYwLFxuICAgICAgNjUsXG4gICAgICAxMzgsXG4gICAgICAxMDMsXG4gICAgICAyMDcsXG4gICAgICAyNDgsXG4gICAgICAxMDUsXG4gICAgICA2NSxcbiAgICAgIDE4NCxcbiAgICAgIDE4NCxcbiAgICAgIDk2LFxuICAgICAgMjQ2LFxuICAgICAgMTAzLFxuICAgICAgMTQ4LFxuICAgICAgMTYwLFxuICAgICAgMTQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJRWDFSN0hBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDU1NjU4NDYwOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk2NTI5ODc2NTMzNDI0OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUERTNTdrREVKcWt6YllHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmQTVkbEVOT240dHVZcWM2TEw1ODZEQVROZjNnTzkwamFuTGFsMkxNYWdJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlp6aEtNRFU2a1M1Y01UWVdRdGo3eU4yeHV0bGJQNzB1MXJIaGdpSmtyYm9NUjZHUUdGaVpiMGdqN051Rk5TK0xpRS9yZ1FYazcxZzg0VzdGMGFOTkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJ6SHc0ZUtYdVMwSjhqdk9JakpVem9aSmo5RGxIRmc4UjVjcDlPVC9iaVExdnJNUklpdllRVEtLUXp1c2s3eC9UNlgzU2tZYU1PeVZsc2RiRWdMdER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTU2NTg0NjA6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTEyNTE1MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
