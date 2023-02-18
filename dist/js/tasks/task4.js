const hexDecimalArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function calculateRandomColor() {
  let resultColor = '#';
  for (let i = 0; i < 6;i++) resultColor+=hexDecimalArr[getRandomInt(16)];
  return resultColor;
}
function changeColor() {
  const elemsArr = document.getElementsByClassName('task4_elem');
  elemsArr[getRandomInt(3)].style.backgroundColor = calculateRandomColor();
}

setInterval(changeColor,150);
