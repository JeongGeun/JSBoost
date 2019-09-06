const regExp = /[\{\}\[\]|~`^\+<>%\\\"]/gi    
const hostExp=/@.*:/g
const userExp=/\/\/.*:.*@/g
const idExp=/\/\/.*:/g
const passwordExp=/:.*@/g
const schemeExp=/^.*:\/\//g
const portExp=/:[0-9]+/g
const queryExp=/\?.*/g



module.exports=class URL{
    
    constructor(name){
        try{
            if(regExp.test(name)) throw "error"
            else if(!schemeExp.test(name)) throw "error" 
            else this.setValue(name)
        }
        catch(e){
            console.log(e)
        }
    }
    setValue(name) {
        this.before=[]
        let host=name.match(hostExp)
        let port=name.match(portExp)
        let query=name.match(queryExp)
        let user=name.match(userExp)
        if(user!==null)
        user=user[0].match(idExp)
        let password=name.match(userExp)
        if(password!==null)
        password=password[0].match(passwordExp)
        let scheme=name.match(schemeExp)
        let cnt=0;
        let str=""

        if(host!==null)
        this.host=host[0].substring(1,host[0].length-1)
        else{
            if(scheme!==null)
            {
                for(let i in name)
                {
                    if(name[i]==="\/") cnt+=1
                    else if(name[i]==="@") {
                        this.user=str
                        str=[]
                    }
                    else if(cnt===2) str+=name[i]
                    else if(cnt===3) break;
                }
                this.host=str
            }
        }

        this.absoluteString=name        
        if(port!==null)
        this.port=port[0].substring(1,port[0].length)
        
        if(query!==null)
        this.query=query[0].substring(1,query[0].length)
        
        if(user!==null)
        this.user=user[0].substring(2,user[0].length-1)
        
        if(password!==null)
        this.password=password[0].substring(1,password[0].length-1)
        
        this.scheme=scheme[0].substring(0,scheme[0].length-3)
        if(this.scheme==="file") this.isFileURL=true
        else this.isFileURL=false
        
        
        this.setPath(name,query)
    }

    setPath(name,que){
        let cnt=0
        let str=""
        name=name.replace(que,"")
        this.fullname=name.replace(que,"")
        const arr=["/"]
        for(let i in name)
        {
            if(name[i]==="\/")
            {
                cnt+=1
                if(cnt>3)
                {
                    arr.push(str)
                    str=""
                }
            }
            else if(cnt>=3)
            {
                str+=name[i]
            }
        }
        if(str!=="") arr.push(str)
       this.last=arr[arr.length-1]
       this.pathComponent=arr
    }
    appendPathComponent(path){
        let name=""
        let query=this.absoluteString.match(queryExp)
        name=this.absoluteString
        this.before.push(this.absoluteString)
        name=name.replace(query,"")
        name+=`\/${path}`
        this.fullname=name
        console.log(this.fullname)
        if(query!==null) name+=query
        this.absoluteString=name
        this.last=path
        this.pathComponent.push(path)
    }
    deleteLastPathComponent()
    {
        this.pathComponent.pop()
        this.last=this.pathComponent[this.pathComponent.length-1]
        this.absoluteString=this.before.pop()
    }
    isEqual(obj)
    {
        if(this.absoluteString===obj.absoluteString) return 1
        else if(this.scheme===obj.scheme&&this.user===obj.user&&this.host===obj.host&&this.port===obj.port) return 2
        else if(this.scheme===obj.scheme&&this.host===obj.host&&this.port===obj.port) return 3
        else if(this.fullname===obj.fullname) return 4
        else return 5
    }
}