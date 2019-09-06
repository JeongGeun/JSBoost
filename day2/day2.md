for of문

```javascript
let iterable = [10, 20, 30];
```

```javascript
for(let value of iterable) {
    console.log(value);
}
```

for each문(배열에 대해서만 사용가능)

` var** items = ['item1', 'item2', 'item3'];
items.forEach(**function**(item) {
console.log(item);
}); `

### for …in 반복문

`var obj = {
a: 1, 
b: 2, 
c: 3
};
for (var prop in obj) {
console.log(prop, obj[prop]); *// a 1, b 2, c 3*
}`

## 함수표현식 

```js
var funcExpression = function () {
    return 'A function expression';
}
funcExpression(); // 'A function expression'
```



## 함수선언식 vs 함수표현식

- 함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않는다.
- 함수 선언식은 코드를 구현한 위치와 관계없이 자바스크립트의 특징인 호이스팅에 따라 브라우저가 자바스크립트를 해석할 때 맨 위로 끌어 올려준다.

# 함수 표현식 vs 함수 선언식

## 함수 선언식 - Function Declarations

일반적인 프로그래밍 언어에서의 함수 선언과 비슷한 형식이다.

```js
function 함수명() {
  구현 로직
}


Js
Copy
// 예시
function funcDeclarations() {
  return 'A function declaration';
}
funcDeclarations(); // 'A function declaration'


Js
Copy
```

## 함수 표현식 - Function Expressions

유연한 자바스크립트 언어의 특징을 활용한 선언 방식

```js
var 함수명 = function () {
  구현 로직
};


Js
Copy
// 예시
var funcExpression = function () {
    return 'A function expression';
}
funcExpression(); // 'A function expression'


Js
Copy
```

## 함수 선언식과 표현식의 차이점

**함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않는다.**

함수 선언식은 코드를 구현한 위치와 관계없이 자바스크립트의 특징인 **호이스팅**에 따라 브라우저가 자바스크립트를 해석할 때 맨 위로 끌어 올려진다.

예를 들어, 아래의 코드를 실행할 때

```js
// 실행 전
logMessage();
sumNumbers();

function logMessage() {
  return 'worked';
}

var sumNumbers = function () {
  return 10 + 20;
};


Js
Copy
```

호이스팅에 의해 자바스크립트 해석기는 코드를 아래와 같이 인식한다.

```js
// 실행 시
function logMessage() {
  return 'worked';
}

var sumNumbers;

logMessage(); // 'worked'
sumNumbers(); // Uncaught TypeError: sumNumbers is not a function

sumNumbers = function () {
  return 10 + 20;
};


Js
Copy
```

위 코드 결과는 아래와 같다.

![오류메시지](https://joshua1988.github.io/images/posts/web/javascript/function-expressions-declarations/error.png)

함수 표현식 sumNumbers 에서 var 도 호이스팅이 적용되어 위치가 상단으로 끌어올려졌다.

```js
var sumNumbers;

logMessage();
sumNumbers();


Js
Copy
```

하지만 실제 sumNumbers 에 할당될 function 로직은 호출된 이후에 선언되므로, sumNumbers 는 함수로 인식하지 않고 변수로 인식한다.

호이스팅을 제대로 모르더라도 함수와 변수를 가급적 코드 상단부에서 선언하면, 호이스팅으로 인한 스코프 꼬임 현상은 방지할 수 있다.

## 함수 표현식의 장점

‘함수 표현식이 호이스팅에 영향을 받지 않는다’ 는 특징 이외에도 함수 선언식보다 유용하게 쓰이는 경우는 다음과 같다.

- 클로져로 사용
- 콜백으로 사용 (다른 함수의 인자로 넘길 수 있음)





- let과 const를 사용하여 변수를 선언하면 block단위의 scope를 만들 수 있다

- const로 선언된 변수는 재선언과 재할당 불가/ let은 재선언 안되지만 재할당 가능

-  for of 방식을 지원(for in 배열의 반복의 경우 예상치 않은 동작이 많으므로 실무에서 쓰지 않는 것이 좋다)

  ```
  for(let value of data) {
    console.log(value);
  }
  ```

- arguments vs rest parameter

  - function 내에서 argument라는 값을 이용하면 function인자값이 없더라도 인자값을 받아서 처리하는 것이 가능
  - arguments는 정해지지 않은 수 인수를 배열로 나타날 수 있게 한다
  - arrow function에서는 arguments가 존재하지 않는다. 때문에 화살표 함수에서 가변인자 값을 받아오려면 rest parameter를 활용해야 한다

  