export const validateClientForm = () => {
  const userSurname = document.getElementById('floatingFirstName');
  const userName = document.getElementById('floatingName');
  const userLastName = document.getElementById('floatingLastName');
  const writeName = document.getElementById('writeName');
  const writeSurname = document.getElementById('writeSurname');
  const writeLastName = document.getElementById('writeLastName');
  const requaredValue = document.getElementById('requaredValue');
  const requaredContacts = document.getElementById('requaredContacts');
  const unacceptableLetter = document.getElementById('unacceptableLetter');

  const validateArray = [
    writeName,
    writeSurname,
    writeLastName,
    requaredValue,
    requaredContacts,
    unacceptableLetter,
  ];

  const regexp = /[^а-яА-ЯёЁ]+$/g;

  const onInputValue = input => {
    input.addEventListener('input', () => {
      input.style.borderColor = 'var(--border-color)';
      for (const item of validateArray) {
        item.textContent = '';
      }
    });
    input.oncut = input.oncopy = input.onpaste = () => {
      input.style.borderColor = 'var(--border-color)';
      for (const item of validateArray) {
        item.textContent = '';
      }
    };
    input.onchange = () => {
      input.style.borderColor = 'var(--border-color)';
      if (userSurname.value && userName.value && userLastName.value) {
        for (const item of validateArray) {
          item.textContent = '';
        }
      }
    };
  }

  onInputValue(userSurname);
  onInputValue(userName);
  onInputValue(userLastName);

  const checrRequaredName = (input, message, name) => {
    if (!input.value) {
      input.style.borderColor = 'var(--red-color)';
      message.textContent = `Введите ${name} клиента!`;
      return false;
    } else {
      message.textContent = '';
    }
    return true;
  }

  const checkByRegexp = (input, regexp) => {
    if (regexp.test(input.value)) {
      input.style.borderColor = 'var(--red-color)';
      unacceptableLetter.textContent = 'Введены недопустимые символы!';
      return false;
    }
    return true;
  };

  if (!checrRequaredName(userSurname, writeSurname, 'фамилию')) {
    return false;
  }
  if (!checrRequaredName(userName, writeName, 'имя')) {
    return false;
  }
  if (!checrRequaredName(userLastName, writeLastName, 'отчество')) {
    return false;
  }
  if (!checkByRegexp(userSurname, regexp)) {
    return false;
  }
  if (!checrRequaredName(userName, regexp)) {
    return false;
  }
  if (!checrRequaredName(userLastName, regexp)) {
    return false;
  }
  return true;

}
