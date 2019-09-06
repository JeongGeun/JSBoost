const a = require("./a.js");
const assert = require("assert");//유닛테스트를 위한 모듈
const msg = require("./c.js");
const data = require("./d.js");
// c.js의 module.export추가
// checker의 checker 오타 고침
// checker의 bindmembers를 function형태로 return
// next()로 generator를 두 번 실행
// callbac으로 들어가서 result값을 generator함수로 넘겨줌

const checker = new a.Checker(msg);

function* run(source, targets) {
        const rightMsg = msg.ok.msg;
        const checkMember = checker.bindMembers(targets);
        result = yield checkMember(source);
        result.then((value)=>{
            assert.equal(value, rightMsg);
            console.log("error없이 프로그래밍이 실행됐습니다");
        }).catch((e)=>console.log(`이크 에러가 발생했어요. ${e.message}`));
}


a.runner(run, data.ourStudents, ['crong', 'jk']);
a.runner(run, data.ourProfessors, ['Bill', 'Ritchie']);

/* 실행결과 
error없이 프로그래밍이 실행됐습니다
이크 에러가 발생했어요 'who are you?' == 'hello our members!'
*/

