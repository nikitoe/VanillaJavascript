//#7.0 Setup
//#7.1 Adding ToDos
//#7.2 Deleting To Dos

const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function deleteToDo (event) {
    //console.log(event.target);
    //console.dir(event.target);                      //click된 html element의 parentElement(클린된 element의 부모), parentNode를 찾는다
    //console.dir(event.target.parentElement);          
    //console.dir(event.target.parentElement.innerText);//parentElement에 값을 추가한다. 
    const li = event.target.parentElement;
    li.remove();
}


function paintToDo (newTodo) {
    const li = document.createElement("li");        //javascript에서 html태그 li를 생성
    const span = document.createElement("span");    //javascript에서 html태그 span를 생성
    span.innerText = newTodo;                       //변수 span newTodo항목을 추가
    const button = document.createElement("button");//javascript에서 html태그 button을 생성
    button.innerText = "X";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);                           //변수 li에 변수 span을 추가, append는 맨 마지막에 놓여져야 함
    li.appendChild(button);                         //변수 li에 변수 button을 추가
    toDoList.appendChild(li);                       //변수 toDoList에 변수 li를 추가


}

function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);