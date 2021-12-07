const fs = require('fs')
const readline = require('readline')

let lines = [];
let gamma = ""
let epsilon = ''
num1 = 0
num0 = 0
// total 11
amount = 0

const rl = readline.createInterface({
    input: fs.createReadStream('day2/inputday2.txt'),
    crlfDelay:Infinity
})


rl.on('line',(line) => {
    lines.push(line);

})



rl.on('close', () => {
    for(i = 0;i<11;i++){
        for(let j = 0;j < lines.length;j++){
            //console.log(lines[j][i])
            if(lines[j][i] == "1"){
                num0++
            }else {
                num1++
            }
        }
        if(num0>num1){
            gamma+="0"
            espilon+="1"
        } else{
            gamma+="1"
            epsilon+="0"
        }
        num0 = 0
        num1=0
    }

    // if(amount < 12){
    //     if(num0 > num1){
    //         gamma += '0'
    //         epsilon += "1"
    //     } else {
    //         gamma += "1"
    //         epsilon += "0"
    //      }
    //     num1 = 0
    //     num0 = 0
    //     amount++
        
    // }
    console.log(amount)
    console.log(gamma)
})