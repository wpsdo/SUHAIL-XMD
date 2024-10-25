const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="millian2992@gmail.com"
global.location="Africa,Lagos."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/2348103061692";
global.website=process.env.GURL || "https://whatsapp.com/2348103061692" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© MillTech" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348103061692";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null,234xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_47_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDc4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTExLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0LFxuICAgICAgICA5MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ2LFxuICAgICAgICA0MixcbiAgICAgICAgOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxLFxuICAgICAgICA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxODksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDQzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTkyLFxuICAgICAgICA0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQ0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTEzLFxuICAgICAgICA1NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAxLFxuICAgICAgICA4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMixcbiAgICAgICAgMTMwLFxuICAgICAgICA5NyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3LFxuICAgICAgICA5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQxLFxuICAgICAgICA2MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTg1LFxuICAgICAgICA2NixcbiAgICAgICAgMTY0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MCxcbiAgICAgICAgNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA3LFxuICAgICAgICA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4NSxcbiAgICAgICAgNixcbiAgICAgICAgMTE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUWg0b1dCUlBsTFFQblFhdWJFMDQ2Rk85S1JnZE42UHQzekhuYlNZMGEzZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN3Z5d0Mya3FTNDZWWXFCblVpSFBWd1wiLFxuICBcInBob25lSWRcIjogXCI4MTVlZjM5Ni0yM2U3LTQ3YTgtYmJiNS1jMTJjODEyYWI0ZGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDgsXG4gICAgICA2MCxcbiAgICAgIDEzNCxcbiAgICAgIDE0NCxcbiAgICAgIDIwNyxcbiAgICAgIDE4MixcbiAgICAgIDc1LFxuICAgICAgMTM1LFxuICAgICAgMTYyLFxuICAgICAgODMsXG4gICAgICAxMTcsXG4gICAgICAxNzEsXG4gICAgICA4MyxcbiAgICAgIDAsXG4gICAgICAxNTYsXG4gICAgICAxMyxcbiAgICAgIDE0MCxcbiAgICAgIDIzMyxcbiAgICAgIDIxNixcbiAgICAgIDIxOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MCxcbiAgICAgIDksXG4gICAgICAxNjcsXG4gICAgICAxOTAsXG4gICAgICAyMzcsXG4gICAgICAxMDAsXG4gICAgICAzOSxcbiAgICAgIDAsXG4gICAgICAxMDAsXG4gICAgICAyMTgsXG4gICAgICAxMTAsXG4gICAgICAxMzUsXG4gICAgICAyMSxcbiAgICAgIDE5LFxuICAgICAgMTUsXG4gICAgICAxNSxcbiAgICAgIDE0OSxcbiAgICAgIDIyMCxcbiAgICAgIDEyNixcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWNEhIRkJYUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwMzA2MTY5Mjo5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAwMTE5ODQwNDMyMTczOjkwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kyY3lzY0JFSWI2NWJnR0dCQWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSzVRTUtEUy9pNXBmbjBXdjBLemhvY3RXSk9VdURtYlNuOXh5Nkh5OU1saz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI3Ymk4dmJSeTVJY0pmT3gyMFJwYWdWbzRYYmxxUCtiWmVMeTB6K0V6cjFvSEsvejB6WnY0MEdMYmdTOEEvd3hkbUtyRkJtcCttckxaeThiQkZNNE9EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKTlVQeSt2bHF2bExLY2srVFRVTGM1S2VCbG9nWWExVytFM2lwL2s4dGhSb2xwdWNJckdLalhkK3M5cWVDeWRhVStBaDZIeHZGcG50bVFBcTd2RHBqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTAzMDYxNjkyOjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NzIzNjU3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFFMEFBUDByXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUUwQUFQMHIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmaGJydWpJMllieUNYVFB3RlJZTkdxcno4QS9sclQ2S0VMZngyd2VTUEtZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQxODU0OTI2MSxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyODA1NzU0MjQ0M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 MillTechInfo ® 』```", //*『mill • Tech』*\n wa.me/2348103061692"),
 
  author : process.env.PACK_AUTHER|| "Millian",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Mill-XMD",
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
