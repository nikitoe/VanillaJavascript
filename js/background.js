//#6.1 Background

const images = ["0.jpeg","1.jpeg","2.jpeg","3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");                  //javascript에서 html을 만들어줌

const body = document.querySelector("body");

body.style.backgroundImage = `linear-gradient( rgba(0,0,0, 0.5), rgba(0,0,0, 0.5) ), url('img/${chosenImage}')`;

//bgImage.src = `img/${chosenImage}`;
 
//document.body.appendChild(bgImage);                               //appendChild()는 body에 html을 추가함