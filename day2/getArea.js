const circle=require("./circle")
const trapezoid=require("./trapezoid")
const parallelogram=require("./parallelogram")
let arr=[]  

function getArea() {
  let figure=["circle","parallelogram","trapezoid"]
  if(typeof(arguments[0])=="string"){
    if(arguments[0].toLowerCase()===figure[0]) arr=circle.circle(arguments,arr)
    else if(arguments[0].toLowerCase()===figure[1]) arr=parallelogram.parallelogram(arguments,arr)
    else if(arguments[0].toLowerCase()===figure[2]) arr=trapezoid.trapezoid(arguments,arr)
  }
    else console.log("잘못된 인자를 입력하셨어요~")
    
}

function printExecutionSequence()
{
    let str=[];
    for(let i=0;i<arr.length;i++)
    {
        if(i!==arr.length-1)
        str+=arr[i]+" > "
        else
        str+=arr[i]
    }
    console.log(str)
}
module.exports = { getArea:getArea , printExecutionSequence:printExecutionSequence}