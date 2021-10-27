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

 