const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer));

// 正しい答え
const correctAnswers = {
  1: 'B',
  2: 'A',
};

function checkClickedAnswer(event) {
  const checkedAnswerElement =  event.currentTarget;
  // 選択した答え
  const selectedAnswer = checkedAnswerElement.dataset.answer;
  const questionId= checkedAnswerElement.closest('ol.answers').dataset.id;
  // 正しい答え
  const correctAnswer = correctAnswers[questionId];
  // メッセージを入れる変数を用意
  let message;
  // カラーコードを入れる変数を用意
  let answerColorCode;

  if (selectedAnswer == correctAnswer) {
    // 正解時
    message = '正解です！';
    answerColorCode = '';
  } else {
    // 不正解時
    message = '残念、不正解です';
    answerColorCode = 'red';
  }


  alert(message);

  // // 色を変更(不正解時)
  // document.querySelector('#section-correct-answer p').style.color = 'red';

  // // 答えを表示
  document.querySelector('#section-correct-answer').style.display = 'block';
}

