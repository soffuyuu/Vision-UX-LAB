<?php
$remitente = $_POST['correo'];
$destinatario = 'sofiatvdesign@outlook.com';
$asunto = 'Vision UX Lab - Consulta';

if (!$_POST) {
    // Nada que hacer
} else {
    $cuerpo = "Nombre: " . $_POST["nombre"] . "\r\n";
    $cuerpo .= "Apellido: " . $_POST["apellido"] . "\r\n";
    $cuerpo .= "Email: " . $_POST["correo"] . "\r\n";
    $cuerpo .= "Mensaje: " . $_POST["mensaje"] . "\r\n";

    $headers  = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/plain; charset=utf-8\n";
    $headers .= "X-Priority: 3\n";
    $headers .= "X-MSMail-Priority: Normal\n";
    $headers .= "X-Mailer: php\n";
    $headers .= "From: \"".$_POST['nombre']."\" <".$remitente.">\n";

    mail($destinatario, $asunto, $cuerpo, $headers);
    
    include 'confirma.html';
}
?>
