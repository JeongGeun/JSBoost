function customReduce(arr,callback,initialValue)//인자로 배열,callback,초기값을 받음
{
   if(initialValue===undefined){//만약 초기값이 없다면
    initialValue=arr[0]//초기값으로 배열의 첫 번째 값을 선언
    for(let i=1;i<arr.length;i++)
    {
        initialValue=callback(initialValue,arr[i])//배열의 길이-1만큼 비교하며 실행한 함수값을 initial value에 누적시킴
    }
    }else{
        for(let j=0;j<arr.length;j++)
        {
            initialValue=callback(initialValue,arr[j])//배열의 길이만큼 비교하며 실행한 함수값을 initial value에 누적시킴       
        }
    }   
   return initialValue//누적값을 return함
}
arr = ["Hello", "World", "Good", "Morning"];
console.log(customReduce(arr,(acc, curr) => acc + " " + curr));
arr.reduce((acc,curr)=>acc.push(acc,curr))

var number = [0,1,2,3,4,5];

function add(acc, value) {
    //console.log(acc)
return acc + value;

}

// var sum = customReduce(number,add, 0);
// var total = customReduce(number,function(a, b) {return a + b;});
// console.log(sum)
// console.log(total)

function customFilter(arr,callback)
{ 
    let arr2=[]
    for(let i=0;i<arr.length;i++)
    {
       if(callback(arr[i]))
        arr2.push(arr[i])
    }
    return arr2
}
// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// result = customFilter(words,function(e){ return e.length>6})
// console.log(result);

function customForEach(arr,callback)
{
    for(let i=0;i<arr.length;i++)
    {
       callback(arr[i])
    }
}
// var array1 = ['a', 'b', 'c'];
// customForEach(array1,function(element) {
//     console.log(element);
//   })
function customMap(arr,callback)
{
    for(let i=0;i<arr.length;i++)
    {
       arr[i]=callback(arr[i])
    }
    return arr
}
var array1 = [1, 4, 9, 16];

const map1 =customMap(array1,function(x){return x*2})
console.log(map1);

module.exports={
    customReduce:customReduce,
    customFilter:customFilter,
    customForEach:customForEach,
    customMap:customMap
};

