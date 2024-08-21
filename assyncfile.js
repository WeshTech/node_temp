const {readFile, writeFile} = require('fs');

readFile('./folder/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./folder/subfolder/text.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./folder/subfolder/result2.txt',
            `The result of combining the data is: ${first}, ${second}`,
            {flag: 'a'}, 
            (err, result) => {
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
            }
        )
    })
    
})