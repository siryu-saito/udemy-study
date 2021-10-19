const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer));


function checkClickedAnswer(event) {
  const checkedAnswerElement =  event.currentTarget;
  // 選択した答え
  const selectedAnswer = checkedAnswerElement.dataset.answer;
  const questionId= checkedAnswerElement.closest('ol.answers').dataset.id;

  // フォームデータの入れ物を作る
  const formData = new FormData();

  // 送信したい値を追加
  formData.append('id', questionId);
  formData.append('selectedAnswer', selectedAnswer);

  const xhr = new XMLHttpRequest();

  // HTTPメソッドをPOSTに指定、送信するURLを指定
  xhr.open('POST', 'answer.php');

  // フォームデータを送信
  xhr.send(formData);

  // loadendはリクエストが完了した時にイベントが発生する
  xhr.addEventListener('loadend', function(event) {
    const xhr = event.currentTarget;

    if (xhr.status === 200) {
      const response = JSON.parse(xhr.response);
        // 答えが正しいか判定
      const result = response.result;
      const correctAnswer = response.correctAnswer;
      const correctAnswerValue = response.correctAnswerValue;
      const explanation = response.explanation;
      
      // 画面表示
      displayResult(result, correctAnswer, correctAnswerValue, explanation);
    } else {
      alert('Error: 回答データの取得に失敗しました');
    }
  });
}

function displayResult(result, correctAnswer, correctAnswerValue, explanation) {
  // メッセージを入れる変数を用意
  let message;
  // カラーコードを入れる変数を用意
  let answerColorCode;

  if (result) {
    // 正解時
    message = '正解です！';
    answerColorCode = '';
  } else {
    // 不正解時
    message = '残念、不正解です';
    answerColorCode = 'red';
  }

  alert(message);

  // 正解の内容をHTMLに組み込む
  document.querySelector('span#correct-answer').innerHTML = correctAnswer + '.'+ correctAnswerValue;
  document.querySelector('span#explanation').innerHTML = explanation;

  // // 色を変更(不正解時)
  document.querySelector('span#correct-answer').style.color = 'red';

  // // 答えを表示
  document.querySelector('div#section-correct-answer').style.display = 'block';

}