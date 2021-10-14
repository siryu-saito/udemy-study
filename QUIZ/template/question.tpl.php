<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <script src="questions.js" defer></script>
  <title>問題1 | Quiz</title>
</head>
<body>
  <div id="main">
    <h1>Quiz</h1>

    <div class="section">
      <h2>問題1</h2>
      <p>
        <?php echo $question; ?>
      </p>
      <h3>選択肢</h3>
      <ol class="answers" data-id="question1">
        <li data-answer="A">あああ</li>
        <li data-answer="B">いいい</li>
        <li data-answer="C">ううう</li>
        <li data-answer="D">えええ</li>
      </ol>
    </div>

    <div id="section-correct-answer" class="section">
      <h2>答え1</h2>
      <p>
        あああ<br>
        解説
      </p>
    </div>

    <div class="section">
      <a href="index.html">戻る</a>
    </div>
  </div>
</body>
</html>