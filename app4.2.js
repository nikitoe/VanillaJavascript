//#4.2 Events
//#4.3 Events part Two
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit (event) {
    event.preventDefault();                                            //preventDefault란 어떤 event의 기본 행동(브라우저가 기본적으로 하는 function)이든지 발생되지 않도록 막는 것.
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit)                     //submit이라는 event가 발생하면 onLoginSubmit function을 실행시킨다.



