const ours=require('./d.js').ourStudents
var _=require('lodash')
let _msg
let gen
var ret
function includeMembers(names, ourStudents) {
    cnt=0
    arr=[]
    ourStudents.forEach(element => {
        names.forEach(e=>{
            if(e===element)
            {
                cnt=cnt+1
                arr["cnt"]=true
            }
        })
    });
    if(cnt==names.length)
        return _.every(arr)
    else
        return false
}

class Checker{
    constructor(msg) {
        _msg = msg;
    }
    bindMembers(names) {
        return function() {
            return ret=new Promise( (resolve,reject) => {
                //반드시 10밀리세컨드 지연실행되어야만 함
                setTimeout( function () {
                    const bMember = includeMembers(names, ours);
                    if (bMember) {
                        console.log("error없이 프로그래밍이 실행됐습니다");
                    }
                    else{
                        resolve("who are you?")
                    }
                }, 10); 
            })
        }
    }
}

const runner = function (generator, names, ourStudents) {
    //구현..
   const gen= generator(names,ourStudents)
   let a=gen.next()
   gen.next(a.value)
}
module.exports={Checker:Checker,runner:runner}