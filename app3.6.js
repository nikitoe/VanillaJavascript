//#3.6~8 CSS in Javascript
/**
 * step 1 element를 찾아라
 * step 2 event를 listen해라
 * step 3 그event에 반응해라
 */
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick () {

    //#CSS in Javascript part One
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

   //#CSS in Javascript part Two
   /*const clickedClass = "clicked";
   if (h1.className === clickedClass) {
       h1.className = "";
   } else {
       h1.className = clickedClass;
   }
   */

   //#3.8 CSS in Javascript part Three
   /* const clickedClass = "clicked";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
       h1.classList.add(clickedClass);
    }
    */

    h1.classList.toggle("clicked")                   //toggle은 h1의 classList에 clickedClass가 이미 있는지확인해서

}

h1.addEventListener("click", handleTitleClick);