const fs = require('fs')
const readline = require('readline')

let horizontal = 0
let depth = 0
let aim = 0

const rl = readline.createInterface({
    input: fs.createReadStream('day2/inputday2.txt'),
    crlfDelay:Infinity
})

rl.on('line',(line) => {
    if(line[0] == "f"){
        horizontal += parseInt(line[8])
        depth += aim*parseInt(line[8])
    }
    if(line[0] == "d"){
        aim += parseInt(line[5])
    }
    if(line[0] == "u"){
        aim -= parseInt(line[3])
    }
    

})

rl.on('close', () => {
    console.log("The horizontal position is "+horizontal+" and the depth is "+depth)
    console.log("And multiplied they are "+ depth*horizontal)
})