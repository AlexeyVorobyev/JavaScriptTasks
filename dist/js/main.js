const cardQuestionButtonArr = document.getElementsByClassName("cardQuestion__questionContainer");
const cardQuestionAnswerArr = document.getElementsByClassName("cardQuestion__answerContainer");
const cardQuestionIconArr = document.getElementsByClassName("cardQuestion__icon")

for (let i = 0; i < 4; i++) {
  cardQuestionButtonArr[i].addEventListener("click",function () {
    if (cardQuestionAnswerArr[i].style.display == "flex") {
      cardQuestionAnswerArr[i].style.display = "";
      cardQuestionButtonArr[i].style.backgroundColor = "";
      cardQuestionButtonArr[i].style.color = "";
      cardQuestionIconArr[i].style.filter = "";
    }
    else {
      cardQuestionAnswerArr[i].style.display = "flex";
      cardQuestionButtonArr[i].style.backgroundColor = "#db545a";
      cardQuestionButtonArr[i].style.color = "white";
      cardQuestionIconArr[i].style.filter = "invert(100%) sepia(0%) saturate(7500%) hue-rotate(70deg) brightness(99%) contrast(107%)";
    }
  });
}

const dataElem = document.getElementsByClassName("task1_data")[0];
const timeElem = document.getElementsByClassName("task1_time")[0];
const dayWeekArr = ['понедельник','вторник','среда','четверг','пятница','суббота','воскресенье'];
const monthArr = ['январь','феварль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь']
function clock() {
  const date = new Date();
  const hours = (date.getHours() < '10') ? '0' + date.getHours() : date.getHours();
  const minutes = (date.getMinutes() < '10') ? '0' + date.getMinutes() : date.getMinutes();
  const seconds = (date.getSeconds() < '10') ? '0' + date.getSeconds() : date.getSeconds();
  timeElem.textContent = hours + ' / ' + minutes + ' / ' + seconds;
  const dayWeek = date.getDay();
  const day = (date.getDate() < '10') ? '0' + date.getDate() : date.getDate();
  const year = date.getFullYear();
  const month = date.getMonth();
  dataElem.textContent = dayWeekArr[dayWeek] + ', ' + year + ' ' + day + ' ' + monthArr[month];
}

setInterval(clock,1000);
