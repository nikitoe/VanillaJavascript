//#5.0 Intervals
/**
 * setInterval는 몇초간격으로 계속 function을 실행시킨다.
 */

//#5.1 Timeouts and Dates
/**
 * new Date()오브젝트를 통해서 시간,분,초를 출력할 수 있다.
 */

//#5.2 PadStart 
/**
 * "1".padStart(2,"0")는 스트링'1'에서 2자리가 아닌경우 스트링'0'을 추가한다(가지고 있는 String을 보다 길게 만들어야 할때 사용한다.)
 * 
 */

const clock = document.querySelector("h2#clock");

function getClock () {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);                        //몇초간격으로 계속 function을 실행시킨다.
//setTimeout(sayHello, 5000);
