const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="joispdx@gmail.com"
global.location="Africa,Lagos."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/2349139681581";
global.website=process.env.GURL || "https://whatsapp.com/2349139681581" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©POWERED BY MILLIAN" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348103061692";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349139681581";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348103061692,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,234xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_05_10_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyOCxcbiAgICAgICAgMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDcxLFxuICAgICAgICA5MyxcbiAgICAgICAgOCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxODksXG4gICAgICAgIDYyLFxuICAgICAgICA3LFxuICAgICAgICAxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQxLFxuICAgICAgICA2NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICA1NixcbiAgICAgICAgMjI5LFxuICAgICAgICA0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAzMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDc1LFxuICAgICAgICA0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQxLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzksXG4gICAgICAgIDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMixcbiAgICAgICAgMTk5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDM5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDU0LFxuICAgICAgICA4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDcxLFxuICAgICAgICA2NixcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjF3bUg3dVI5OUR4K2xna2p6NDI1Q09YR2lHVW4yUGhzZFYrVmFaSVJZTXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzOTY4MTU4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E3QkEyMjFGRDI4NEZCQTY4QUVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5OTgzOTAyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzOTY4MTU4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FEOTUzQjRGN0Q4M0Q3RTM0ODdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5OTgzOTA0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzOTY4MTU4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E0ODA3ODNFN0Y0NDRDNThFNzZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI5OTgzOTA2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlAwd0UyRGN4U0RDT3pmQlFKbFJjaXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjQ1Y2M1ZDktNTQ4Yy00MmYwLWJiNDgtNWJlNjc3YTAzOGNmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgMTg5LFxuICAgICAgNDUsXG4gICAgICAxOTgsXG4gICAgICAyMDEsXG4gICAgICAxMixcbiAgICAgIDE3MyxcbiAgICAgIDEzMSxcbiAgICAgIDE1NCxcbiAgICAgIDE2OCxcbiAgICAgIDIyOCxcbiAgICAgIDk2LFxuICAgICAgMTg1LFxuICAgICAgNTYsXG4gICAgICAyMDgsXG4gICAgICAyMjUsXG4gICAgICAyNDMsXG4gICAgICAyMzMsXG4gICAgICAyMzIsXG4gICAgICA2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICAxODUsXG4gICAgICAyMzQsXG4gICAgICAxOSxcbiAgICAgIDEzMSxcbiAgICAgIDE0OCxcbiAgICAgIDk2LFxuICAgICAgMjA0LFxuICAgICAgMjQxLFxuICAgICAgNzUsXG4gICAgICAxNzcsXG4gICAgICA0NCxcbiAgICAgIDEzOSxcbiAgICAgIDE5OCxcbiAgICAgIDg1LFxuICAgICAgMjUyLFxuICAgICAgMTU2LFxuICAgICAgNzIsXG4gICAgICAxMjIsXG4gICAgICAyMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNzVWSDk3R1dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzk2ODE1ODE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1JTExJQU5cIixcbiAgICBcImxpZFwiOiBcIjU1Mzg0MTU2OTg3NTIwOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2lWcWZvRUVKbnI5YmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNYWtwWUdnYXFRV1czUG1rUjdvbjkyeVBMOS9IM1BoaWg5SGVmYlpoNkRJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhxbGtFMk9BbHNtVlFURng3Mi9VNzEwYSthdnRQL1pzR2d2bXF4eVJTODQwQnA3TTB3azl4dmJ6QTJUa1NBSHpWVDlqZENQbnNXYXd6a2g4WWo1Vmd3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIko1SVU0YTkwVjBkeE5CWWFJeGNYODRLbkxkZUkzOWYzTnJnWFNKbVREamdyejIxR1gzbmhvUDY4WkpxUWFvOEQyd2grdkFuajlIekFGWGIvYzQyR0RRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzk2ODE1ODE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTk4MzkwMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNrc1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ2tzLmpzb24iOiAie1wia2V5RGF0YVwiOlwieUQxZFZUZVFhSmNUK2pzSVRuWXFWbENEMnNJWHM4aTlpU1FPOHdRalVtMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzMwMjY4ODQwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk5ODM5MDE1NjBcIn0iCn0="

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ":",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 MillTechInfo ® 』```", //*『mill • Tech』*\n wa.me/2348103061692"),
 
  author : process.env.PACK_AUTHER|| "Millian",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "MILLTECH",
  ownername:process.env.OWNER_NAME|| "Millian",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
