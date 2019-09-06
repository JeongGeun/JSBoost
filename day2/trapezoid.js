function trapezoid(arguments,arr){
    if(arguments.length==4){
        if(typeof(arguments[1])=="number"&&arguments[1]>0&&typeof(arguments[2])=="number"&&arguments[2]>0
        &&typeof(arguments[3])=="number"&&arguments[3]>0)
        {
           console.log(trapezoidCalc(arguments[1],arguments[2],arguments[3]))
        }
        else console.log("인자의 타입과 부호를 확인하세요~")
    }
    else
        console.log("에러에요! 인자의 갯수가 맞지 않습니다.")
    arr.push("trapezoid")    
    return arr
}

trapezoidCalc=(a,b,c)=>(a+b)*c/2

module.exports = {trapezoid:trapezoid, trapezoidCalc : trapezoidCalc}