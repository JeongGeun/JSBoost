const assert=require("assert")
let objArr=[]// 각 객체의 값을 담는 배열
let checkArr=[]// ,과 [,]를 담는 배열 
let res=new Object();//전체 결과값을 담을 객체
res.type="array"//처음 객체의 타입
res.child=[]
that=[]
oidx=0;//dfs진행할때 객채배열의 index        
num=1//checkArr를 진행할 때의 index

const ArrayParser=(str)=>{
    
    if(!parser(str)) return `ERROR : "올바른 문자열형태가 아니네요"`//parser가 true가 아니면 오류를 리턴 
    else
    {
        tokenizer(str)//tokenizer함수에서 lexer를 이용해 여러 객체로 자른다
        console.log(checkArr)
        dfs(res)//재귀 호출
        return JSON.stringify(res,null,2)
    }
}

const dfs=(par)=>{
    if(num>=checkArr.length) return//checkArr의 index가 사이즈를 넘을 때
    if(checkArr[num]===",") //,이 들어오면 objArr의 객체를 하나 집어넣는다
    {
        par.child.push(objArr[oidx])
        oidx+=1//객체배열을 하나빼서 넣었으므로 인덱스 1증가
        num+=1
        dfs(par)
    }
    else if(checkArr[num]==="[")//[과 나오면 array객체를 선언, child에 집어넣는다
    {
        let obj2=new Object()
        obj2.type="array"
        obj2.child=[]
        par.child.push(obj2)
        that.push(par)
        num+=1
        dfs(par.child[par.child.length-1])//하위 객체로 들어가서 dfs를 실행
        num+=1
        dfs(that.pop())
    }
    else if(checkArr[num]==="]"&&num===checkArr.length-1)//마지막에]로 마지막 배열값까지 넣어준다
    {
        par.child.push(objArr[oidx])
        oidx+=1//객체배열을 하나빼서 넣었으므로 인덱스 1증가
        num+=1
        dfs(par)
    }
    // num+=1
    // dfs(par)
}



const tokenizer=(str)=>{
    let token=""
    for(let i in str)
    {
        if(str[i]==="[")//[나왔을 때넣기
        {
           checkArr.push(str[i])    
        }
        else if(str[i]===",") //,이 나오면 lexer로 어휘추출
        {
            checkArr.push(str[i])
            lexer(token)
            token=""
        }
        else if(str[i]==="]"&&i!=str.length-1)//]넣어줌
        {
            checkArr.push(str[i])
        }
        else if(str[i]==="]"&&i==str.length-1)//맨 마지막 괄호인 경울 어휘추출
        {
            checkArr.push(str[i])
            lexer(token)
            token=""
        }
        else if(str[i]!=="]")token+=str[i]//그 외 string 합치키
    }
    return objArr
}

const lexer=(str)=>{// 새로운 객체 생성하여 정규식으로 type을 정하고 객체배열에 push
   str=str.trim()
  // console.log(str)
   let regNumber = /^[0-9]*$/;
   let obj2 =new Object()
   str=str.replace(/'/g, "");
   if(str.toLowerCase()=="null") obj2.type="NULL"
   else if(regNumber.test(str)) obj2.type="number"
   else obj2.type="string"
   obj2.value=str
   obj2.child=[]
   objArr.push(obj2)
   console.log(obj2)
   return obj2
}

const parser=(str)=>{//parser에서 stack개념을 사용하여 stack이 마지막까지 남아있을 경우 return false
    let testArr=[]
    flag=true
    for(let i in str)
    {
        if(str[i]==="[")
            testArr.push(str[i])
        if(str[i]==="]")
            {
                if(testArr.length===0)
                {
                    flag=false
                    break;
                }
                else
                {
                    testArr.pop()
                }
            }
    }
    if(!flag||testArr.length!==0) return false
    for(let i in str)
    {    
        if(str[i]==="'"&&testArr.length===0)
            testArr.push(str[i])
        else if(str[i]==="'"&&testArr.length===1)
            testArr.pop()
    }
    if(!flag||testArr.length!==0) return false
    return true
}

test="[1]"
//testcode
//1.tokenizer
testResult=`{"type":"number","value":"1","child":[]}`
testResult2=`{"type":"string","value":"[1]","child":[]}`
//assert.equal(JSON.stringify(tokenizer(test)[0]),testResult)
//2.lexer
//assert.equal(JSON.stringify(lexer(test)),testResult2)
//3.parser
//assert.equal(parser(test),true)

const str = " [1, [2,[3,[4,[5]]]],'hello world', nul";
const result = ArrayParser(str);
// console.log(result); //최종결과인 result를 보기좋게 출력하기 위해 JSON.stringfiy(result)를 사용할 수 있음 
