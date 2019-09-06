const util = require('util');
const baristar = require("./baristar")
const EventEmitter = require('events').EventEmitter;
class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();

let task=[]
let bari=[]
cnt=0;
let bariCount=0;

emitter.on("start",function(str,num){
    baristar.make(str,num,cnt)
    bari[num].shift()
    //if(task.length===0)
   // setTimeout(function(){end(0)},0)
})
// function end(num)
// {
//     if(num>=3000) process.exit()
//     if(task.length===0) num+=10
//     else num=10
//     setTimeout(function(){
//         end(num)
//     },10)
// }

function pushTask(){
    this.on('push',(arr)=>{
        arr.forEach(element => {
           task.push(element) 
        });
        cnt=arr.length
        setTimeout(function(){check()},0)
    })
    this.on("bari",(num)=>{
        bariCount=num
        for(let i=0;i<bariCount;i++) bari.push(new Array());
    })
}

function check()
{ 

    for(let i=0; i<bariCount;i++)
    {
        if(task.length!==0)
        {
            for(let j=0;j<2;j++)
            {
                if(bari[i].length===0)
                {
                    if(task.length!==0)
                    {
                        console.log(task)
                        bari[i].push(task[0])
                        emitter.emit("start",task.shift(),i)
                        
                    }
                }
            }
            
        }
    }

    setTimeout(function(){
        check()
    },1000)
}
util.inherits(pushTask,EventEmitter);
module.exports = pushTask;      