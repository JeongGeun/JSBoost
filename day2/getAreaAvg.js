const circle=require("./circle")

function getAreaAvg(){
    if(arguments.length==3)
    {
        if(arguments[0].toLowerCase()!=="circle")
            console.log("circle로 입력해주세요")
        else{
            if(typeof(arguments[1])=="number"&&arguments[1]>=0&&typeof(arguments[2])=="number")
            {
                if(arguments[1]>arguments[2]) console.log(avgCalc(arguments[2],arguments[1]))
                else console.log(avgCalc(arguments[1],arguments[2]))
            }
            else
                console.log("0보다 큰 자연수만을 입력해주세요~")
        }
    }
    else
     console.log("인자의 수가 맞지 않습니다.")
}

avgCalc=(a,b)=>{
    let ans=0
    for(let i=a;i<=b;i++)
    {
        ans+=circle.circleCalc(i,3.14);
    }
    ans=ans/(b-a+1)
    return ans;
}
module.exports = {getAreaAvg:getAreaAvg}