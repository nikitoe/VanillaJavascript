//#7.0 Setup
//#7.1 Adding ToDos

const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

function paintToDo (newTodo) {
    const li = document.createElement("li");        //javascript에서 html태그 li를 생성
    const span = document.createElement("span");    //javascript에서 html태그 span를 생성
    li.appendChild(span);                           //변수 li에 변수 span을 추가
    span.innerText = newTodo;                       //변수 span newTodo항목을 추가
    toDoList.appendChild(li);                       //변수 toDoList에 변수 li를 추가
}

function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);