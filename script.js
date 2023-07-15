const answerBox = document.querySelectorAll('.answer-box');
const questionButtons = document.querySelectorAll('.question-box');

for(let i = 0; i < questionButtons.length; i++) {
   questionButtons[i].addEventListener('click', () => {
      answerBox[i].classList.toggle('active')
      questionButtons[i].classList.toggle('active')
   })
}