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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_28_08_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDYxLFxuICAgICAgICAyMSxcbiAgICAgICAgMixcbiAgICAgICAgODUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg5LFxuICAgICAgICA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzLFxuICAgICAgICA0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDcyLFxuICAgICAgICA2NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE4LFxuICAgICAgICAyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTcyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNixcbiAgICAgICAgOTQsXG4gICAgICAgIDg0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDYzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWWFvM2wrNGhRczQ2ZWd3bVY5YXgzK0Y2TmdYM041eWhGZjlVR21QNXZnbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNXdVWUJQdnpUTW1HLVZaalFtMzB2Z1wiLFxuICBcInBob25lSWRcIjogXCJjNjMxZTYwZS00YzllLTQxNDQtYmVlNS0xNmM5Y2M2NmZiZTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgxLFxuICAgICAgMzAsXG4gICAgICAxODcsXG4gICAgICAxOTcsXG4gICAgICAxNjksXG4gICAgICA0OSxcbiAgICAgIDIyMyxcbiAgICAgIDIzMyxcbiAgICAgIDksXG4gICAgICAxNDcsXG4gICAgICA1LFxuICAgICAgMjQsXG4gICAgICAyMzIsXG4gICAgICAyOCxcbiAgICAgIDE4NCxcbiAgICAgIDE4NyxcbiAgICAgIDIyNixcbiAgICAgIDE3OCxcbiAgICAgIDE1MixcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAxNTIsXG4gICAgICAyMTEsXG4gICAgICAxNzksXG4gICAgICAxNTYsXG4gICAgICAzOSxcbiAgICAgIDUzLFxuICAgICAgNjAsXG4gICAgICAxMyxcbiAgICAgIDE3NixcbiAgICAgIDIzOSxcbiAgICAgIDUzLFxuICAgICAgMjQ0LFxuICAgICAgMTE1LFxuICAgICAgMjIyLFxuICAgICAgMjMsXG4gICAgICAzMixcbiAgICAgIDI0NixcbiAgICAgIDI1NSxcbiAgICAgIDE1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlAxRkRZQ0Q4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTI4MzI4MzI4OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MjYwNDA0NzIzNzc4OjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmlkak80RkVKK1h4TFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTY3VpSUUwT0FJSTNpV1YyUXAwOVpMMmJvOTBPVmNwVlZIRkdoaENuOGhFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBhVjZxaUVEbEUweTJ1ZjZlMEFQQzg0N1RIMmJHdmEvK21tbGY5YXlkaHQ0U2JNcjl6OTlEZDRlL0hBUVUyNEZPSzJSckN3VU5FWGN4Yk9mY2U0ZENnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9Gb0p0eDlHUWk1T2s4eXJWUEJ4dzAvVm02WjBYSjRIRVdibHFLcUhia3MrUXNJbGhwR09NOGphR2MwYzNZczArU2JDRFNSNjJBNzB0cGZpdUxYdEJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjgzMjgzMjg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyODc4ODgyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTzcvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPNy8uanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
