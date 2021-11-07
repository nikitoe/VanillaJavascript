//#4.2 Events
//#4.3 Events part Two - preventDefault는 브라우저의 기본동작을 막아준다. 즉, 브라우저가아닌 내가 직접 통제할 수 있다.
//#4.4 Getting Username 
//#4.5 Saving Username

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";                                      //일반적으로 string만 포함된 변수는 대문자로 표기하고,string을 저장하고 싶을 때 사용

function onLoginSubmit (event) {
    event.preventDefault();                                             //preventDefault란 어떤 event의 기본 행동(브라우저가 기본적으로 하는 function)이든지 발생되지 않도록 막는 것.
    loginForm.classList.add(HIDDEN_CLASSNAME);                                  //loginFrom이란 html element에 class hidden을 추가함으로써 화면에 안보이게한다.
    const username = loginInput.value;                                  //변수 username에 loginInput안에있는 값을 저장한다. 
    localStorage.setItem("username", username);                         //setItem을 사용하여,localStorage에 username을 저장한다.
   
    //greeting.innerText = "Hello" + username;                          //둘다 string이랑 변수를 하나로 합쳐준다. ${username}방식을 선호함
    greeting.innerText = `Hello ${username}`;                           //
   
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit)                     //submit이라는 event가 발생하면 onLoginSubmit function을 실행시킨다.



