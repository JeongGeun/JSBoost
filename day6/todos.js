const readline =require('readline')

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout

})// 입력에 관한 변수 선언


function todoList()
{
    let json ='{ "todo":["123","124"], "doing":["123","444"], "done":[]}'
    let list= '{"123":"자바스크립트 공부하기","124":"IOS공부하기"}'
    let obj=JSON.parse(json)
    let obj2=JSON.parse(list)
    
    function add(arr)
    {

       

    }

    function show(arr)
    {
        let str1="현재 상태 : "
        let str2=`todo리스트 : 총${obj2.length} : `
        let answer
        let l
        console.log(Object.keys(obj))
        if(arr[1]==="current")
        {
            for (let i in obj)
            {
                let pobj=obj[i]
                str1=str1+`${i} : [${pobj}], `
            }
        }
        if(arr[1]==="todo")
        {
            l=obj2.reduce((acc,cur)=>acc+`${Object.keys(cur)} : ${Object.values(json)}`)
            answer=str2+l
        }
        answer=str1
        console.log(answer)

    }

    function update(json,arr)
    {


    }

    function del(json,arr)
    {

    }
    function todos(msg,json,id)
    {
       
        const saud=["show","add","update","delete"]
        const arr=msg.split('$$')
        if(saud.includes(arr[0]))
        {
            if(arr[0]===saud[0]) show(arr)
            else if(arr[0]===saud[1]) {
                add(arr)
                id++;
            }
            else if(arr[0]===saud[2]) update(arr)
            else if(arr[0]===saud[3]) del(arr)

        }
        
    }
    //todo함수

    function start()//함수 실행
    {
        let id=7788
        process.stdout.write("명령하세요 : ")
        rl.on("line", function(line) {
            if(line==='q')  rl.close()
            else todos(line,id)
            process.stdout.write("명령하세요 : ")
            }).on("close", function() {
                process.exit();
        });
    }
    start()
}
todoList()