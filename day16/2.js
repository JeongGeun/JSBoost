const dns=require("dns")
const net=require("net")
const fs=require("fs")

dns.lookup('zum.com', (err, address, family,port) => {
    console.log('address: %j family: IPv%s', address, family);
});

//let request="GET / HTTP/1.1\nAccept: text/html\nHost: zum.com\nUser-Agent: Mozilla/5.0\r\n\r\n"
function toString()
{
    let obj=new Object()
    obj.method="GET / HTTP/1.1"
    obj.Accept="text/html"
    obj.Host="zum.com"
    obj.User_Agent="Mozilla/5.0"
    str=`${obj.method}\nAccept: ${obj.Accept}\nHost: ${obj.Host}\nUser-Agent: ${obj.User_Agent}\r\n\r\n`
    console.log(str)
    return str 
}

const client=net.connect({port:80,host:"zum.com"},function(){
    console.log('Client connected');
    client.write(toString());
})
let res=""
client.on('data', function(data){
    let text=data.toString();
    res=res.concat(text)
    client.end();
});
setTimeout(function(){
    fs.writeFileSync("response.html",res,function(err){
        if(err) throw err
    })
},1000)