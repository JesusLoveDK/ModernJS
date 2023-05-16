window.onload = function(){
    
}

// TODO: 테스트할것
function ask(question, yes, no) {
    confirm(question) ? yes() : no();
}

// 함수표현식 테스트
// 자바스크립트는 함수를 "특별한 종류의 값으로 취급" => "특별한 동작을 하는 '구조'" 로 취급하는 다른 언어와는 차이가 있다
let ask_test = ask;

// 화살표 함수 테스트
// ask_test(
//     "동의하십니까?",
//     () => alert('동의하셨습니다.'),
//     () => alert('취소 버튼을 누르셨습니다.'),
// )

console.log('test');
console.log('test');