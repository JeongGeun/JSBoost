const TodoModel = require("./TodoModel.js")
const TodoController = require("./TodoController.js")
const TodoHtmlView = require('./TodoHtmlView.js') //뒤에 설명
const fetch=require("node-fetch")
const util=require("./util")


callApi = async() => {
    const response =await fetch("http://localhost:8090/");
    const body =await response.json();
    //console.log(body)
    return body;
  };

callApi().then(res=>{
 util.data =res
let todolist=res
const todoModel = new TodoModel(todolist);
const controller = new TodoController(todoModel);
controller.runTodo();
// new TodoHtmlView(todoModel);   
})

