var util=require('./util')

function TodoModel(dat){
   this.data=dat
}


TodoModel.prototype.showTodo = function(cmd){
   util.showTodo(cmd)
}

// add$$docker공부하기$$["favorite","programming"]
// docker공부하기가 추가됐습니다.(id : 7788)
TodoModel.prototype.addTodo = function(title, str){
   util.addTodo(title,str)
}

TodoModel.prototype.updateTodo=async function(id, status){
   util.updateTodo(id,status)
}

TodoModel.prototype. deleteTodo = function(id) {
   util.deleteTodo(id)
}

module.exports =TodoModel;

