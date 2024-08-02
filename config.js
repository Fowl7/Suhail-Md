const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_08_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc4LFxuICAgICAgICA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk5LFxuICAgICAgICA4MixcbiAgICAgICAgMTIxLFxuICAgICAgICA2NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDUyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDg2LFxuICAgICAgICA2NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MixcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NixcbiAgICAgICAgOCxcbiAgICAgICAgODQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDg1LFxuICAgICAgICA1NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDk1LFxuICAgICAgICA4NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTcyLFxuICAgICAgICA4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjZUYXdDM2kyQzRNdk1xMjZ6SHpndTZQSmRYYXR3UXc5cnBJaWFaTGxPMFE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInk3Y1QtbkZGUVl1UmxRNldGSV9Pc0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjVhMTBkZDMtYmM3OS00ZjJiLTkyZTYtZDk0M2Y4MGI0MWI3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgMTkyLFxuICAgICAgMjExLFxuICAgICAgMjI1LFxuICAgICAgMTM3LFxuICAgICAgMTQ3LFxuICAgICAgNzQsXG4gICAgICA2MCxcbiAgICAgIDEzNixcbiAgICAgIDc4LFxuICAgICAgMTA4LFxuICAgICAgMTE5LFxuICAgICAgMTIxLFxuICAgICAgMTYyLFxuICAgICAgMTA5LFxuICAgICAgNDksXG4gICAgICAxMTYsXG4gICAgICA2NCxcbiAgICAgIDExNyxcbiAgICAgIDE0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDU1LFxuICAgICAgMTc5LFxuICAgICAgNDQsXG4gICAgICAxNTcsXG4gICAgICAzNCxcbiAgICAgIDIzMyxcbiAgICAgIDE0NixcbiAgICAgIDE3OSxcbiAgICAgIDc2LFxuICAgICAgMjQ4LFxuICAgICAgMjIwLFxuICAgICAgMTIwLFxuICAgICAgMTIzLFxuICAgICAgMjM4LFxuICAgICAgMjUsXG4gICAgICAxODAsXG4gICAgICAxNjUsXG4gICAgICAxNDYsXG4gICAgICAxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFSlJTN0g5S1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyODMyODMyODoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTI2MDQwNDcyMzc3ODoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05lZGpPNEZFSzZZczdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiU2N1aUlFME9BSUkzaVdWMlFwMDlaTDJibzkwT1ZjcFZWSEZHaGhDbjhoRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwczB1NHV5bTFKWWNuNTVPZkorRTl2elp1T1Q4TlZVVTBOZnYxSDhUd1ZuTmxEbGZYMW1NU0ZEMU15WWp3QmNHQk13R3ZiNlZaWGhwSWVPZzdTZlVEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKaFQrTjBuMENyRnZ4RDgzVDA5ZTYvTmFCT0hDRjlBY3dxdEVyOHVWMWtkdHBQZ0hMcHdxMlVpQWtQZVVVbW5kNzVhQ3djVkgvTFFTN1I4MkltTFlnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTI4MzI4MzI4OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjYwMDQ5OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
