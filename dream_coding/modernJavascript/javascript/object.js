'use strict'
// Objects
// one of the JS's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JS are instance of Object

// 복습. 원시 타입 (primitive type) 은 변수 하나당 값을 하나만 담을 수 있음.
// primitive 타입을 파라미터로 전달할 경우
//  - 직관적이지만, 인자가 많아지거나 복잡해질 시 개발 및 유지보수가 힘듬.
// Object (객체) 타입 사용시 이 문제를 해결할 수 있음

// 1. Literals and Properties
// object = { key : value };
// 우리가 접근할 수 있는 프로퍼티와, 그 프로퍼티의 값으로 구성됨.

// 객체 선언 방법
//  - 1. 변수에 할당, 블럭을 이용해 선언 => `object literal` syntax
//  - 2. 클래스의 프레임을 사용해 new 키워드를 통해 선언 => `object constructor` syntax
const obj1 = {};            // `object literal` syntax
const obj2 = new Object();  // `object constructor` syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const david = {     // JS는 클래스가 없어도 블럭을 활용하여 바로 ㅐbject 생성 가능
    name : 'david',
    age : 27,
}
print(david);

david.hasJob = true;        // 동적으로 오브젝트의 속성 추가가능. 
console.log(david.hasJob);
delete david.hasJob;        // 삭제도 가능
console.log(david.hasJob);

// 2. Computed Properties, 계산된 프로퍼티
// key는 항상 string 타입으로 전달해야 함
// 동적으로 Key에 대한 value를 불러올 때 사용함
console.log(david.name);
console.log(david['name']);     // computed properties, 배열에서 값을 가져오는 것처럼..
david['hasJob'] = true;         // computed properties로 프로퍼티 할당도 가능
console.log(david.hasJob);

function printValue (obj, key) {
    console.log(obj[key]);  // computed properties 용례
}

printValue(david, 'name');
printValue(david, 'age');

// 3. Property Value Shorthand
// key와 value의 이름이 같다면 이를 생략 가능하도록 하는 JS 문법
const person1 = { name: 'bob', age: 20 };
const person2 = { name: 'steve', age: 30 };
const person3 = { name: 'paul', age: 40 };
const person4 = makePerson('david', 27);

function makePerson(name, age) {
    return {
        name,
        age,
    };
}

console.log(person4);

// 4. Constructor Function (생성자 함수)
// 객체가 필요할 때마다 함수 생성을 하게 되면 불필요한 반복 코드 작성이 많아짐
// 이를 위해 값만 전달하면 객체를 생성해주는
// 다른 연산을 하지 않고 객체만 생성해주는 함수를 생성자 함수, Consturtor function 이라고 함
function Person(name, age) {
    // this = {}; => 생성자 생성 생략
    this.name = name;
    this.age = age;
    // return this => 리턴부분 생략
}
// 생성자 함수는 클래스 인스턴스 생성과 유사하게 사용가능
const person5 = new Person('Ryu', 45);
console.log(person5);

// 5. in operator : property existence check (key in obj)
console.log('name' in david);       // true
console.log('age' in david);        // true
console.log('random' in david);     // false
console.log(david.random);          // undefined (정의되지 않음)

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in david) {        // david이 가지고 있는 키들이 key 라는 지역변수에 할당됨, let 변수 앞에 써줘서 정의해준 다음 할당해야함!(use strict)
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4, 5];
for (let value of array) {      // key가 없는 반복 가능한 요소 (배열 등..) 의 요소들이 순서대로 value 라는 지역변수에 할당됨
    console.log(value);
}

// 7. Fun cloning
// Shallow copy, Deep copy 개념!!!
// Object.assign(destination, [obj1, obj2, obj3...]);
const user = { name : 'david', age : 20 }
const user2 = user;     // shallow copy, user 변수의 레퍼런스만 user2에 담김
console.log(user);      

console.clear();

// 클로닝 => Deep copy!
// 기존 배열의 레퍼런스가 저장되는 것이 아닌, 안의 키와 밸류를 모두 뽑아내어 저장
// 레퍼런스는 달라짐
// 클로닝 => old way
const user3 = {};
for (let key in user) {         // user를 반복문이 순회하며 각 키의 요소들을 user3에 같은 키로 저장
    user3[key] = user[key];
}

console.log(user3);

// 클로닝 => new way
// Object 메서드의 assign을 사용
// 최초 파라미터는 합쳐질 값을 저장할 타깃, 그 이후 파라미터는 모두 키와 값을 합쳐서 출력
// 여러 개의 파라미터를 할당할 수도 있음
//   - TIP : 메서드나 API 사용시 INPUT 과 OUTPUT을 숙지하는 것이 중요!!
const user4 = Object.assign({}, user);

console.log(user4);

console.log(user === user2);    // true, 객체 간 레퍼런스 값이 같고 비교되는 것은 서로의 레퍼런스이므로
console.log(user === user4);    // false, user4는 내부 값이 복사된 별도의 레퍼런스를 가진 객체이므로

// 여러 값이 저장되는 assign 예시
const fruit1 = { color : 'red' };
const fruit2 = { color : 'blue', size : 'big' };

const mixed = Object.assign({}, fruit1, fruit2);    // 빈 배열에, fruit1과 fruit2 를 합친 값을 저장하여라~~
console.log(mixed);
console.log(mixed.color);   // blue, 중복되는 키는 가장 마지막에 저장되는 값을 따름 (뒤의 값으로 계속 덮어씌워짐)
console.log(mixed.size);    // big