<?php


$nombre = $_POST['nombre'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$destinatario = "bigilisandro@gmail.com";
$donde = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "Correo: $email \n";
$carta .= "Telefono: $phone \n";
$carta .= "Asunto: $asunto \n";
$carta .= "Mensaje: $mensaje";

mail($destinatario, $donde, $carta);
header('Location:envio.html')

?>
