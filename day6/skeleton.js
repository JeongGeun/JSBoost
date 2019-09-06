const readline =require('readline')

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout

})// 입력에 관한 변수 선언



function add()
{


}

function show()
{


}

function update()
{


}

function del()
{

}
function todos(msg)
{
    let json ='{ "todo":["123","124"], "doing":["123","444"], "done":[]}'
    const saud=["show","add","update","delete"]
    const arr=msg.split('$$')
    arr.splice(0,1)
    if(saud.includes(arr[0]))
    {
        if(arr[0]===saud[0]) show()
        else if(arr[0]===saud[1]) add()
        else if(arr[0]===saud[1]) update()
        else if(arr[0]===saud[1]) del()

    }

}
//todo함수

function start()//함수 실행
{
    rl.on("line", function(line) {
        if(line==='q')  rl.close()
            else todos(line)
        }).on("close", function() {
             process.exit();
       });
}

start()