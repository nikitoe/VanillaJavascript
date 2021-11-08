//#5.0 Intervals

const clock = document.querySelector("h2#clock");

function sayHello () {
    console.log("hello");
}

setInterval(sayHello, 5000);                        //몇초간격으로 계속 function을 실행시킨다.

