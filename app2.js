//#3.3 Events 
/**
 *   <h1 id="title">Grab me!</h1> 삭제
 * 
 */
//#3.4 Events part Two
/**
 * MDN(Mozailla Developer Network)을 통해서 HTML에대한 정보(event등)를 얻을수 있다.
 * h1 html element mdn을 검색 ->  Web APIs라는 문장이 포함된 페이지(JS관점의 HTML Heading Element란 의미)
 * 
 */
//#3.5 More Events
/**
 * 
 */
const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick () {
    h1.style.color = "blue";
}

function handleMouseEnter () { 
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave () {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize () {
    document.body.style.backgroundColor = "tomato";     //title, head, body는 중요해서 document로 가져올 수 있다.
}

function handleWindowCopy () {
    alert("copier!");
}

function handleWindowOffline () {
    alert("SOS no WIFI");
}

function handleWindowOnline () {
    alert("GOOD!");
}

h1.addEventListener("click", handleTitleClick);          //click에대한 event를 listen하겠다
//h1.onclick = handleTitleClick;                         //위와 같은 의미이지만, addEventListener를 선호하는 이유는 removeEventListener를 통해서 event listener를 제거할 수 있기 때문이다.

h1.addEventListener("mouseenter", handleMouseEnter);     //mouseenter에대한 event를 listen하겠다
h1.addEventListener("mouseleave", handleMouseLeave);     //mouseleave에대한 event를 listen하겠다

window.addEventListener("resize",handleWindowResize);    
window.addEventListener("copy", handleWindowCopy);       
window.addEventListener("offline", handleWindowOffline); //WIFI가 꺼져있는지 켜져있는지 알 수 있다.
window.addEventListener("online", handleWindowOnline);   //