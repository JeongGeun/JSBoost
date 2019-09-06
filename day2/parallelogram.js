function parallelogram(arguments,arr){
    if(arguments.length==3){
        if(typeof(arguments[1])=="number"&&arguments[1]>0&&typeof(arguments[2])=="number"&&arguments[2]>0)
        {
           console.log(parallelogramCalc(arguments[1],arguments[2]))
        }
        else console.log("인자의 타입과 부호를 확인하세요~")
    }
    else
        console.log("에러에요! 인자의 갯수가 맞지 않습니다.")
    
    arr.push("parallelogram")
    return arr
}

parallelogramCalc=(a,b)=> a*b

module.exports = {parallelogram:parallelogram, parallelogramCalc: parallelogramCalc}