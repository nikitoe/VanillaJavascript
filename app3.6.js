//#3.6 CSS in Javascript
/**
 * step 1 element를 찾아라
 * step 2 event를 listen해라
 * step 3 그event에 반응해라
 */
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick () {

    /*const currentColor = h1.style.color;
    let newColor;

    if (currentColor === "blue"){
        newColor = "tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
    */
   //h1.className = "active";         //index.html의 h1태그의 클래스이름을 active로 지정한다.
   const clickedClass = "clicked";
   if (h1.className === clickedClass) {
       h1.className = "";
   } else {
       h1.className = clickedClass;
   }
}

h1.addEventListener("click", handleTitleClick);