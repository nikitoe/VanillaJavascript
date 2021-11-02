//#3.3 Events 
/**
 *   <h1 id="title">Grab me!</h1> 삭제
 * 
 */
const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick () {
    title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);    //click에대한 event를 listen하겠다.