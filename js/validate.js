window.addEventListener('DOMContentLoaded', function() {

  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  const validate = new window.JustValidate('#callme',
     {
        errorContainer : '.errors-container',
        errorFieldCssClass: 'is-invalid',
        errorLabelStyle: {
          color: '#d11616',
          textDecoration: 'underlined',
        },
     }
  );

  validate
    .addField('#name', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Минимум 3 символа',
      },
      {
        rule: 'maxLength',
        value: 15,
        errorMessage: 'Максимум 15 символов',
      },
      {
        rule: 'required',
        errorMessage: 'Обязательное поле',
      },
      {
        rule: 'customRegexp',
        value: /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/,
        errorMessage: 'Недопустимый формат'
      }
    ])

    .addField('#phone', [
      {
        rule: 'required',
        errorMessage: 'Обязательное поле',
      },

      {
        rule: 'customRegexp',
        value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
        errorMessage: 'Недопустимый формат номера'
      },
    ]).onSuccess((event) => {
      console.log('Validation passes and form submitted', event);
  
      let formData = new FormData(event.target);
  
      console.log(...formData);
  
      let xhr = new XMLHttpRequest();
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      }
  
      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);
  
      event.target.reset();
    });

});