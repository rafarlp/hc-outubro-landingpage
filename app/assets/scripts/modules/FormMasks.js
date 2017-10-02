import $ from 'jquery';
import 'jquery-mask-plugin';

class FormMasks {
  constructor(){
      $('.phonemask').mask("(99) 9999-99999")
        .focusout(function (event) {
            var target, phone, element;
            target = (event.currentTarget) ? event.currentTarget : event.srcElement;
            phone = target.value.replace(/\D/g, '');
            element = $(target);
            element.unmask();
            if(phone.length > 10) {
                element.mask("(99) 99999-9999");
            } else {
                element.mask("(99) 9999-99999");
            }
        });
  }
}

export default FormMasks;
