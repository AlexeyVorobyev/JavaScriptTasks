const cardQuestionButtonArr = document.getElementsByClassName('cardQuestion__questionContainer');
const cardQuestionAnswerArr = document.getElementsByClassName('cardQuestion__answerContainer');
const cardQuestionIconArr = document.getElementsByClassName('cardQuestion__icon');

for (let i = 0; i < cardQuestionButtonArr.length; i++) {
  cardQuestionButtonArr[i].addEventListener('click',function () {
    if (cardQuestionAnswerArr[i].style.display == 'flex') {
      cardQuestionAnswerArr[i].style.display = '';
      cardQuestionButtonArr[i].style.backgroundColor = '';
      cardQuestionButtonArr[i].style.color = '';
      cardQuestionIconArr[i].style.filter = '';
    }
    else {
      cardQuestionAnswerArr[i].style.display = 'flex';
      cardQuestionButtonArr[i].style.backgroundColor = '#db545a';
      cardQuestionButtonArr[i].style.color = 'white';
      cardQuestionIconArr[i].style.filter = 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(70deg) brightness(99%) contrast(107%)';
    }
  });
}

