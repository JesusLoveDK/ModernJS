// 1. String Concatenation => 문자열 결합
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 
''''
1 + 2 = ${1 + 2}
`);     
// ` 이 backtick 기호가 좋은 이유는, 내부에 ' 나 " 즉 문자열 관련 특수문자와 줄바꿈 등이 있어도 그대로 출력해줌.
// template literals

// 2. Numeric operators => 숫자 연산자
console.log(1 + 1);     // add, 1
console.log(1 - 1);     // substract, 0
console.log(5 * 2);     // multiply, 10
console.log(5 / 2);     // divide, 2
console.log(5 % 2);     // remainder, 1
console.log(2 ** 3);    // exponentiation, 2의 3승, 8

// 3. Increment and Decrement operators => 증감 연산자
let counter = 2;
const preIncrement = ++counter;     // 변수 선언 이전에 변수에 증감 연산 해줌, 할당되는 변수에도 증감 연산의 결과가 저장됨
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);    // 3, 3
const postIncrement = counter++;    // 변수 선언 이후에 증감 연산 해줌, 할당되는 변수에는 증감 연산 이전의 결과가 저장됨
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);    // 3, 4
const preDecrement = --counter;
console.log(`preDecrement : ${preDecrement}, counter : ${counter}`);    // 3, 3
const postDecrement = counter--;
console.log(`postDecrement : ${postDecrement}, counter : ${counter}`);    // 3, 2

// 4. Assignment operators => 할당연산자
// 사칙연산자를 등호의 왼쪽에 두면 좌측과 우측 변수의 사칙연산 결과를 좌측 변수에 저장
let x = 6;
let y = 3;
console.log(x += y);     // x = x + y;
console.log(x -= y);     // x = x - y;
console.log(x *= y);     // x = x * y;
console.log(x /= y);     // x = x / y;
console.log(x %= y);     // x = x % y;


// 5. Comparison operators => 비교연산자
console.log(10 < 6);    // false
console.log(10 <= 6);   // false
console.log(10 >= 6);   // true
console.log(10 > 6);    // true

// 6. Logical operators : 논리연산자
// || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;   // false

// || or 연산자는 처음으로 true가 나오면 그 조건에서 멈춤
// 그 이유는 or 조건 중 하나만 true 여도 or 연산자는 true를 반환하기 때문
// 연산이 Heavy 하거나 expression이 복잡한 친구는 or 연산자의 맨 뒤쪽으로 가는 것이 효율적 (true가 나온다면 불필요하게 heavy한 작업 안 할 수도 있으므로
console.log(`or : ${check() || value1 || value2}`);     // BAD CODE     => 불필요한 과정 거침
console.log(`or : ${value1 || value2 || check()}`);     // BETTER CODE  => 불필요한 과정 거치지 않음

// AND && 연산자는 조건이 모두 true여야 true를 반환하는 연산자
// 조건 중 하나라도 false면 그 조건에서 멈춤
// 역시 Heavy한 조건이나 연산은 맨 뒤로..
console.log(`and : ${value1 && value2 && check()}`);

// 간단한 null 체크로도 사용가능
// nullableObject && nullableObject.somthing; => null일 경우 false

function check() {
    for (let i = 0; i < 10; i++) {
        // wasting time
        console.log('test');
    }
    return true;
}

// ! (not) 연산자   => 참과 거짓의 반대
console.log(!value1);   // false
console.log(!value2);   // true

// 7. Equality => 동등 연산자
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (타입변환 일어나며 변화)
console.log(stringFive == numberFive);  // true
console.log(stringFive != numberFive);  // false

// === strict equality, no type conversion (타입변환 없음, 타입이 다르면 false) => 웬만하면 이게 좋다
console.log(stringFive === numberFive);  // false
console.log(stringFive !== numberFive);  // true

// object equality by reference
const david1 = {name : 'david'};
const david2 = {name : 'david'};
const david3 = david1;
console.log(david1 == david2);      // false => 저장된 변수의 주소(레퍼런스)가 달라 false
console.log(david1 === david2);     // false => 저장된 변수의 주소(레퍼런스)가 달라 false
console.log(david1 === david3);     // true => 저장된 변수의 주소(레퍼런스)가 같아 true
// 즉, 객체 간의 동등 비교에서 비교를 위해 사용되는 값은 변수의 주소(레퍼런스)임! 객체 간 비교에서, 타입은 중요하지 않다..

// equality - puzzler
console.log(0 == false);            // true (false : 0, null, undefined, NaN, '' 으로 취급될 수 있음..)
console.log(0 === false);           // false (형이 달라서..)
console.log('' == false);           // true
console.log('' === false);          // false
console.log(null == undefined);     // true
console.log(null === undefined);    // false

// 8. Conditional operators : if문
// if, else if, else
const name1 = 'david';
if (name1 === 'david') {
    console.log(`welcome, ${name1}`);
} else if (name1 === 'coder') {
    console.log(`welcome, ${name1}`);
} else {
    console.log(`who are you?`);
}

// 9. Ternary operator : ?, : => 삼항 연산자
// 조건 ? value1 : value2;
console.log(name1 === 'david' ? 'yes' : 'no');  // yes

// 10. switch operator
// 아래와 같은 경우 사용하면 좋음
//  * if문 여러 개 사용해아 할 때
//  * enum 같은 값들을 체크해야 할 때 (정해진 값 검사)
//  * 다중 타입 체크가 필요할 때
const browser = 'IE';

switch (browser) {          // 결과 : go away
    case 'IE' :
        console.log('go away!');
        break;
    
    case 'Chrome' :
    case 'Firefox' :
        console.log('love you!');
        break;

    default :
        console.log('same all!');
        break;
}

// switch문 에서 break 안써주면 조건에 부합하더라도 탈출 안됨, 주의!!
switch (browser) {          // 결과 : go away, love you, same all
    case 'IE' :
        console.log('go away!');    
    case 'Chrome' :
    case 'Firefox' :
        console.log('love you!');
    default :
        console.log('same all!');
}

// 11. Loops (반복문)

// `while` loop
// 실행 조건 체크 후 조건이 true일 경우에
// 그 다음 바디 코드 실행됨

let i = 3;
while (i > 0) {
    console.log(`while : ${i}`);
    i--;
}

// `do while` loop
// do 안에 있는 바디 코드 실행 후
// 조건 검사하여 반복 여부 결정
do {
    console.log(`do while : ${i}`);
    i--;
} while (i > 0);    // 이 코드가 실행될 때 i = 0 이지만 블럭을 먼저 실행하므로 반복하지 않고 1회 실행 후 종료

// 코드를 먼저 실행하고 싶다면 do while, 조건을 먼저 체크하고 싶다면 while

// for loop
// for(begin; condition; step)
// 실행순서 : begin 최초 실행, condition 검사, 내부 코드 실행, step 실행 의 반복
for (i = 3; i > 0; i--) {
    console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = i - 2) { // 인라인 변수 선언, for 블럭 안에서만 적용되는 지역 변수
    console.log(`inline variable declaration for : ${i}`);
}

// nested loops => 다중 반복문
// CPU에 부하를 줄 수 있음
// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(`i : ${i}, j : ${j}`);
//     }
// }

// break, continue
// Q1. iterate from 0 to 10 and print only even number (use continue) => continue는 현재 반복문

for (let i = 0; i < 11; i++) {

    if (i % 2 !== 0) {
        continue;
    }

    console.log(`for even : ${i}`);
}

// Q2. iterate from 0 to 10 and print number until reaching 8 (use break)

for (let i = 0; i <= 10; i++) {

    if (i > 8) {
        break;
    }

    console.log(`for break : ${i}`);

}