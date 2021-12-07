const fs = require('fs')
const readline = require('readline')

let lines = [];
let gamma = ""
let epsilon = ''
num1 = 0
num0 = 0
o2=""
o2=""

const rl = readline.createInterface({
    input: fs.createReadStream('day3/inputday3.txt'),
    crlfDelay:Infinity
})


rl.on('line',(line) => {
    lines.push(line);
})



rl.on('close', () => {
    for(i = 0;i<12;i++){
        for(let j = 0;j < lines.length;j++){
            if(lines[j][i] == "1"){
                num0++
            }else {
                num1++
            }
        }
        if(num0>num1){
            gamma+="0"
            epsilon+="1"
        } else{
            gamma+="1"
            epsilon+="0"
        }
        num0 = 0
        num1=0
    }

    let decgamma=parseInt(gamma, 2).toString(10);
    let decepsilon=parseInt(epsilon, 2).toString(10)
    console.log(parseInt(decgamma)*parseInt(decepsilon))
})