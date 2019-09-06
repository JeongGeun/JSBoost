let repoList=[]
let workList=[]
let stageList=[]
let gitList=[]
let comlist=[]
let remoteList=[]
const fs=require('fs')

function init(name)
{
    let memRepo= new Object()
    memRepo.name=name
    memRepo.file=[]
    repoList.push(memRepo)
}
function isEmpty(value)
{ 
    if( value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length ) )
    return true 
    else return false  
};

function check(line,cur)
{
    let words=line.split(" ")

    if(words[0]==="new"){
        let obj=new Object();
        obj.reponame=`${cur}`
        obj.name=`${words[1]}`
        obj.status="untracked"
        obj.time=new Date()
        for(let i in repoList){
            if(repoList[i].name===cur)
            {
                repoList[i].file.push(obj)
                workList.push(obj)
            }
        }
    }
    else if(words[0]==="push"){
        console.log("push some commits")
        str=''
        comlist.forEach(e=>{
            console.log(`commit "${e.log}" pushed`)
            str+=`${e.log} ${e.name}`
        })


        str+=fs.readFileSync('./remote.txt',remoteList,function(err){
            if(err) console.log(err)
        })
        remoteList=Object.assign({},gitList)
        fs.writeFileSync('./remote.txt',str,function(err){
            if(err) console.log(err)
        })
        for(let i in comlist)
        {
            if(comlist[i].reponame===cur)
            {
                comlist.splice(i,1);
            }
        }
        gitList=gitList.filter(e=>{e.reponame!==cur})
    }
    else if(words[0]==="checkout"){
        if(isEmpty(words[1])) return ""
        else return words[1]
            
    }
    else if(words[0]==="status" && words[1]==="remote"){
        flag=false;
        log=""
        time=""
        for(let i in remoteList)
        {
            if(remoteList[i].reponame===words[2])
            {
                flag=true;
                log=remoteList[i].log
                time=remoteList[i].time
            }
        }
        if(!flag) {
            console.log("해당 저장소가 없다")
        }
        else{
            console.log(`last commit "${log}"`)
            console.log(`${time} ${log}`)
        }
    }else if(words[0]==="touch"){
        let obj
        for(let i in gitList){
            if(gitList[i].reponame===cur)
            {
                if(gitList[i].name===words[1])
                 {
                     obj=Object.assign({}, gitList[i])
                     obj.status="Modified"
                     obj.time=new Date()
                     workList.push(obj)
                }
            }
        }
    }
    else if(words[0]==="log"){
        gitList.forEach(e=>{
            if(e.reponame==cur)
            {
                console.log(`commit ${e.log}`)
                console.log(`${e.name} ${e.time}`)
            }
        })
    } 
    else if(words[0]==="status"){
        console.log("---Working Directory/")
        workList.forEach(e => {
            if(e.reponame===cur)
            console.log(`${e.name} ${e.status} ${e.time}`)
        });
        console.log("---Staging Area/")
        stageList.forEach(e =>{
            if(e.reponame===cur) 
            {console.log(`${e.name} ${e.status} ${e.time}`)}
        });
        console.log("---Git Repository/")
        gitList.forEach(e => {
            if(e.reponame===cur)
            console.log(`${e.name} ${e.status} ${e.time}`)
        });
    }
    else if(words[0]==="add"){
        let obj2
        for(let i in workList){
            if(workList[i].reponame===cur)
            {
                if(workList[i].name===words[1])
                 {
                     workList[i].status="Modified"
                     obj2=workList[i]
                     workList.splice(i,1)
                }
            }
        }
        stageList.push(obj2)
        console.log("---Staging Area/")
        stageList.forEach(e =>{
            if(e.reponame===cur) 
            {console.log(`${e.name} ${e.status} ${e.time}`)}
        });
    }
    else if(words[0]==="commit"){
        let obj3
        let commitLog=''
        for(let i=1;i<words.length;i++)
        {
            commitLog+=`${words[i]} `
        }
        for(let i in stageList){
            if(stageList[i].reponame===cur)
            {
                obj3=stageList[i]
                obj3.status="Unmodified"
                obj3.log=commitLog
                gitList.push(obj3)
                comlist.push(obj3)
                stageList.splice(i,1)
            }
        }
        console.log("---commit files")
        comlist.forEach(e => {
            if(e.reponame===cur)
            console.log(`${e.name} ${e.status} ${e.time}`)
        });
    }
}



function com(line)
{
    let words=line.split(" ")
    if(words[0]==="init") 
    {
        if(!isEmpty(words[1]))
        {
            init(words[1])
            console.log(`created ${words[1]} repository`)
        }
    }
    else if(words[0]==="status")
    {
        if(isEmpty(words[1]))
        repoList.forEach(e => {console.log(`${e.name}/`)});
        else
        {
            cur=words[1]
            console.log("---Working Directory/")
            workList.forEach(e => {
                if(e.reponame===cur)
                console.log(`${e.name} ${e.status} ${e.time}`)
            });
            console.log("---Staging Area/")
            stageList.forEach(e =>{
                if(e.reponame===cur) 
                {console.log(`${e.name} ${e.status} ${e.time}`)}
            });
            console.log("---Git Repository/")
            gitList.forEach(e => {
                if(e.reponame===cur)
                console.log(`${e.name} ${e.status} ${e.time}`)
            });
        }
    }
    else if(words[0]==="checkout")
    {
        if(!isEmpty(words[1]))
        {
            let found=repoList.find(e=>{
                return e.name==words[1]
            })
            return found.name
        }

    }
}

module.exports={com:com,isEmpty:isEmpty,check:check}