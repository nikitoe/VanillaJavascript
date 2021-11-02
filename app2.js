//#3.3 Events 
/**
 *   <h1 id="title">Grab me!</h1> 삭제
 * 
 */
//#3.4 Events part Two
/**
 * MDN(Mozailla Developer Network)을 통해서 HTML에대한 정보(event등)를 얻을수 있다.
 * web APl가 포함된 페이지로 들어간다.
 * 
 */
const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick () {
    title.style.color = "blue";
}

function handleMouseEnter () { 
    title.innerText = "Mouse is here!";
    title.style.color = "green";
}

function handleMouseLeave () {
    title.innerText = "Mouse is gone!";
    title.style.color = "orange";
}

title.addEventListener("click", handleTitleClick);          //click에대한 event를 listen하겠다
title.addEventListener("mouseenter", handleMouseEnter);     //mouseenter에대한 event를 listen하겠다
title.addEventListener("mouseleave", handleMouseLeave);     //mouseleave에대한 event를 listen하겠다

