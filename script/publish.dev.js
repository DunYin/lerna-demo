console.log("test");
const config = require('../config/dev')
console.log(config);

const process = require("child_process");

(function () {
    process.exec(`lerna publish ${config.mode} --preid ${config.pried}`,(error,stdout,stderr) => {
        if(!error) {
            
        } else {
            console.error(error);
        }
    })
})()