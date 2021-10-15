<?php

require __DIR__.'/../lib/functions.php';

$id = '3';

$data = fetchById($id);
var_dump($data);

$question = 'この問題は1の問題でしょうか？';

$answers = [
  'A' => 'あああ',
  'B' => 'いいい',
  'C' => 'ううう',
  'D' => 'えええ',
];

$correctAnswer = 'B';
$correctAnswerValue = $answers[$correctAnswer];
$explanation = '解説解説解説解説';

include __DIR__.'/../template/question.tpl.php';