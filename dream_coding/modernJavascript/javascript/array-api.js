'use strict'
// Q1. make a string out of an array
{
const fruits = ['apple', 'banana', 'orange'];

// My
// const result = fruits.toString(fruits);

// Teacher Ellie's
const result = fruits.join(", and ");

console.log('Question 1');
console.log(result);
}

// Q2. make an array out of a string
{
const fruits = '🍎, 🥝, 🍌, 🍒';
const result = fruits.split(',');   // 구분자를 기준으로 문자열을 나누어 배열로 만듬. 구분자 전달하지 않을 경우 통으로 하나의 배열로 저장됨

console.log('Question 2');
console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
const array = [1, 2, 3, 4, 5];
const result = array.reverse();

console.log('Question 3');
console.log(result);
console.log(array);     // 원본 배열 자체를 변화시킴
}

// Q4. make new array without the first two elements
{
const array = [1, 2, 3, 4, 5];
// const arraySplice = array.splice(2); => 원 배열의 인덱스 2부터 끝까지의 값 (파라미터 2 주어지지 않았으므로) 이 삭제되어 다른 배열에 저장됨
// or... 원 배열의 값을 첫 인덱스부터 2개 삭제해도 됨

// My
// array.splice(0, 2);      // 원본 배열 자체를 변화시킴. 클립보드 잘라내기 기능과 유사하다.
// console.log(array);

// Teacher Ellie's
const result = array.slice(2, array.length);    // 파라미터2 - 1 까지의 값 (마지막 값은 배제됨), 원본 배열 자체를 변화시키지는 않음

console.log('Question 4');
console.log(result);
console.log(array);
}

class Student {
constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
}
}

const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
// My
// const qualifiedStudents = [];

// for (let std of students) {
//     if (std.score === 90) {
//         qualifiedStudents.push(std);
//     }
// }

// console.log(qualifiedStudents);

// Teacher Ellie's
// Array.prototype.find() API
// 콜백 함수를 인자로 받아, 배열의 각 요소를 순회하며 조건을 만족하는 요소가 있는지 체크
// 만족하는 값이 있을 경우 그 값에 해당하는 row을 리턴하고, 검색을 멈춤

// const result = students.find(function (student) {  함수 표현식 형태
//     return student.score === 90;
// });
const result = students.find((student) => student.score === 90);

console.log('Question 5');
console.log(result);
}

// Q6. make an array of enrolled students
{
// My
// const enrolledStudents = [];

// students.forEach((std) => {
//     if (std.enrolled) {
//         enrolledStudents.push(std);
//     }
// });

// console.log(enrolledStudents);

// Teacher Ellie's
// filter()
// 콜백 함수를 인자로 받아, 배열의 각 요소를 순회하며 조건을 만족하는 요소가 있는지 체크
// 만족하는 값이 있을 경우 그 값에 해당하는 row를 별도의 배열에 저장하고, 끝까지 순회
// 결과 : 만족하는 값에 해당하는 row들이 저장된 별도의 배열을 리턴
const result = students.filter((student) => student.enrolled);

console.log('Question 6');
console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]

{
// Map() API
// 배열의 요소 하나하나를 변환
// 배열 안의 요소를 지정된 콜백 함수의 인자로 호출
// 콜백 함수의 결과는 별도의 배열에 매핑되어 반환됨
const result = students.map((student) => student.score);

console.log('Question 7');
console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
// My
// const isLowerThan50 = (score) => score < 50;
// const lowerExists = onlyScores.some(isLowerThan50);
// console.log(lowerExists);

// Teacher Ellie's
// 배열의 값 중에 하나라도 콜백 함수의 조건을 만족하면 true
const result = students.some((student) => student.score < 50);

// 배열의 모든 값이 콜백 함수의 조건을 만족해야 true
const result2 = students.every((student) => student.score < 50);

console.log('Question 8');
console.log(result);        // true
console.log(result2);       // false
}

// Q9. compute students' average score
{
// My
// const studentsCount = students.length;
// let scoreSum = 0;
// onlyScores.forEach((scr) => scoreSum += scr);

// let avgScore = scoreSum / studentsCount;

// console.log(avgScore);

// Teacher Ellie's
// reduce() API
// 우리가 원하는 시작점부터, 배열에 있는 모든 값들을 누적하여 리턴
// param1 => 콜백 함수 (이전값, 현재값, 현재 인덱스, 호출한 원 배열 인자로 받는 함수)
// param2 => initial value
// const result = students.reduce((prev, curr) => {
//     console.log('--------------');
//     console.log(prev);
//     console.log(curr);
//     return prev + curr.score;
// }, 0);

const result = students.reduce((prev, curr) => prev + curr.score, 0);

console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
// My
// const scoreString = onlyScores.toString();
// console.log(scoreString);

// Teacher Ellie's
// 함수 중 배열을 리턴하는 아이들은 묶어서 프로그래밍 가능
// 이를 함수형 프로그래밍이라고 함
const result = students
    .map(student => student.score)  // 배열 안의 객체에서 점수만 리턴
    .filter(score => score >= 50)   // 50점 이상인 애들만...
    .join();                        // 배열 => 문자열

console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
const result = students.map(student => student.score)
    .sort((a, b) => a - b)  // 연산 결과가 음수일 경우 첫 번째 파라미터의 값을 저장. 즉 오름차순 정렬. b - a 일 경우 내림차순 정렬
    .join();

console.log(result);
}