const process = require("child_process");

(function () {
    process.exec("lerna changed --json",(error,stdout,stderr) => {
        if(!error) {
            const UPGRADE_PACKAGES = JSON.parse(stdout);
            for (let index = 0; index < UPGRADE_PACKAGES.length; index++) {
                process.exec(`lerna run test --scope=${UPGRADE_PACKAGES[index]['name']}`,(error,stdout,stderr) => {
                    if(!error) {
                        console.log(stdout);
                        console.log(`${UPGRADE_PACKAGES[index]['name']}`);
                    } else {
                        console.error(error);
                    }
                })
            }
        } else {
            console.error(error);
        }
    })
})()