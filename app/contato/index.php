<?php

    require("class.phpmailer.php");

    // Inicia a classe PHPMailer

    $mail = new PHPMailer();

    // Define os dados do servidor e tipo de conexão

    $mail->IsSMTP(); // Define que a mensagem será SMTP
    $mail->Host = "smtp.gmail.com"; // Endereço do servidor SMTP
    $mail->Port = "587";
    $mail->SMTPDebug = false;
    $mail->SMTPSecure = "tls";
    $mail->SMTPAuth = true; // Autenticação
    $mail->Username = 'rafael.pereira@healthchess.com.br'; // Usuário do servidor SMTP
    $mail->Password = '$$r1l2p3**'; // Senha da caixa postal utilizada

    // Define o remetente

    $mail->From = "noreply@healthchess.com.br";
    $mail->FromName = "De: Site da Health Chess";

    // Define os destinatário(s)

    $mail->AddAddress('comercial@healthchess.com.br', 'Para:');
    $mail->AddAddress('edimar@healthchess.com.br', 'Para:');

    // Define os dados técnicos da Mensagem

    $mail->IsHTML(true); // Define que o e-mail será enviado como HTML
    $mail->CharSet = 'utf-8'; // Charset da mensagem (opcional)

    $name = $_POST['nome'];
    $from = $_POST['email'];
    $group = $_POST['grupo'];
    $phone = $_POST['telefone'];
    $city = $_POST['cidade'];
    $state = $_POST['estado'];

    // Texto e Assunto

    $mail->Subject  = "[Promoção de Outubro Health Chess] Solicitação de Contato"; // Assunto da mensagem
    $mail->Body = "<html><head><link href='https://fonts.googleapis.com/css?family=Montserrat:400,500' rel='stylesheet'></head><body><div style='width: 100%;'><img style='display: block; text-align: center; margin: 0 auto; margin-bottom: 30px;' src='http://www.healthchess.com.br/emarketing/images/logo-hc.png' width='200'></div>
    <div style='padding: 20px; border: 1px solid #ccc; border-radius: 5px;'>
    <p style='font-family: Montserrat, Arial, sans-serif; font-size: 20px; text-transform: uppercase; margin-bottom: 30px; text-align: center; font-weight: 600; letter-spacing: -0.7px;'>Novo contato da promoção de outubro</p>
    <strong>Nome: </strong>" . $name . "<br><br><strong>Email: </strong>" . $from . "<br><br><strong>Grupo: </strong>" . $group . "<br><br><strong>Telefone: </strong>" . $group . "<br><br><strong>Localidade: </strong>" . $city . ", " . $state . "<br><br><strong>Mensagem: </strong>" . $_POST['mensagem'] . "</div></body></html>";

    // Envio da Mensagem

    $enviado = $mail->Send();

    // Limpa os destinatários e os anexos

    $mail->ClearAllRecipients();
    $mail->ClearAttachments();


    // Exibe uma mensagem de resultado

    if ($enviado) {
       http_response_code(200);
       echo "Obrigado! Recebemos seu contato e entraremos em contato em breve.";
    } else {
      http_response_code(500);
      echo "Não foi possível enviar o e-mail.";
      echo "Informações do erro:" . $mail->ErrorInfo;
    }

?>
