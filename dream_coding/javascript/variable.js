// 'use strict';

// Variable => 변수, 변경될 수 있는 값
// let (added in ES6)

let global_name = 'David Kim';  // 파일 내부 전체 접근가능한 전역변수

// 블록 
{
    let name = 'david';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(global_name);
}

console.log(name); 
console.log(global_name);