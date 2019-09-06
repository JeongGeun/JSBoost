function circle(arguments,arr){
    if(arguments.length==3){
        if(typeof(arguments[1])=="number"&&arguments[1]>=0&&typeof(arguments[2])=="number")
        {
            if(arguments[2].toFixed(2)==="3.14")
            {
                console.log(circleCalc(arguments[1],arguments[2]))
            }
            else console.log("원주율을 3.14로 입력하세요~")
        }
        else console.log("인자의 타입이 맞지 않습니다")
    }
    else
        console.log("에러에요! 인자가 부족합니다.")
    arr.push("circle")
    return arr
}

circleCalc=(a,b)=> a*a*b



module.exports = {circle:circle, circleCalc:circleCalc}
