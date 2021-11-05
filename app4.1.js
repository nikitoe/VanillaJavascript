//#4.1 Form Submission
//#4.2 Events
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtClick() {
    const username = loginInput.value
    console.log(username);
}

loginButton.addEventListener("click",onLoginBtClick);