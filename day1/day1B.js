const fs = require('fs')
const readline = require('readline')

let lastvalue = undefined
let times = 0

const rl = readline.createInterface({
    input: fs.createReadStream('day1/input.txt'),
    crlfDelay:Infinity
})

rl.on('line', (line) => {
    value = parseInt(line) + parseInt(line+1) + parseInt(line+2)

    if (lastvalue != undefined && value > lastvalue){
        times++
    }

    lastvalue = value
})

rl.on('close', () => {
    console.log(times)
})