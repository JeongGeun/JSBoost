function runSync(id) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + 2000){};
    console.log(id+" sync 함수 실행")
 }
 
 function runAsync(id) {
    console.log(id + " async 함수 실행");
  }
  
var isEmpty = function(value){ if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) ){ return true }else{ return false } };

  //executeEventQueue는 callstack이 비워지면, eventQueue에 있는 함수가 순서대로 실행되도록 구현한다.
  //executeEventQueue는 종료되지 않고 계속 실행되는 프로그램이다.
function executeEventQueue(num) {
    
    if(num>=5000) {
        console.timeEnd("1")
        process.exit()
    }
    
    if(isEmpty(callStack))num+=10
    else num=10
    
    if(!isEmpty(callStack)) 
    setTimeout(function(){
        executeCallStack()
        executeEventQueue(num)
    },0)
    else{
        while(!isEmpty(eventQueue))
        {
            if(eventQueue.length>0)
            {
                fn=eventQueue.shift()
                fn();
            }
            else break
        }
        setTimeout(function(){executeEventQueue(num)},10)
    }
}
  
  //executeCallStack은 callstack에 있는 함수가 역순으로 실행되도록 구현한다.
  //executeCallStack은 종료되지 않고 계속 실행되는 프로그램이다.
  //하지만 callstack에 더이상 실행해야할 함수가 없다면 종료되야 한다.
function executeCallStack() {
    while(!isEmpty(callStack))
    {
        if(callStack.length>0)
        {
            fn=callStack.pop();
            fn()
        }
        else break;
    }
}
  
  
  //이부분은 수정하지 않는다. 
  //callStack과 eventQueue의 갯수는 1개 이상 n개일 수 있다.
  let callStack = [runSync.bind(null, 1), runSync.bind(null, 2)];
  let eventQueue = [runAsync.bind(null, 1),runAsync.bind(null, 2),runAsync.bind(null, 3)];
  
  //프로그래밍 실행 예시
  //구현방법에 따라서, executeEventQueue,executeCallStack 실행시 필요한 인자는 아래와 다를 수 있다.
  console.time("1")
  executeEventQueue(0);
  executeCallStack();
  callStack.push(runSync.bind(null, 3));
  setTimeout(()=>callStack.push(runSync.bind(null, 4)), 6000);
  setTimeout(()=>callStack.push(runSync.bind(null, 5)), 20000);
  