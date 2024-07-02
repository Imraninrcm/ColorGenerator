let btn = document.querySelector("#btn1");

btn.addEventListener("click", function () {
  let divParaOne = document.querySelector(".divPara1");

  let randomColor = getRandomColor()[0];

  divParaOne.innerText = randomColor;

  if (getRandomColor()[1] == true) {
    divParaOne.style.color = "rgb(0,0,0)";
  } else {
    divParaOne.style.color = "rgb(255,255,255)";
  }

  let divColor1 = document.querySelector("#div-size1");
  divColor1.style.backgroundColor = randomColor;
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let blackIndex = false;
  if (((red*0.299) + (green*0.587) + ( blue*0.114)) > 186) {
    blackIndex = true;
  }
  let color = `rgb(${red},${green},${blue})`;
  return  [color, blackIndex];
}

let hexCode = document.querySelector("#hex-color");
let divParaTwo = document.querySelector(".divPara2");
let divColor2 = document.querySelector("#div-size2");
let btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", function () {
  divParaTwo.innerText = "#" + hexCode.value;
  divColor2.style.backgroundColor = "#" + hexCode.value;
});
