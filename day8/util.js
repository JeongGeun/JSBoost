const util={
    data : "",
    createId : function(){
     let id;
     while(true){
         id = Math.round(Math.random()*10000+1);
         if(this.findStatusById(id) == -1) break;
     }
     return id;
 },
 
    delay : function(ms){
     return new Promise(resolve => setTimeout(resolve, ms));
 },
 
    prtCurrent : function() {
     let json = this.data[1]
     console.log(json)
    //  json = json.replace(/\"|{|}/g, "");
    //  json = json.replace(/,/g, ", ");
 
     console.log(`현재 상태 : ${json.todo}`);
 },
 
    findDataIndexById : function(id) {
     let index, tmp = 0;
     this.data[0].reduce((acc, val) => {
         if(val['id'] !== id) acc++;
         else index = acc;
         return acc;
     }, tmp);
     if(this.data[0].length == index) return false;
     else return index;
 },
 
 findTitleById : function(id) {
     let index = this.findDataIndexById(id);
     return this.data[0][index]["title"];
 },
 
 findStatusById : function(id) {
     let keys = Object.keys(this.data[1]);
 
     for(let i=0;i<keys.length;i++)
         if(this.data[1][keys[i]].indexOf(id) > -1)
             return keys[i];
     return -1;
 },
 
 removeDataById : function(id) {
     let index = this.findDataIndexById(id);
     if(index > -1){
         this.data[0].splice(index, 1);
         return true;
     }else return false;
 },
 
 removeListById : function(id){
     let type = this.findStatusById(id);
     let index = this.data[1][type].indexOf(id);
     if(index > -1){
         this.data[1][type].splice(index, 1);
         return true;
     }else return false;
 },
 
 removeTodoById : function(id) {
     this.removeDataById(id);
     this.removeListById(id);
 },
 
 arrayStringToArray : function(str) {
     let tmpString;
     let arr = [];
     tmpString = str.replace(/\[|\]|"/g, "");
     arr = tmpString.split(",");
     
     return arr;
 },
 
 addData : function(id, title, tag){
     let obj = {};
     obj['id'] = id;
     obj['title'] = title;
     obj['tag'] = tag;
 
     this.data[0].push(obj);
 },
 
 addTodoList : function(id, status){
     console.log(this.data[1])
     this.data[1][status].push(id);
 },
 
 showTodo : function(cmd) {
     switch (cmd) {
         case "current":
             this.prtCurrent();
             break;
         case "todo":
         case "doing":
         case "done":
             console.log(this.data[1])
             let o = this.data[1][cmd];
             console.log(o)
             let txt = [];
 
             o.forEach(e => {
                 txt.push(` - ${this.findTitleById(e)}, id: ${e}`);
             });
             txt = txt.join('\r\n');
             console.log(`${cmd} 리스트 : 총 ${o.length}건`);
             console.log(`${txt}`);
             break;
     }
 },
 
 // add$$docker공부하기$$["favorite","programming"]
 // docker공부하기가 추가됐습니다.(id : 7788)
 addTodo : function(title, str){
    let id = this.createId();
     let tag = this.arrayStringToArray(str);
 
     this.addData(id, title, tag);
     this.addTodoList(id, 'todo');
     
     console.log(`${title}이(가) 추가되었습니다. (id : ${id})`);
     this.prtCurrent();
 },
 updateMsg:function(title, status){
     return new Promise((resolve, reject) => {
         setTimeout(()=>{
             console.log(`${title}이(가) ${status}(으)로 상태가 변경되었습니다.`);
             this.prtCurrent();
             resolve(true);
         }, 2000);
     })
 },
 
 updateTodo:async function(id, status){
    const title = this.findTitleById(id);
 
     this.removeListById(id);
     this.addTodoList(id, status);
 
     await this.updateMsg(title, status);
 }
 ,
  deleteTodo : function(id) {
    const title = this.findTitleById(id);
     const type = this.findStatusById(id);
 
     this.removeTodoById(id);
     
     console.log(`${title}가 ${type} 목록에서 삭제되었습니다.`);
     this.prtCurrent();
 }
}
 module.exports =util;
 
 