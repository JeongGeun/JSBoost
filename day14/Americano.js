//async&&await함수를 이용한 비동기함수 구현
//음료를 제작하는 Worker

function work1()
{
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('아메리카노 완료');
        }, 3000);
      });
}
function work2()
{
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('라떼 완료');
        }, 5000);
      });
}
function work3()
{
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('프라푸치노 완료');
        }, 10000);
      });
}
self.addEventListener('message', async function (e) {
    var result
    if(e.data===1)
    {
       result = await work1()
    }
    else if(e.data===2){
        result = await work2()
    }
    else{
        result = await work3()
    }
    postMessage(result)
});