var log4js = require("log4js");
// log4js.configure({
//     appenders: { 
//         cheese: { type: "file", filename: "logs/cheese.log" } 
//     },
//     categories: { 
//         default: { appenders: ["cheese"], level: "error" }
//     }
// });
// log4js.configure({
//     appenders: {
//         out: { type: 'stdout' },
//         app: { type: 'file', filename: 'logs/application.log' },
//         cheese: { type: "file", filename: "logs/cheese.log" } 
//     },
//     categories: {
//         default: { appenders: ['out', 'app', 'cheese'], level: 'debug' }
//     }
// });

log4js.configure('./config/log4js.conf.json');

var logger = log4js.getLogger();

logger.level = "TRACE";

module.exports = logger;