'use strict';

// 1. Variable => 변수, 변경될 수 있는 값 (mutable data type)

// 1-1. let (added in ES6)
let global_name = 'David Kim';  // 파일 내부 전체 접근가능한 글로벌 스코프 (전역변수)

// 블록 스코프
{
    let name = 'david';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(global_name);
}
console.log(name); 
console.log(global_name);


// 1-2. var (절대 사용하지마!!)
//  var hoisting => 어디에서 선언하든 항상 제일 위로 변수선언을 끌어 올려 주는 것 (hoisting 자체가 끌올 뜻)
//  has no block scope => 블록스코프 안먹음
//  유연성이라고 생각할 수도 있지만 선언하지도 않았는데 값이 할당되고... 오류터짐...

console.log(age);   // undefined

{
    age = 4;            
    var age;
}

console.log(age);   // 4, 블록스코프 안먹는것 확인됨. 블록스코프가 먹으면 이건 4가 아니어야 정상임

// 2. Constants => 상수, 변경되지 않는 데이터 타입 (immutable data type)
//  별다른 이유가 없다면 immutable data type 으로 코드를 작성해라.
//  - 보안성 뛰어남
//  - 스레드 안정성 (thread safety) => 동시에 변동되는 것을 방지
//  - Human Mistake 최소화
const days_in_week = 7;
const max_number = 5;

// 3. Variable Types => JS 데이터 타입
// Primitive type : number, string, boolean, null, undefined, symbol
//  => 더 이상 나뉠 수 없는 최소한의 단위 => 국어의 형태소...
// object, box container => primitive type 들을 한 단위로 묶어서 관리하게 해 줄 수 있는 것
//  => 이름과 값의 쌍으로 구성된 속성(Property)의 집합.
// function
//  first-class function => 이 프로그래밍 언어에서는 함수도 하나의 특별한 자료형으로 취급해서
//  변수에 할당하거나 콜백 함수에 인자로 전달, 리턴 타입에 할당하여 리턴할 수 있음

// 3-1 숫자 총괄 => number
const count = 17;   // integer
const size  = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);    // 정수형이든, 실수형이든 모두 number

const infinity = 1 / 0;             // 양수를 0으로 나누면 무한대
const negative_infinity = -1 / 0;   // 음수를 0으로 나누면 마이너스 무한대
const nAn = 'not a number' / 2;     // 숫자가 아닌 것을 숫자로 나누는 등의 행위를 하면 NaN (not a number) 에러, valid한 값인지 확인하자 꼭.
console.log(infinity);
console.log(negative_infinity);
console.log(nAn);

// bigInt (엄청나게 큰 수를 표현하기 위한), chrome과 firefox 에서만 지원
const bigInt = 341242142142142142143213421342134213421342134213421421434n;
console.log(`value : ${bigInt}, type: ${typeof bigInt}`);


// string
// 문자열의 길이와 상관없이 문자형태면 string
// template literals
// `` backtick 기호를 이용하여 그 안에 ${변수} 의 형태로 문자열을 입력해주면, 문자열에 변수의 string 값이 자동으로 적용됨
const char = 'c';
const david = 'david';
const greeting = 'hello' + david;
console.log(`value : ${char}, type: ${typeof char}`);           
console.log(`value : ${david}, type: ${typeof david}`);
console.log(`value : ${greeting}, type: ${typeof greeting}`);   // 모두 string

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value (이외 모두)
const can_read = true;
const boolean_test = 3 < 1;

console.log(`value : ${can_read}, type: ${typeof can_read}`);           
console.log(`value : ${boolean_test}, type: ${typeof boolean_test}`);

// null
let nothing = null;
console.log(`value : ${nothing}, type: ${typeof nothing}`);     // null, object

// undefined
let x;
console.log(`value : ${x}, type: ${typeof x}`);                 // undefined, undefined
// null vs undefined => null은 비어있는 값이며 object 자료형, undefined 는 정의되지 않은 값이며 undefined 자료형

// symbol, create unique identifiers for objects
//  => 고유한 식별자, 생성되는 심볼은 변경이 불가능한 원시 값, 각각의 심볼 내부에 설정된 값이 같더라도 다른 값
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);   // false, 각각의 심볼 내부에 설정된 값이 같더라도 같지 않은 것으로 인식
// symbol의 값을 출력할 때는 그대로 출력하면 오류나고, .description 이용하여 string 변환해주어야 함
console.log(`value : ${symbol1.description}, type: ${typeof symbol1}`);     // id, symbol

// object => 객체
// real-type object
// constant keyword
//  => 한번 할당한 object는 다시는 다른 object로의 할당이 불가.
// 포인터(변수의 주소)가 가리키고 있는 값, 즉 david_kim.age 등의 `값` 은 변경 가능함
const david_kim = {name : 'david', age : 27}
console.log(`value : ${david_kim}, type: ${typeof david_kim}`);         // [object Object], object
console.log(`value : ${david_kim.age}, type: ${typeof david_kim}`);     // 27, object
david_kim.age = 28;
console.log(`value : ${david_kim.age}, type: ${typeof david_kim}`);     // 28, object


// 4. Dynamic typing : dynamically typed language (vs statically typed language)
//  => 선언할 때 타입을 선언해 주지 않고, 할당된 값에 따라 자동으로 설정되거나 변경됨
//  => 예기치 못한 변수의 타입 변경이 있을 수가 있다.
let text = 'hello';
console.log(text.charAt(0));    // h, string indexing 함수
console.log(`value : ${text}, type: ${typeof text}`);     // hello, string
text = 1;
console.log(`value : ${text}, type: ${typeof text}`);     // 1, number => 타입 변환이 일어남
text = '7' + 5;     // string + number 연산 => 덧셈연산
console.log(`value : ${text}, type: ${typeof text}`);     // 75, string => 덧셈연산의 경우 JS 엔진이 number를 string 으로 변환하여 계산됨.
text = '8' / '2';   // string / string 연산 => 나눗셈연산
console.log(`value : ${text}, type: ${typeof text}`);     // 4, number => 나눗셈연산의 경우 JS 엔진이 string을 number 로 변환하여 계산됨.
// console.log(text.charAt(0));    // runtime 에러 => text.charAt is not a Function (number 자료형은 indexing 함수가 없으므로)

// => 이것들때문에 못해먹겠다!! TypeScript 나옴!!
// JS에서 자료형을 사용할 수 있도록 해줌 => JS 심화