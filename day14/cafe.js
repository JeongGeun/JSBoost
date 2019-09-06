const peopleCheck=document.getElementById("setting")
const star=document.getElementById("star")
const Americano=document.getElementById("Americano")
const Latte=document.getElementById("Latte")
const Chino=document.getElementById("Chino")
const res=document.getElementById("res")
const order= document.getElementById("order")
let thd=[]//바리스타 쓰레드
let task=[]//주문한 음료종류
let cnt=0//종료를 위한 count
let checkCount=0//태스크의 길이

function time()//타이머 구현
{
    const today=new Date()
    let hours=today.getHours()
    const minutes=today.getMinutes()
    const seconds=today.getSeconds()
    let M="AM"
    if(hours>12)
    {
        hours-=12
        M="PM"
    } 
    return `[${hours}:${minutes}:${seconds} ${M}] `
}

peopleCheck.addEventListener("click",function(){//오늘 출근한 바리스타 명 수 선정
    document.getElementById("people").innerHTML=`오늘 출근한 바리스타는 ${star.value}명 입니다`
})

function start(){//주문 시작
    order.innerHTML=`${time()} 음료 주문을 시작합니다. 아메리카노 :${Americano.value},라떼 :${Latte.value}, 프라푸치노: ${Chino.value} `
    manager()//매니저가 주문관리
}

function manager(){
    for(let i=0;i<Americano.value;i++) task.push(1)
    for(let i=0;i<Latte.value;i++) task.push(2)
    for(let i=0;i<Chino.value;i++) task.push(3)
    for(let i=0;i<star.value;i++) thd.push(new Array())//바리스타 수만큼 새로운 배열생성
    checkCount=task.length//처음의 태스크 수로 저장
    recur()//반복 함수로 태스크가 비었는 지 체크
}

function recur()
{
    if(task.length===0) {
        return;
    }
    for(let i in thd)
    {
        if(thd[i].length==0)//쓰레드가 비었으면
        {
            thd[i].push(task.shift())//쓰레드에 push
            startWorker(thd[i][0],i)//worker로 작업을 넘김
        }
    }
    setTimeout(function(){
        recur()
    },0)
}

function startWorker(num,baristar) {
    if(window.Worker){
        w = new Worker("Americano.js")
        w.onmessage = (event)=> {
                order.innerHTML+= `<p>${time()} baristar${baristar} ${event.data}</p>`//메세지 리턴
                thd[baristar].shift()//쓰레드 비움
                cnt++//태스크 하나 수행
                if(checkCount===cnt)//모든 태스크가 종료되었으면
                order.innerHTML+= `<p>${time()} 모든 주문이 완료되었습니다.</p>`
            };
        w.postMessage(num)//어떤 종류의 음료인지를 worker에게 알려줌
        }
        else{
            alert('Web worker를 지원하지 않는 브라우저 입니다!');
    }
}









