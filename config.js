const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "3QMhwLLK#MgFouTDMpvfLI0txSLYWCl21ZP7j8nQD1aZdEA9txEk",
  MONGODB:
    process.env.MONGODB ||
    "mongodb://mongo:QfpiXGuAfauZGAIcOVcclWHAyvoqZPFX@junction.proxy.rlwy.net:32111",
  OWNER_NUM: process.env.OWNER_NUM || "94704101989",
};
