export const validateClientContact = (contactTypes, contactInput) => {
  const writeValue = document.getElementById('writeName');
  const onlyNumbers = /[^0-9]+$/g;
  const onlyEmail = /[^a-zA-Z|@|.]+$/g;

  const onInputValue = input => {
    input.addEventListener('input', () => {
      input.style.borderColor = 'var(--border-color)';
      writeValue.textContent = '';
    });
    input.oncut = input.oncopy = input.onpaste = () => {
      input.style.borderColor = 'var(--border-color)';
      writeValue.textContent = '';
    };
  };

  const showErrorMessage = (message, block, input) => {
    block.textContent = message;
    input.style.borderColor = 'var(--red-color)';
  };
  onInputValue(contactInput);
  if (!contactInput.value) {
    showErrorMessage('Заполните все поля контакта!', writeValue, contactInput)
    return false;
  }

  switch (contactTypes.innerHTML) {
    case 'Телефон':
      if (onlyNumbers.test(contactInput.value)) {
        showErrorMessage('Для ввода в данное поле используйте только цифры!', writeValue, contactInput)
        return false;
      } else if (contactInput.value.length !== 11) {
        showErrorMessage('Длина номера должна быть 11 цифр!', writeValue, contactInput)
        return false;
      }
      return true;

      case 'Email':
        if (onlyEmail.test(contactInput.value)) {
          showErrorMessage('Введите Email в нужном формате!', writeValue, contactInput)
          return false;
        }
        return true;
    default:
      return true;
  }
};
