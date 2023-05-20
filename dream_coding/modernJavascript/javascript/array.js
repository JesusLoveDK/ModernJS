'use strict'

// Array👨‍👩‍👧‍👦

// 1. 배열 선언 Array Declaration
const arr1 = new Array();   // new 키워드로
const arr2 = [1, 2];        // 괄호로

// Index 를 기준으로 데이터가 저장되는 배열
// 2. Index position
const fruits = ['🍓', '🍏'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);                 // fruits 배열의 0번째 (첫번째) 인덱스에 접근. Object의 key와 비슷한 개념
console.log(fruits[1]);                 // fruits 배열의 1번째 인덱스에 접근. Object의 key와 비슷한 개념
console.log(fruits[2]);                 // undefined => 들어있지 않은값
console.log(fruits[fruits.length - 1]); // 배열의 마지막번째 값에 접근하고 싶다면 배열의 length -1 의 인덱스에 접근 (0부터 시작)

// 3. Looping (반복 순회)
// print all fruits
console.clear();
//   3-1 전통적인 for문 선언 후 배열의 인덱스 순차적으로 적용
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//   3-2 for 값 0f 배열 문 => 배열의 각 값을 추출 (key 추출할 때는 for let 키 in 배열)
for (let fruit of fruits) {
    console.log(fruit);
}

//   3-3 forEach() 콜백함수 호출
//      * 콜백 함수를 받아 처리해주는 API
//      * 인자 1 : 콜백 함수 () => void 형태의 함수
//      *   - value, index, array(배열 전체) 세 개의 파라미터 
//      * 인자 2 : this
// 배열 안에 있는 요소마다 전달한 콜백 함수를 실행

fruits.forEach(function (fruit, idx, arr) {
    console.log(arr);
    console.log(idx);
    console.log(fruit);
})

// array function을 활용하면 더욱 깔끔하게 반복문 순회 가능
const test1 = fruits.forEach((fruit) => console.log(fruit));

console.clear();
// 4. 배열 요소 추가, 삭제, 복사 Addtion, Deletion, Copy
// push : add an item to the End
fruits.push('🍍', '🍉');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
console.log(fruits);

// unshift : add an item to the beginning
fruits.unshift('🍊', '🍇');
console.log(fruits);

// shift : remove an item to the beginning
fruits.shift();
console.log(fruits);

// 중요 !! shift, unshift are much slower than pop, push
// 자료구조 때문!!
// 배열 맨 뒤에 데이터를 넣고 빼는 것은 배열의 자료구조가 변하지 않음. 인덱스 이용해서 간단히 가능.
// 하지만 배열 맨 앞에 데이터를 넣고 빼려면... 배열 맨 앞의 요소를 지우거나 추가하고, 나머지 요소들을 전~~~~부 앞이나 뒤 인덱스로 이사시켜줘야함...

// splice : remove an item by index position
