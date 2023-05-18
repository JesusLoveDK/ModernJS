'use strict'
// Object-oriented programming
// class : template
// object : instance of a class
// Javascript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance => 기존에 존재하던 프로토타입에 추가된... 문법상으로 달달한 가짜의 편리함 제공

// 1. Class Declaration
class Person {
    // constructor (생성자, 인스턴스 생성 시 초기화를 담당)
    constructor(name, age) {
        // fields (object를 만들 때 필요한 데이터 정의)
        this.name = name;   // this. => 생성된 오브젝트의... 이 클래스의... 의미
        this.age  = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

// Person 클래스의 새로운 david 오브젝트 생성
const david = new Person('David', 27);
console.log(david.name);    
console.log(david.age);     // 클래스의 필드 접근
david.speak();              // 클래스의 메서드 접근 => 함수 호출하는 것과 유사..

// 2. Getter & Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {     // age
        return this._age;   // recursive 방지 => 생성자와 같은 변수명을 쓰면 무한히 호출되므로 변수명을 다르게 해주어야함
    }

    set age(value) {

        // 공격적 에러 핸들링
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }

        // 방어적 에러 핸들링
        this._age = value < 0 ? 0 : value;  // recursive 방지
    }
}

// 사람 나이가 -1이 될 수 없음.
// Getter, Setter는 정해진 범위 내에서만 파라미터를 설정할 수 있도록 선제적, 방어적으로 활용 가능하게 만들어주는 개념
const user1 = new User('Bill','Gates', -1);

console.log(user1.age);

// 3. Fields (public,private)
// 생성자를 사용하지 않고 클래스 내 변수 할당시
// 그냥 할당 => public
// #변수명 할당 => private

class Experiment {

    publicField = 2;        // public, 생성자를 사용하지 않음
    #privateField = 3;      // private
}

const experiment = new Experiment();        // 객체생성
console.log(experiment.publicField);        // 2
console.log(experiment.privateField);       // undefined

// 4. Static properties and methods
//  - 들어오는 값과 상관없이 클래스 자체에 고정적으로 할당되는 값을 말함
//  - 인스턴스로는 접근할 수 없고, 클래스 자체로 접근해야 함
//  - 값에 따라 변하지 않는 데이터, 함수가 필요할 시 사용하면 메모리 절약, 가독성 향상
//  - Typescript에서 많이 쓰임
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher = () => console.log(Article.publisher);   // 클래스 자체에 저장된..
}

const article1 = new Article(1);
console.log(article1.articleNumber);    // 객체 생성시 초기화된 필드는 인스턴스를 통해 접근
console.log(Article.publisher);         // static 필드는 클래스 자체에 저장되므로 클래스를 통해 접근
Article.printPublisher();               // 함수도 Class 자체로 접근 (First-class Function)


// 5. 상속 (Inheritance)
// a way for one class to extend another class
// 부모 클래스
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}

// 함수의 재정의, 다형성
//  - JS는 overriding만 지원함
//  - overloading => 파라미터에 따라 호출되는 함수가 달라지는 다형성 => JS에서는 지원하지 않음
//  - JS는 온전한 OOP 언어가 아니기때문. 근본적으로 절차적 언어이나 OOP 문법을 추가했을뿐...
class Triangle extends Shape {    
    // 부모의 getArea() 함수를 재정의하는 Overriding 예시
    draw() {
        super.draw();       // 부모의 메서드도 사용하고 싶다면 super 키워드로 
        console.log('🔺');
    }

    getArea() {
        return (this.width * this.height) / 2;
    }

    // 부모 클래스에서 정의되지 않았지만, 모든 클래스의 부모, 조상격 클래스인 Object 클래스에서 정의된 메서드이므로 오버라이딩 가능
    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();                    // 부모의 함수를 호출하지 않고 재정의된 함수를 호출
console.log(triangle.getArea());    // 부모의 함수를 호출하지 않고 재정의된 함수를 호출

// 6. instanceOf => Class Checking
// 왼쪽의 Object가 오른쪽의 Class를 이용해 만들어진 Object인지 검사하고 확인하는 수단
// true or false return
console.log(rectangle instanceof Rectangle);    // true
console.log(triangle instanceof Rectangle);     // false, 자식 클래스 사이는 같은 부모로부터 상속받더라도 다른 클래스
console.log(triangle instanceof Triangle);      // true
console.log(triangle instanceof Shape);         // true, Shape 클래스를 상속받은 클래스의 인스턴스이기 때문
console.log(triangle instanceof Object);        // true, 모든 클래스는 Object 클래스를 상속받은 자식이기 때문
console.log(triangle.toString());               // Object 클래스의 메서드 오버라이딩 가능!