
// Callback Hell Example
class UserStorage {
    // loginUser(id, password, onSuccess, onError) {
    //     setTimeout(() => {
    //         if (
    //             (id === 'david' && password === 'jesuslove1@') ||
    //             (id === 'coder' && password === 'academy')
    //         ) {
    //             alert('로그인 성공');
    //             onSuccess(id);
    //         } else {
    //             onError(new Error('not Found'));
    //         }
    //     }, 500);
    // }

    loginUser(id, password) {
        return new Promise((resolve, reject) => {

            let userId = this.id;
            let userPw = this.password;

            setTimeout(() => {
                if (
                    (userId === 'david' && userPw === 'jesuslove1@') ||
                    (userId === 'coder' && userPw === 'academy')
                ) {
                    
                    resolve(userId);

                } else {

                    reject(new Error('User not Found'));

                }
            }, 500);


        })
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (user === 'david') {
                    alert('권한 획득 성공');
                    resolve({name : 'david', role : 'admin'});
                } else {
                    alert('권한 획득 실패');
                    reject(new Error('no access'));
                }
            }, 1000);

        })
    }
}

const userId = prompt('enter your id');
const userPw = prompt('enter your password');

// userStorage 객체 생성
const userStorage = new UserStorage;


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