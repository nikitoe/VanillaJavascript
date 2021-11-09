//#6.1 Background

const images = ["0.jpeg","1.jpeg","2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");                  //javascript에서 html을 만들어줌

bgImage.src = `img/${chosenImage}`;
 
document.body.appendChild(bgImage);                               //appendChild()는 body에 html을 추가함