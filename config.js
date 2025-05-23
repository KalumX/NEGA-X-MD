const fs = require('fs');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') { return text === fault ? true : false; }

module.exports = {
  SESSION_ID: process.env.SESSION_ID === undefined ? 'Hshsh' : process.env.SESSION_ID,
  GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'KalumX' : process.env.GITHUB_USER_NAME,
  GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '5Cz3ZAwNWN5jWWUDtMVEUgt8U8nJ5M3ThB8w' : process.env.GITHUB_AUTH_TOKEN
};