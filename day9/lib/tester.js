var colors = require('colors');

let str=""
const assert={
    equal: function(){
        if(arguments[0]===arguments[1]) str="PASS"
        else str ="FAIL"
    },
    notEqual:function(){
        if(arguments[0]!==arguments[1]) str="PASS"
        else str ="FAIL"
    },
    detailEqual:function(){
        if(str==="FAIL") return
        if(Array.isArray(arguments[0])===true&&Array.isArray(arguments[1])===true)
        {
            if(JSON.stringify(arguments[0])===JSON.stringify(arguments[1])) 
            {
                str="PASS"
                return
            }
            else 
            {
                str="FAIL"
                return
            }
        }
        if(arguments[0].length===arguments[1].length)
        {
            flag=true
            for(let i in arguments[0])
            {
                for(let j in arguments[1])
                {
                    if(i===j&&arguments[0][i]===arguments[1][j]) {
                        flag=true;
                        break
                    }
                    else flag=false
                }
                if(flag===false)
                {
                    str="FAIL"
                    return 
                }
            }
            str="PASS"
        }
        else str="FAIL"
    }
}
 
function test(text,callback)
{
    callback()
    if(str!="FAIL")
    {
        text=text+` : ${str}`
        console.log(text)
    }
    else 
    {
        text+=" : "
        console.log(text,colors.red(str))
    }
    str=''
}


module.exports={assert:assert,test:test}