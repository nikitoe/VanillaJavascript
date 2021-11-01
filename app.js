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

//#2.11 Returns 

const calculaterSecond = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    divide: function(a, b) {
        return a / b;
    },
    multi: function(a, b) {
        return a * b;
    },
    powerof: function(a, b) {
        return a ** b;
    }
}

const plusResult = calculaterSecond.plus(10,2);
const minusResult = calculaterSecond.minus(plusResult,3);

//#2.13 Conditionals
/**
 * typeof : 데이터 타입
 * NaN : Not a Number
 * isNaN : is Not a number \
 * Operater :  연산자
 */
const age = parseInt(prompt("how old are you"));

console.log(age);

if(isNaN(age) || age < 0){
    console.log("Please write a number");
} else if (age < 18) {
    console.log("You are too young");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise")
} else if (age > 80) {
    console.log("You can do whatever you want");
} 


//#3.0 The Document Object
/**
 * document.title, document.body등을 통해서 Javascript에서 HTML을 읽어 올 수도 있고 수정할 수도 있다.
 * 
 */

 //#3.1 HTML in Javascript
 /**
  * id, innetText, className등을 통해 HTML의 element를 읽거나 수정할 수 있다.
  * 
  */

 const title = document.getElementById("title");    //document object의 getElementById함수를 사용하여, HTML에서 id를 통해 element를 찾아준다.

 console.dir(title);                // 해당 element의 object정보를 다 가져온다.
 
 title.innerText = "Got you";

 console.log(title.id);             //HTML에서 id에대한 정보를 가져온다/
 console.log(title.className);      //HTML에서 class에대한 정보를 가져온다.

 //#3.2 Searching For Elements 
 /**
  * getElementsByClassName
  * querySelector : CSS selector를 사용하여 검색 가능, array가 아닌 하나의 element 읽기 가능
  * querySelectorAll : CSS selector를 사용하여 검색 가능,array를 통해 모든 element 읽기 가능
  * 
  * ## 
  * const titleOne = document.getElementsById("title");과 
  * const titleOne = document.document.querySelector("#title");
  * 은 같은 의미로 id를 통해 element를 찾아준다.
  * ##
  */

 const hellos = document.getElementsByClassName("hello");

 const titleOne = document.querySelector(".hello h1");

 const titleAll = document.querySelectorAll(".hello h1");

 console.log(titleOne);
 console.log(titleAll);
 titleOne.innerText="Hello!!!!!";

