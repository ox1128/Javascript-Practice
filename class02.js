//자료형
const name1 = "Mike";
const name2 = 'Mike';
const name3 = `Mike`;

const message = "I'm a boy.";
const message2 = 'I\'m a boy.';

const message3 = `My name is ${name}`;

const message4 = `나는 ${30+1}살 입니다.`;
console.log(message4);

const age = 30;
const PI = 3.14;

console.log(1+2); // + 더하기
console.log(10-3);// - 빼기
console.log(3*2); // * 곱하기
console.log(6/3); // / 나누기
console.log(6%4); // $ 나머지

//= Infinity
const x = 1/0;
console.log(x);

//NaN = Not a Number
const name = "Mike";
const y = name/2;

console.log(y);

//Boolean
const a = true; // 참
const b = false; // 거짓
const name = "Mike";
const age = 30;

console.log(name == 'Mike');
console.log(age > 40);

//undefined
let age;
console.log(age);

//null
let user = null;

//typeof 연산자
const name = "Mike";

console.log(typeof 3);
console.log(typeof name);
console.log(typeof true);
console.log(typeof "xxx");
console.log(typeof null);
console.log(typeof undefined);

typeof null; //"object" 객체형
//null =/ 객체

//문자형도 더할 수 있음.
const name = "Mike";
const a = "나는 ";
const b = " 입니다.";
console.log(a + name + b);

const age = 30;
console.log(a + age + "살" + b);