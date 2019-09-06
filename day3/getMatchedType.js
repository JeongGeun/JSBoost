const jsondata=require("./json_tree")
const custom=require("./Custom")

function getMatchedType(data,type){
    let carr=[]    
    let str;
    function get(data,type)
    {
        data.forEach(element => {
            if(element.type===type)
                {
                    carr.push(element.name)
                }
            get(element.childnode,type)
        });
        
    }
    function answer()
    {
        str=custom.customReduce(carr,function(prev,value){
            return prev+`, "${value}"`
        },"")
        return `${type} 타입 데이터는 총 ${carr.length}개이며${str} 입니다`
    }
    get(data,type)
    console.log(answer())
}

getMatchedType(jsondata,"sk")
getMatchedType(jsondata,"kt")