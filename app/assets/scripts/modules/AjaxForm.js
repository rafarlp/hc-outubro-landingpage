import $ from 'jquery';

class AjaxForm {
  constructor(){
    $(function(){

      var form = '#contact-form';
      var formMessages = $('.form-messages');

      $(form).submit(function(event) {
        $(formMessages).addClass('visible');
        $(formMessages).text('Por favor, aguarde...');
        event.preventDefault();

        $.ajax({
          type: 'POST',
          url: '/contato/handler.php',
          data: $('#contact-form').serialize()
        }).done(function(response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass('error');
          $(formMessages).addClass('success');

          // Set the message text.
          $(formMessages).text(response);

        }).fail(function(data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass('success');
          $(formMessages).addClass('error');

          // Set the message text.
          if (data.responseText !== '') {
              $(formMessages).text(data.responseText);
          } else {
              $(formMessages).text('Oops! Ocorreu um erro e sua mensagem não pode ser enviada.');
          }
        });
      });

    });
  }
}

export default AjaxForm;
