<?php 
$name = isset($_POST['fields']['name_1']) ? $_POST['fields']['name_1'] : "";
$phone = isset($_POST['fields']['99990_1']['224460']) ? $_POST['fields']['99990_1']['224460'] : "";


if (isset($_POST['name']) && isset($_POST['phone'])) {

	$paramsArray = array(
		'fields' => array (
			'name_1' => $name, 
			'99990_1' => array ('224460' => $phone)
		),
		'form_id' => '080808', 
		'hash' => '23365f7dd2d48fb5dd23118098a4860d'	
	); 
	// преобразуем массив в URL-кодированную строку
	$vars = http_build_query($paramsArray);
	// создаем параметры контекста
	$options = array(
		'http' => array(  
			'method'  => 'POST',  // метод передачи данных
			'header'  => 'Content-type: application/x-www-form-urlencoded',  // заголовок 
			'content' => $vars  // переменные
		)  
	);  
	$context  = stream_context_create($options);  // создаём контекст потока
	$result = file_get_contents('https://forms.amocrm.ru/queue/add', false, $context); //отправляем запрос
	var_dump($result);

} ?>