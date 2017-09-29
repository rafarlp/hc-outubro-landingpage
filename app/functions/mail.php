<?php
  if(isset($_POST['submit'])){
      $subject = "[Promoção de Outubro Health Chess] Solicitação de Contato";
      $to = "rafael.pereira@healthchess.com.br";
      $name = $_POST['nome'];
      $from = $_POST['email'];
      $group = $_POST['grupo'];
      $phone = $_POST['telefone'];
      $city = $_POST['cidade'];
      $state = $_POST['estado'];
      $message = "Nome:" . $name . "\n\n Email:" . $from . "\n\n Grupo:" . $group . "\n\n Telefone:" . $group . "\n\n Localidade:" . $city . ", " . $state . $_POST['mensagem'];

      $headers = "De:" . $from;
      mail($to,$subject,$message,$headers);
      echo "Solicitação enviada, muito obrigado! Entraremos em contato em breve.";
      // You can also use header('Location: thank_you.php'); to redirect to another page.
      // You cannot use header and echo together. It's one or the other.
  }
?>
