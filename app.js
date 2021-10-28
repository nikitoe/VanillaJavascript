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

/*정리
    array의 목적은 하나의 variable 안에 테이터의 list를 갖는 것
*/

//#2.6 Objects 

const player = {
    name: "jiyong",
    points: 10,
    fat: true,
};

console.log(player);                //object를 전체 출력한 방법
console.log(player.name);           //object안의 내용을 출력한 방법
console.log(player["name"]);        //object안의 내용을 출력한 방법

console.log(player);
player.fat = false;                 //object안의 내용 변경 가능
console.log(player);

console.log(player);
player.lastName = "sim";            //object안의 내용 추가 가능
console.log(player);

console.log(player.points); 
player.points = player.points + 15; //oject의 내용을 불러와서 연산 가능
console.log(player.points);

//#2.7 Functions part

/**정리
 * function은 계속 반복해서 사용할 수 있는 코드 조각
 * 또한 어떤 코드를 캡슐화해서 실행을 여러 번 할 수 있게 해준다.
 * 
 * argument는 function을 실행하는 동안 어떤 정보를  function에게 보낼 수 있는 방법
 */

function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm "+ age);
}

sayHello("jiyong", 10);
sayHello("nico", 23); 
sayHello("dal", 21);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

function divide(a, b) {
    console.log(a / b);
}

plus(8,60);
divide(90, 54);

const playerFunc = {
    name: "jiyong",
    sayHello: function(otherPersonName) {
        console.log("Hello " + otherPersonName + " nice to meet you");
    }
}

console.log(playerFunc.name);
playerFunc.sayHello("nico");

//#2.9~10 Recap 

const calculater = {
    add: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b) {
        console.log(a - b);
    },
    divide: function(a, b) {
        console.log(a / b);
    },
    multi: function(a, b) {
        console.log(a * b);
    },
    powerof: function(a, b) {
        console.log(a ** b);
    }
}

calculater.add(50, 20);
calculater.minus(20, 10);
calculater.divide(35, 20);
calculater.multi(55, 20);
calculater.powerof(10, 10);