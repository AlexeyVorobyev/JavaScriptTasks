const button = document.getElementsByClassName('task7_button')[0];
const grid = document.getElementsByClassName('task7_grid')[0];
grid.style.display = 'none';
const phrase = document.getElementsByClassName('task7_phrase')[0];

button.addEventListener('click', function () {
  if (grid.style.display == 'none') {
    grid.style.display='grid';
    if (grid.children.length == 0) phrase.style.display = 'block';
  }
  else {
    grid.style.display = 'none';
    phrase.style.display = 'none';
  }
});

function destroy(event) {
  const elem = event.currentTarget;
  elem.className += ' task7_disappear';
  setTimeout(function () {
    elem.remove();
    if (grid.children.length == 0) phrase.style.display = 'block';}, 1000);
}

for (let i = 0; i < 15;i++) {
  const money = document.createElement('div');
  money.className = 'task7_money';

  money.style.gridColumnStart = (i%5+1).toString();
  money.style.gridColumnEnd = (i%5+2).toString();
  money.style.gridRowStart = (Math.floor(i/5+1)).toString();
  money.style.gridRowEnd = (Math.floor(i/5+2)).toString();


  money.addEventListener('click',destroy);

  const moneyImg = document.createElement('img');
  moneyImg.className = 'task7_moneyImg';
  moneyImg.src = 'img/money.png';
  money.appendChild(moneyImg);
  grid.appendChild(money);
}
