//#2.2 Variables 
console.log("lalalalalalala");
console.log(123123123123);

//--참고--
const veryLongVariableName = 0 ;    //변수 값 설정시 JavaScript에서는 공백이 필요할때는 첫 알파멧에 대문자로 처리

very_long_variable_name = 0;        //변수 값 설정시 Python에서는 공백이 필요할때는 '_'문자로 처리,const 생략
//----
 
const a = 10;
const b = 2;
const myName = "jiyong";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

//#2.3 const and let

const c = 10;   //const는 절대 값을 업데이트할 수 없음
const d = 2;
let myNameIs = "jiyong";

console.log(c + d);
console.log(c * d);
console.log(c / d);
console.log("hello " + myNameIs);

myNameIs = "jiyongsim"  //let는 값을 업데이트할 수 있음

console.log("your new name is " + myNameIs);

//#2.4 Booleans

const amYouFat= true;   //Python에서는 True(False)
const amIFat = null;    //Python에서는 none, null 값이 비어있는 상태
let something;  //undefiend 메모리는 만들어져있지만 값이 정의되어 있지 않은 상태
console.log(something, amIFat);

//#2.5 Arrays

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

const nonesense = [1, 2, "hello", true, false, null, undefined, "jiyong"];

//array에서 item받아오기
console.log(daysOfWeek[5]);

//array안에 요일 더 추가하기 
daysOfWeek.push("sun");

console.log(daysOfWeek);

const apple

/*정리
    array의 목적은 하나의 variable 안에 테이터의 list를 갖는 것
*/