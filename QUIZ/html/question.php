<?php

require __DIR__.'/../lib/functions.php';

$id = '3';

$data = fetchById($id);

$question = htmlspecialchars($data[1]);

$answers = [
  'A' => htmlspecialchars($data[2]),
  'B' => htmlspecialchars($data[3]),
  'C' => htmlspecialchars($data[4]),
  'D' => htmlspecialchars($data[5]),
];

$correctAnswer = htmlspecialchars(strtoupper($data[6]));
$correctAnswerValue = $answers[$correctAnswer];
$explanation = nl2br(htmlspecialchars($data[7]));

include __DIR__.'/../template/question.tpl.php';