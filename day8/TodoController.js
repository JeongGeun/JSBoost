var obj

module.exports=class{
    constructor(todo)
    {
        this.todo=todo
    }
    runTodo(){
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('명령하세요 : ', async (answer)=>{
            if(answer.match(/q/i)){
                console.log('(프로그램 종료)');
                rl.close();
            }else{
                rl.pause();
                await this.command(answer);
                this.runTodo();
            }
        });
    }
    command(line){
        const cmd = line.split("$$");
        let ms = 0;
    
        switch(cmd[0]){
            case "show":
               this.todo.showTodo(cmd[1]);
                break;
            case "add":
                this.todo.addTodo(cmd[1], cmd[2]);
                break;
            case "update":
                ms = 2000;
                this.todo.updateTodo(parseInt(cmd[1]), cmd[2]);
                break;
            case "delete":
                this.todo.deleteTodo(parseInt(cmd[1]));
                break;
        }
        if(ms!==0)
        return this.todo.delay(ms);
    }
    
    
}

