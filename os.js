const os = require('os')

//info about curerent user

const user = os.userInfo();
console.log(user);

//system uptime in seconds

const time = os.uptime();
console.log(`The system has been up for ${time / 3600} hours`)