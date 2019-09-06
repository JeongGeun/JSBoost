const fs=require("fs")

let str=fs.readFileSync("response.html","utf8")
str=str.split(`<!DOCTYPE html>`)
let head= str[0].trim()
let body= "<!DOCTYPE html>\n"+str[1].trim()

