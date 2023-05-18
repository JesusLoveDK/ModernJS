'use strict'
// Function
// 프로그램을 구성하는 데에 가장 기초적인 블럭
// 코드의 재사용성을 높이기 위해 사용되는 코드 블럭 => 재사용이 가능
// Input을 받아 함수 내부에서 프로세싱 하고, Output 을 리턴 ⇒ 특정 값의 동작이나 계산을 수행
// Input과 Output의 명세 및 정의와 Function의 이름을 직관적으로 정하는 것이 중요하다.

// 1. Function declaration => 함수 선언
// function name(param1, param2) { body... return; }
// one function === one thing
// naming : doSomething, command, verb
// * createCardAndPoint -> createCard, createPoint
// * 함수명을 정하기 어렵다면 너무 많은 일들을 하나의 함수에서 하고 있지는 않은지 체크할것
// function is object in JS
// * 그렇기에 변수 할당 가능, 파라미터로 전달가능, 함수를 리턴할 수 있음

function printHello() {     // 정해진 값만 출력 가능하므로 쓸모가 없음
    console.log('Hello');
}

printHello();

function log(message) {     // 파라미터를 전달해 주어 전달된 파라미터를 활용하는 것이 좋음
    console.log(message);
}

log('param Hello');    
log(1234);              // Number형도 String으로 변환되어 출력됨 

// 2. Parameters
// primitive parameters (원시 타입 파라미터) : 메모리에 값이 저장되어 있기 때문에 값이 그대로 전달됨
// object parameters (객체 파라미터) : 객체의 주소인 레퍼런스가 전달됨
function changeName (obj) {
    // 전달된 객체 레퍼런스가 가리키는 객체의 name 속성을 'coder' 로 변경
    obj.name = 'coder';
}

const david = { name : 'david' };
console.log(`before change : ${david.name}`);

changeName(david);  // david 함수의 레퍼런스 전달

console.log(`after change : ${david.name}`);
console.log(david);

// 3. Default parameters (added in ES6)
// 파라미터 전달되지 않았을 경우 대체되어 기본으로 사용할 파라미터
function showMessage(message = 'no message', from = 'unknown') {  
    console.log(`${message} by ${from}`);
}

showMessage('Hi!');     // default 파라미터 없다면 Hi by undefined

// 4. Rest parameters (added in ES6)
function printAll(...args) {

    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // 향상된 for문, args 의 길이만큼 반복하며 args 안의 값을 얻어옴
    for (const arg of args) {
        console.log(arg);
    }

    // foreach() 함수 이용
    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'david');

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global';   // 전역변수

function printMessage() {

    let message = 'hello';      // 지역변수
    console.log(message);
    console.log(globalMessage);

    function printChild() {
        console.log(message);
        let childMessage = 'hello';
    }

    // console.log(childMessage);  // 에러
}

printMessage();
// console.log(message);   // 에러

// 6. Return a value
// 리턴 타입이 정의되지 않은 함수는 모두 return undefined; 로 자동 설정됨
function sum(a, b) {
    return a + b;
}

console.log(`sum: ${sum(1, 2)}`); // 3

// 7. Early return, early exit
// 특정 조건에 부합하지 않을 경우 return 해 주어야 할 때, 조건 미부합시 먼저 return 해주는 것이 좋음
// 조건이 맞을 때만 이후 코드 실행
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // 긴 업그레이드 로직...
    }
}
// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // 긴 업그레이드 로직...
}

// First-class function
// JS에서는 함수를 다른 변수와 동일하게 취급
//  - 변수의 값으로 할당 가능
//  - 다른 함수의 인수로 할당 가능
//  - 다른 함수에 의해 리턴 가능

// 1. Function expression 함수 표현식
// a function declaration can be called earlier than it is defined (hoisted)
//  => 함수 선언식에 의해 정의된 함수는 정의되기 전 호출 가능, JS 엔진이 선언된 부분을 가장 위로 올려주기 때문.
//  => 함수 표현식으로 변수에 할당된 함수는 할당된 다음부터 호출이 가능함.

const print = function () {     // anonymous function => 이름 없는 함수, 필요한 부분만 작성하여 변수에 할당
    console.log('print');
}
print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 2));

// 2. Callback function using function expression
// 다른 함수의 인자로 전달되어 실행되는 함수를 뜻함
function randomQuiz(answer, printYes, printNo) {
    answer === 'love you' ? printYes() : printNo();
}

const printYes = function(){        // anonymous function
    console.log('Yes!');
}

const printNo = function print() {  // named function, 디버깅 시 stack traces 에 함수명 출력을 위해 씀
    console.log('No!');
    // print();    // recursion, 재귀 호출 => 계속하게 되면 call stack 꽉 차서 브라우저 뻗음
}

// printYes와 printNo 에 저장된 함수를 함수 randomQuiz 에 인자로 넘겨줌
// 조건 부합하므로 인자로 넘겨준 함수 두 개 중 printYes() 함수가 콜백으로 실행됨
randomQuiz('love you', printYes, printNo);

// printYes와 printNo 에 저장된 함수를 함수 randomQuiz 에 인자로 넘겨줌, 인자로 넘겨준 함수 두 개 중 printNo() 함수가 콜백으로 실행됨
randomQuiz('wrong', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function() {    // 일반 함수표현식 함수선언
    return 'simplePrint';
}

// 위의 함수를 화살표 함수로 표현하면...
const simpleArrow = () => 'simpleArrow!';

// 파라미터는 (a, b) 와 같은 방식으로 받으며 한 줄일 경우 블럭 필요없음, return 속성 명시 필요없음
const arrowParam = (a, b) => a + b;
arrowParam(1, 2);

// 블럭이 필요할 경우 블럭 할당 가능, return 속성 사용해야 함
const simpleMultiply = (a, b) => {
    // do something more...
    return a * b;
}

// IIFE : Immediately Invoked Function Expression
// 선언과 동시에 함수 호출
(function hello() {
    console.log('IIFE');
})();

// 퀴즈
// function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder
const calculate =  function (command = null, a = null, b = null) {

    // 사칙연산자에 의해 계산 실행
    switch (command) {

        case '+':
            return a + b;            

        case '-':
            return a - b;
            
        case '*':
            return a * b;

        case '/':
            return a / b;

        case '%':
            return a % b;

        default:
            throw Error('unknown command');
    }
}

console.log(`7 plus 3 : ${calculate('+', 7, 3)}`);                      // 10
console.log(`7 minus 3 : ${calculate('-', 7, 3)}`);                     // 4
console.log(`7 times 3 : ${calculate('*', 7, 3)}`);                     // 21
console.log(`7 divide 3 : ${calculate('/', 7, 3)}`);                    // 2.3333333333333335
console.log(`7 remainder 3 : ${calculate('%', 7, 3)}`);                 // 1
console.log(`invalid param - command : ${calculate('@', 7, 3)}`);       // unknown command