let dashboard=[]
let check=0;
const fs=require("fs")


function boardToJson(){
    let obj=new Object()
    obj.board=dashboard
    fs.writeFile('file.json', JSON.stringify(obj), (err) => {
        if (err) throw err;
      });
}

function work1()
{
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('아메리카노 완료');
        }, 3000);
      });
}
function work2()
{
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('라떼 완료');
        }, 5000);
      });
}
function work3()
{
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('프라푸치노 완료');
        }, 10000);
      });
}
async function make(e,num,end) {
    
    let result
    if(e[1]=="1")
    {
        dashboard.push(`바리스타${num}-${e[0]}아메리카노 시작`)
        console.log(`바리스타${num}-${e[0]}아메리카노 시작`)
        result = await work1()
    }
    else if(e[1]=="2"){
        dashboard.push(`바리스타0${num}-${e[0]}카페라떼 시작`)
        console.log(`바리스타${num}-${e[0]}카페라떼 시작`)
        result = await work2()
    }
    else{
        dashboard.push(`바리스타${num}-${e[0]}프라푸치노 시작`)
        console.log(`바리스타${num}-${e[0]}프라푸치노 시작`)
        result = await work3()
    }
    dashboard.push(`바리스타${num}-${e[0]}${result}`)
    console.log(`바리스타${num}-${e[0]}${result}`)
    check+=1
    boardToJson(dashboard)
    if(check==end) {
        console.log(`${e[0]}의 주문 완료`)
        check=0;
    }
    return result
};

module.exports= {make:make}