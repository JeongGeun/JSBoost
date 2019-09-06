function step1(){
const readline=require("readline")//입력에 필요한 모듈
const rl=readline.createInterface({
    input:process.stdin,//사용자입력
    output:process.stdout//콘솔에 값 출력
})
gcdList=[]

rl.on("line",(data)=>{//입력받는 부분의 실행
    flag=1
    if(data==0)//입력 값이 0이면 
    {
        if(gcdList.length>=2)
        {
        console.log(multipleGcd(gcdList))//최대공약수 출력
        gcdList=[]//리스트 비우기
        }
        else//수가1개 혹은 0개일 때
        {
        console.log("수를 두 개 이상 입력하세요~")    
        }
    }
    else if(data==-1)//-1이 들어오면 프로세스 종료
    {
        process.exit()
    }
    else
    {
        for(i=0;i<data.length;i++)
        {
            if(data.charCodeAt(i)<48||data.charCodeAt(i)>57)
            {//ASCII코드를 이용하여 문자열인지 여부를 확인하고 문자열이 끼어있으면 다시입력하라고 한다.
                flag=0;
                break;
            }
        }
        if(flag===1)//문자열이 없다면 리스트에 push
            gcdList.push(data)
        else//있다면 다시 입력
            console.log("양의 숫자만 입력하세요~")
    }
}).on("close", function() {//종료시 실행되는부분
    console.log(multipleGcd(gcdList))//최대공약수 출력
    process.exit();
});

gcd=(a,b)=>{
    if(!b)
        return a;
    return gcd(b,a%b);
}

multipleGcd=(arr)=>{
    for(i=0;i<arr.length-1;i++)
    {
        ans=gcd(arr[i],arr[i+1])//반복문으로 앞에서부터 2개씩 gcd함수 실행
        if(ans==1)//만약 두 수가 서로소일 때 답을 1로출력
        {
            arr[arr.length-1]=ans;
            break;
        }
        arr[i+1]=ans//두 수의 최대공약수를 저장하여 다음수와 비교한다
    }
    return arr[arr.length-1]
}
}//function으로 선언함으로써 전역변수로 인한 충돌방지

step1()