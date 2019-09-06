const readline=require('readline')
const {com,isEmpty,check}=require('./repo.js')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
let currentRepo=''
let cmd=''
rl.setPrompt("/>")
rl.prompt()
rl.on('line',function(line){
    if(line=='quit') rl.close();
    str=line.split(" ")
    if(!isEmpty(currentRepo)){
        check(line,currentRepo)
    }
    else{
        cmd =com(line)
        if(!isEmpty(cmd)) {
            rl.setPrompt(`/${cmd}/>`)
            currentRepo=cmd
        }
    }

    if(str[0]==="checkout"&&str[1]!==currentRepo){
        currentRepo=""
        rl.setPrompt(`${currentRepo}/>`)
    }

    rl.prompt()
})
.on('close', function () {
    
    process.exit();
  });