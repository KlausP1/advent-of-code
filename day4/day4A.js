const fs = require('fs')
const readline = require('readline')

let numbs =[];
let cards = [];
let row = 1
let test = []


const rl = readline.createInterface({
    input: fs.createReadStream('day4/inputday4.txt'),
    crlfDelay:Infinity
})

rl.on('line',(line) => {
    if(row == 1){
        numbs.push(line)
    } else if(line!="") {
        cards.push(line)
    } 
    row++
})

function sep(inp){
    for(let i = 0;i<inp.length;i++){
        if(i%5 == 0){
            test.push([inp[i]+" "+ parseInt(inp[i+1])+" "+ inp[i+2]+" "+ inp[i+3]+" "+ inp[i+4]])
        }
    }
}

rl.on('close', () => {
    sep(cards)
    console.log(numbs)
    console.log(cards.length)
    console.log(test)
})
