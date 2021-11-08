//#4 [2021 UPDATE] LOGIN
//#4.0 Input Values
//#4.1 Form Submission
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtClick() {
    const username = loginInput.value;                      //input에 입력된 값(value)을 가져온다.
    if (username === "") {                                  //input에 입련된 값이 공백인 경우.
        alert("Please write your name!!")

    } else if (username.length > 15) {                                          //input에 입련된 값이 15자를 넘어가는 경우.
        alert("Your name is too long!!")
    }
}

loginButton.addEventListener("click",onLoginBtClick);