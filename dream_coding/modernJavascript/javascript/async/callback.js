'use strict'

// Javascript is synchronous.
// Execute the code block in order after hoising.
// hoisting: var, function declaration
console.log('1');
// 비동기 콜백 함수의 대표적인 예시. 1초가 지난 후 Call back 함수를 호출해줘..
// JS 엔진은 위에서부터 아래로 코드를 읽는데, 콜백 함수를 발견하면 해당 API 호출하는 주체에 요청하고(큐에 담김) 스택에서는 제외. (해당 함수는 브라우저 API)
// JS 엔진 스택의 요소들이 모두 실행되고 나서 큐의 요소들이 실행
setTimeout(() => console.log('2'), 1000);
console.log('3');

// 결과 : 1 => 3 => 1초후 => 2

// 동기 콜백 Synchronous Callback
// 함수 선언은 hoisting 되어 맨 위로 전달됨
function printImmediately(print) {
    print();
}

// 동기적, 바로 해당 함수를 호출
printImmediately(() => console.log('print'));

// 비동기 콜백 Asynchronous Callback
// 함수 선언은 역시 hoisting 되어 맨 위로 전달됨
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

// 하지만 해당 함수에서 콜백 함수의 호출을 비동기적으로 하기 때문에 스택에 담기지 않고 큐에서 실행
printWithDelay(() => console.log('async Callback'), 2000);

// Callback Hell Example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'david' && password === 'jesuslove1@') ||
                (id === 'coder' && password === 'academy')
            ) {
                alert('로그인 성공');
                onSuccess(id);
            } else {
                onError(new Error('not Found'));
            }
        }, 500);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'david') {
                alert('권한 획득 성공');
                onSuccess({name : 'david', role: 'admin'});
            } else {
                alert('권한 획득 실패');
                onError(new Error('no access'));
            }
        }, 1000);
    }
}
// userStorage 객체 생성
const userStorage = new UserStorage;

const userId = prompt('enter your id');
const userPw = prompt('enter your password');

// My Callback Hell answer
// userStorage.loginUser
//     (   userId,     // 아이디
//         userPw,     // 비번
//         (paramId) => userStorage.getRoles(paramId, (paramSuccess) => console.log(paramSuccess), // 콜백 1 전달 => 그 안에 또 콜백 전달...
//             (paramError) => console.log(paramError)), 
//         (error) => console.log(error)   // 콜백 2 전달
//     );

// 콜백 지옥이란?
// 비동기 작업을 처리할 때 콜백 함수를 중첩하면서 발생하는 코드의 가독성과 유지보수의 어려움을 지칭
// 콜백 함수가 중첩되면서 코드의 구조가 깊어지고, 오류 처리 등이 복잡해지는 것이 콜백 지옥의 특징

// 콜백 체인의 문제점
// 1. 가독성 매우 떨어짐
// 2. 디버깅, 에러 처리 매우 어려움
// 아래 함수와 같이 콜백 함수 안에 또 콜백 함수...

// Teacher Ellie's Answer
// 함수 1 호출 => 함수 1 완료 후 함수 2 호출
userStorage.loginUser(
    userId,
    userPw,
    user => {   // 화살표 함수에서 인자 하나일 경우 괄호 생략 가능
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
                console.log(userWithRole);
            },
            error => {
                console.log(error);
            },
        )
    },
    error => {console.log(error)}
);