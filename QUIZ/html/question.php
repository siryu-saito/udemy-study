<?php

require __DIR__.'/../lib/functions.php';

$id = escape($_GET['id'] ?? '');

$data = fetchById($id);

if (!$data) {
  header('HTTP/1.1 404 Not Found');

  header('Content-Type: text/html; charset=UTF-8');
  include __DIR__.'/../template/404.tpl.php';

  exit(9);
}

$formattedData = generateFormattedData($data);

$question = $formattedData['question'];
$answers = $formattedData['answers'];
$correctAnswer = $formattedData['correctAnswer'];
$correctAnswerValue = $answers[$correctAnswer];
$explanation = $formattedData['explanation'];

include __DIR__.'/../template/question.tpl.php';