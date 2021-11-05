//#4 [2021 UPDATE] LOGIN
//#4.0 Input Values
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtClick() {
    console.log(loginInput.value);
}

loginButton.addEventListener("click",onLoginBtClick);