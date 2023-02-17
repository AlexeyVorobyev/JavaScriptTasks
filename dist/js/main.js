const cardQuestionButtonArr = document.getElementsByClassName("cardQuestion__questionContainer");
const cardQuestionAnswerArr = document.getElementsByClassName("cardQuestion__answerContainer");
const cardQuestionIconArr = document.getElementsByClassName("cardQuestion__icon")
const cardQuestionBoolArr = [false,false,false,false];

for (let i = 0; i < 4; i++) {
  cardQuestionButtonArr[i].addEventListener("click",function () {
    if (cardQuestionBoolArr[i]) {
      cardQuestionAnswerArr[i].style.display = "";
      cardQuestionButtonArr[i].style.backgroundColor = ""
      cardQuestionButtonArr[i].style.color = ""
      cardQuestionIconArr[i].style.filter = ""
      cardQuestionBoolArr[i] = !cardQuestionBoolArr[i]
    }
    else {
      cardQuestionAnswerArr[i].style.display = "block";
      cardQuestionButtonArr[i].style.backgroundColor = "#db545a"
      cardQuestionButtonArr[i].style.color = "white"
      cardQuestionIconArr[i].style.filter = "invert(100%) sepia(0%) saturate(7500%) hue-rotate(70deg) brightness(99%) contrast(107%)"
      cardQuestionBoolArr[i] = !cardQuestionBoolArr[i]
    }
  });
}
