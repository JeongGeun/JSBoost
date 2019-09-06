function cutter(str)
{
    str=str.split(",")
    nstr=""
    res=[]
    for(let i in str)
    {
        str[i]=str[i].trim()
    }
    for(let i=1;i<str.length;i++)
    {
        nstr=str[0]
        if(str[i][0]===1){
            for(let j=0;j<str[i][2];j++)
            {
                nstr+=str[i][0]
                res.push(nstr)
                nstr=str[0]
            }
        }
        else if(str[i][0]===2){
            for(let j=0;j<str[i][2];j++)
            {
                nstr+=str[i][0]
                res.push(nstr)
                nstr=str[0]
            }
        }
        else{
            for(let j=0;j<str[i][2];j++)
            {
                nstr+=str[i][0]
                res.push(nstr)
                nstr=str[0]
            }
        }
    }
    return res

}


module.exports={cutter:cutter}