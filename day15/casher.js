const readline=require('readline')
const EventEmitter = require('events');
const manager=require("./manager")
const util=require("./util")
class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let casher=new manager()

rl.question('바리스타 수:  ', (answer) => {2
    console.log(`바리스타는 총 ${answer}입니다`)
    console.log("메뉴  =  1. 아메리카노(3s)    2. 카페라떼(5s)    3. 프라프치노(10s)")
    console.log("고객별로 주문할 음료 개수를 입력하세요. 예) A고객, 아메리카노 2개, 프라프치노 1개 => A, 1:2, 3:1")
    casher.emit('bari',answer)
});


rl.on('line',function(line){
    let plusTask = util.cutter(line)
    casher.emit("push",plusTask)
})
.on('close', function () {
    process.exit();
  });