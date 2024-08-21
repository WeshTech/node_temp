const names = require('./module')
const sayhi = require('./utils')

console.log(names)

sayhi('susan')
sayhi(names.john);
sayhi(names.peter);
sayhi(names.hacker)

