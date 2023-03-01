const container = document.getElementsByClassName('task6_container')[0];
const imgArr = document.getElementsByClassName('task6_img');
imgArr[0].style.display = 'flex';
let current = 1;
let prev = 0;
container.addEventListener('mouseleave', function() {
  imgArr[current].style.display = 'flex';
  imgArr[prev].style.display = 'none';
  current++;
  (current)%=4;
  current == 0 ? prev = 3 : prev = current - 1;
})
