'use strict'

// userStorage 객체 생성
const loginUser = (id, pw) => new Promise((resolve, reject) => {

    setTimeout(() => {
        if (
            (id === 'david' && pw === 'jesuslove1@') ||
            (id === 'coder' && pw === 'academy')
        ) {
            
            resolve(id);

        } else {

            reject(new Error('User not Found'));

        }
    }, 500);

});

const getRoles = (user) => new Promise((resolve, reject) => {

    setTimeout(() => {
        if (user === 'david') {
            alert('권한 획득 성공');
            resolve({name : 'david', role : 'admin'});
        } else {
            alert('권한 획득 실패');
            reject(new Error('no access'));
        }
    }, 1000);

});

function loginAndGetRoles(){

    const userId = prompt('enter your id');
    const userPw = prompt('enter your password');
    
    loginUser(userId, userPw)
        .then(getRoles)
            .catch(console.log)
        .then((result) => {
            console.log(`your name is ${result.name}`)
            console.log(`your role is ${result.role}`)
        })
            .catch(console.log)

}
