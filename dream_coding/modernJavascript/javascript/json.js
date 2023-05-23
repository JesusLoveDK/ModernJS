'use strict'
// JSON
// JavaScript Object Notation

// 1. Object to JSON, Serialization
// JSON.stringify(obj)
// JavaScript 객체나 배열을 JSON 형식의 문자열로 변환
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);  // ["apple","banana"], JSON의 요소는 ' single quotation이 아니라 double quotation 으로 들어감

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump : () => {  // 내장 함수, 메서드
        console.log(`${this.name} can jump!`);
    },
}

// 객체의 fields, 즉 데이터만 JSON에 포함됨 (Symbol 타입도 안포함됨 => JS만의 자료형이기 때문. JSON은 언어 & 플랫폼 Independent
// 지금은 객체의 메서드와 Symbol 타입도 포함되네...?
json = JSON.stringify(rabbit);
console.log(json);

// JSON.stringify 의 파라미터 2 : replacer => 원하는 키 값만 JSON 변환
// case 1. 객체의 키 값을 전달하여 원하는 키 값에 해당하는 요소만 JSON으로 변환
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

// case 2. 콜백 함수를 전달하여 세밀하케 컨트롤
// key와 value를 인자로 받는 콜백 함수를 사용할 수 있으며, 이 콜백 함수를 이용해 값을 원하는 대로 컨트롤 가능
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object, Deserialization
// JSON.parse(json)
console.clear();
json = JSON.stringify(rabbit);  // 객체 => JSON

const obj = JSON.parse(json);   // JSON => 객체, 객체 안의 fields 이외 함수나 symbol은 날라감
console.log(obj);               
rabbit.jump();
// obj.jump();     // JSON으로 변환될 때 날라가서 존재하지 않음

console.log(rabbit.birthDate.getDate());    // 23, 
// console.log(obj.birthDate.getDate());       // 에러, JSON화된 객체는 객체 결과의 값 자체가 String 등의 별도의 형태로 저장되기 때문에 객체로 호출시 오류 발생
console.log(obj.birthDate);                 // 객체의 키값으로 접근하여 value를 뽑아내 주어야 함

const obj2 = JSON.parse(json, (key, value) => {
    console.log(`key : ${key}, value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});   // JSON => 객체, 콜백 함수를 사용하여 키값 및 value에 따른 파싱 결과 변환 가능

console.log(rabbit.birthDate.getDate());
console.log(obj2.birthDate.getDate());