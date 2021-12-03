const fs = require('fs')
const readline = require('readline')

let lastvalue = undefined
let times = 0

const rl = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    crlfDelay:Infinity
})

rl.on('line',(line) => {
    value = parseInt(line)

    if (lastvalue != undefined && value > lastvalue){
        times++
    }

    lastvalue = value
});

rl.on('close', () => {
    console.log(times)
})