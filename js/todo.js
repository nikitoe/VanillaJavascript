//#7.0 Setup
//#7.1 Adding ToDos
//#7.2 Deleting To Dos
/**
 * event.target.parentElement : click된 html element의 parentElement(클린된 element의 부모), parentNode를 찾는다
 * 
 */
//#7.3 Saving To Dos
/**
 * JSON.stringify() : javascript object나 array 등을 string으로 바꿔줌
 */

//#7.4 Loading To Dos part One
/**
 * JSON.parse() : string을 javascript object나 array등으로 바꿔줌
 * arrow function : (item) => console.log("this is the turn of ", item)
 * 
 */

//#7.5 Loading To Dos part Two

const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos () {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));           //toDos array의 내용을 localStorage에 넣음
}


function deleteToDo (event) {
    //console.log(event.target);
    //console.dir(event.target);                      //click된 html element의 parentElement(클린된 element의 부모), parentNode를 찾는다
    //console.dir(event.target.parentElement);          
    //console.dir(event.target.parentElement.innerText);//parentElement에 값을 추가한다. 
    const li = event.target.parentElement;          //taget은 button이고 그 button의 부모인 li에 접근할 수 있다.
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
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null) {
    const paresdToDos = JSON.parse(savedToDos);
    toDos = paresdToDos;
    paresdToDos.forEach(paintToDo);                 //forEach는 array의 각 item에 대해 function을 실행하게 해줌.
    /**
     * (item) => console.log("this is the turn of ", item)  과 같은 의미이다(arrow function 이라고도 함)
     * function sayHello (item) {
    console.log("this is the turn of", item);
    }
     */
};