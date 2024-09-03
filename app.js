const {readFile, writeFile} = require('fs');

// callback - run when a method is done
readFile('./content/first.txt','utf8', (err, result)=> {
    if(err) {
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8',(err, result) => {
        if(err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `here is the result: ${first}, ${second}`,
            (err, result) => {
                if(err) {
                    console.log(err)
                    return
                }

            console.log(result)
            })
    })
})
