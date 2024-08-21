const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./folder/first.txt', 'utf8');
const second= readFileSync('./folder/subfolder/text.txt', 'utf8');

writeFileSync('./folder/subfolder/result.txt',
     `here is the string: ${first} + ${second}`,
     {flag: 'a'}
    );

