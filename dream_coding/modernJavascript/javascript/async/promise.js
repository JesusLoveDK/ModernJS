'use strict'

// Promise is a Javascript object for asynchronous operation.

// Promise's point
//  1. State => 실행되고 있는 상태! 비동기 작업 수행중인지... 완료되었는지...
//    - pending => fulfilled or rejected
//  2. Producer vs Consumer (제공자 vs 사용자)

// 1. Producer
//  * 새로운 Promise 객체 생성
//  * executor라는 콜백 함수를 인자로 전달 => 생성하는 순간 실행됨!!
//  * 사용자의 요청 시에만 함수를 수행해야 하는 경우 불필요한 함수 수행이 일어날 수 있기에 주의

// promise 객체를 resolve, reject 라는 콜백 함수를 전달하여 생성하고, 정상 완료되었을 시 resolve() 함수 실행하고, 인자를 넘겨준다
const promise = new Promise((resolve, reject) => {  // Promise는 클래스. new 키워드로 객체 생성 해주어야 함.
    // doing some heavy work (network, read files...)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('david');
        reject();   // 보통 new Error(); 객체 통해서 에러 전달. 에러의 이유를 잘 명시해주어야함
    }, 2000);
});

// 2. Consumers: then, catch, finally => 생성한 promise 객체를 이용하는 법
promise.then((value) => {   // then(value): promise가 정상적으로 수행된다면...resolve() 함수를 통해 전달된 인자를 받을 수 있는 메서드
    console.log(value);
})