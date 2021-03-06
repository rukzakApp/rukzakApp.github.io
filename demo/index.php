<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Заголовок</title>
</head>

<body>
	<footer>
		<h2>Контактная форма</h2>
		<div class="form-container">
			<div class="note"></div>
			<div class="fields">
				<form class="ajax-contact-form" action="">
					<p><input type="text" name="name" value="" placeholder="Имя"></p>
					<div class="row">
						<div class="col"><input type="tel" name="tel" value="" placeholder="Телефон"></div>
						<div class="col"><input type="email" name="email" value="" placeholder="E-mail"></div>
						</div>
					<label>Текст</label>
					<textarea name="message" cols="40" rows="3"></textarea>
					<input type="submit" name="submit" class="form-container__btn" value="Отправить">
				</form>
			</div>
		</div>
	</footer>
    
    <script
        src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous">
	</script>
	<script src="./contactform.js"></script>
</body>

</html>