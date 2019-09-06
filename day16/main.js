const URL=require("./url")
var url = new URL("http://user_name:pass-word@boostcamp.connect-foundation.or.kr:2019/first/second/last?query=ab&param=12");
console.log(url)
//url.host = "boostcamp.connect-foundation.or.kr"
//url.lastPathComponent = "last"
//url.pathComponents = ["/", "first", "second", "last"]
//url.port = 2019
//url.query = "query=ab&param=12"
//url.scheme = "http"
//url.isFileURL = false
//url.user = "user_name"
//url.password = "pass-word"
//url.absoluteString = "http://user_name:pass-word@boostcamp.connect-foundation.or.kr:2019/first/second/last?query=ab&param=12"

url.appendPathComponent("basecamp");
url.appendPathComponent("camp");
//url.absoluteString = "http://user_name:pass-word@boostcamp.connect-foundation.or.kr:2019/first/second/last/basecamp/camp?query=ab&param=12"
url.deleteLastPathComponent();
//url.absoluteString = "http://user_name: pass-word@boostcamp.connect-foundation.or.kr:2019/first/second/last/basecamp?query=ab&param=12"

var url2 = new URL("http://user_name:pass-word@boostcamp.connect-foundation.or.kr:2019/first/second/last?query=cd&param=12");

var zumurl = new URL("http://admin@zum.com/#!/home?query=zum");

var naverurl = new URL("http://m.naver.com");
console.log(zumurl.isEqual(naverurl));

var url1 = new URL("http://admin@zum.com/#!/home?query=zum");
console.log(zumurl.isEqual(url1));

var url2 = new URL("http://admin@zum.com/#!/home");
console.log(zumurl.isEqual(url2));

var url3 = new URL("http://admin@zum.com/?param=zum");
console.log(zumurl.isEqual(url3));

var url4 = new URL("http://zum.com/#!/home");
console.log(zumurl.isEqual(url4));