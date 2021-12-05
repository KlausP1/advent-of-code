const fs = require('fs')
const readline = require('readline')

let gamma = ""
let epsilon = ''
num1 = 0
num0 = 0
// total 11
amount = 0
ans = ''

const rl = readline.createInterface({
    input: fs.createReadStream('day2/inputday2.txt'),
    crlfDelay:Infinity
})


rl.on('line',(line) => {
    if(line[amount] == '1'){
        num1++
    } else {
        num0++
    }
    ans += '1'
})

rl.on('close', () => {
    if(amount < 11){
        // if(num0 > num1){
        //     gamma += '0'
        //     epsilon += "1"
        // } else {
        //     gamma += "1"
        //     epsilon += "0"
        //  }
        // num1 = 0
        // num0 = 0
        amount++
        
    }
    console.log(ans)
    console.log(amount)
    console.log(gamma)
    console.log(epsilon)
})