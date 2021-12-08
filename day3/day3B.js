const fs = require('fs')
const readline = require('readline')

let lines1 = [];
let lines2 = [];
let gamma = ""
let epsilon = ''
num1 = 0
num0 = 0
o2=""
co2=""

const rl = readline.createInterface({
    input: fs.createReadStream('day3/inputday3.txt'),
    crlfDelay:Infinity
})


rl.on('line',(line) => {
    lines1.push(line);
    lines2.push(line);
})

function check (inp, num, n1, n0, o){
    if(inp.length > 1){
        for(let j = 0;j < inp.length;j++){
            if(inp[j][num] == "0"){
                n0++
            }else {
                n1++
            }
        }
        if(o){
        if(n1>=n0){
            for(let j = inp.length-1; j >=0; j--){
                if(inp[j][num]=="0"){
                    inp.splice(j, 1)
                }
            }
        } else {
            for(let j = inp.length-1; j >=0; j--){
                if(inp[j][num]=="1"){
                    inp.splice(j,1)
                }
            }
        }
    } else {
        if(n1>=n0){
            for(let j = inp.length-1; j >=0; j--){
                if(inp[j][num]=="1"){
                    inp.splice(j, 1)
                }
            }
        } else {
            for(let j = inp.length-1; j >=0; j--){
                if(inp[j][num]=="0"){
                    inp.splice(j,1)
                }
            }
        }
    }
        num++
        check(inp, num, 0, 0, o)
    } else {
        if (o){
            o2 = inp[0]
        } else {
            co2 = inp[0]
        }
    }
}

rl.on('close', () => {
    check(lines1, 0, 0, 0, true)
    check(lines2, 0, 0, 0, false)
    let deco2=parseInt(o2, 2).toString(10);
    let decco2=parseInt(co2, 2).toString(10);
    console.log(deco2*decco2)
})