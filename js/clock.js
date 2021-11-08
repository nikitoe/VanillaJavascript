//#5.0 Intervals
//#5.1 Timeouts and Dates

const clock = document.querySelector("h2#clock");

function getClock () {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);                        //몇초간격으로 계속 function을 실행시킨다.
//setTimeout(sayHello, 5000);
