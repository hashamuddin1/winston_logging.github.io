//winston ko install krne ki need hoti hay
const winston = require('winston');

// module.exports.logger = winston.createLogger({
//     transports: [
//         //ye file create krdega filelog-info.log k name ki
//         new winston.transports.File({
//             level: 'info',
//             filename: 'filelog-info.log',
//             json: true,
//             //ye time stamp waghera batayega
//             format: winston.format.combine(winston.format.timestamp(), winston.format.json())
//         }),
//         //ye file create krdega filelog-error.log k name ki
//         new winston.transports.File({
//             level: 'error',
//             filename: 'filelog-error.log',
//             json: true,
//             maxFiles: '1m',
//             //ye time stamp waghera batayega
//             format: winston.format.combine(winston.format.timestamp(), winston.format.json())
//         })

//     ]

// });


//daily rotate the file

// var winston = require('winston');
// require('winston-daily-rotate-file');
// var transport = new(winston.transports.DailyRotateFile)({
//     filename: 'hasham.log',
//     datePattern: 'yyyy-MM-dd.',
//     prepend: true,
//     level: 'info'
// });
// var logger = new(winston.createLogger)({
//     transports: [
//         transport
//     ]
// });
// logger.info('Hey Hasham');


//Min rotate the file
//hour k liye datePattern: '.yyyy-MM-ddTHH', LAGA DO
// var winston = require('winston');
require('winston-daily-rotate-file');
var path = require('path');

var transports = [];

transports.push(new winston.transports.DailyRotateFile({
    name: 'file',
    datePattern: '.yyyy-MM-ddTmm',
    filename: path.join("some_path", "log_file_name.log")
}));

var logger = new winston.createLogger({ transports: transports });

// ... and logging
logger.info("some info log azhar...", { extraData: 'abc' });