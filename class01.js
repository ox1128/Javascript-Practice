/* 좋지 못한 예
name = "Mike";
age = 30;

alert(name);
console.log(age);*/

//let은 한번 선언 후 다른 값으로 변경 가능, let을 제외하고 사용하면 됨.
let name = "Mike";
let name = "google";
/*에러 발생으로 이미 사용중이라고 알 수 있음 */

//const은 절대로 바뀌지 않는 상수, 대문자로 선언하는 것이 좋음

/*결론:
자바스크립트에서 변수를 선언할 때 변하지 않는 값은 const,
변할 수 있는 값은 let으로 선언*/

/*Tips:
첫째, 변수는 문자와 숫자, $와_만 사용
둘째, 첫글자는 숫자가 될 수 없다. let 1stGrade = 'A+'; 불가능
셋째, 예약어는 사용할 수 없다. let let = 99; 불가능
넷째, 가급적 상수는 대문자로 알려주기 const MAX_SIZE = 99;
다섯 째, 변수명은 읽기 쉽고 이해할 수 있게 선언 let userNumber = 3;
*/