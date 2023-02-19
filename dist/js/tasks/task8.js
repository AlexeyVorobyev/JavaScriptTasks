const colorBlock = document.getElementsByClassName('task8_blockColor')[0];
let flag = true;
colorBlock.style.opacity = '1';

colorBlock.addEventListener('mouseenter',function () {
  flag = true;
  const enterInterval = setInterval(function () {
    let tmp = Number(colorBlock.style.opacity);
    if (colorBlock.style.opacity > 0 && flag) colorBlock.style.opacity = (tmp - 0.01).toString();
    else {
      clearInterval(enterInterval);
    }
  },15);
});

colorBlock.addEventListener('mouseleave',function () {
  flag = false;
  const leaveInterval = setInterval(function () {
    let tmp = Number(colorBlock.style.opacity);
    if (colorBlock.style.opacity < 1 && !flag) colorBlock.style.opacity = (tmp + 0.01).toString();
    else {
      clearInterval(leaveInterval);
    }
  },15);
});
