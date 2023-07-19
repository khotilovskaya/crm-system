export const createContactItem = () => {
  const contact = document.createElement('ul');
  const typeContact = document.createElement('li');
  const inputBoxContact = document.createElement('li');
  const inputContact = document.createElement('input');
  const delContact = document.createElement('li');
  const delBtnContact = document.createElement('button');
  const imgDelBtn = document.createElement('img');
  const delTooltip = document.createElement('span');
  const nameContact = document.createElement('button');
  const contactList = document.createElement('ul')
  const telephon = document.createElement('li');
  const doptelephon = document.createElement('li');
  const mail = document.createElement('li');
  const vk = document.createElement('li');
  const facebook = document.createElement('li');
  const other = document.createElement('li');

  nameContact.textContent = 'Телефон';
  telephon.textContent = 'Телефон';
  // doptelephon.textContent = 'Доп.телефон';
  mail.textContent = 'Email';
  vk.textContent = 'VK';
  facebook.textContent = 'Facebook';
  other.textContent = 'Другое';
  inputContact.placeholder = 'Введите данные контакта';
  delTooltip.textContent = 'Удалить контакт';

  contact.classList.add('contact');
  nameContact.id = 'choices';
  delContact.id = 'del-contact';

  nameContact.classList.add('choices', 'choices--active', 'btn');
  delTooltip.classList.add('del-tooltip', 'tooltip');
  typeContact.classList.add('type');
  contactList.classList.add('choice-list', 'choice-list--active');
  telephon.classList.add('choice-list__item');
  doptelephon.classList.add('choice-list__item');
  mail.classList.add('choice-list__item');
  vk.classList.add('choice-list__item');
  facebook.classList.add('choice-list__item');
  other.classList.add('choice-list__item');
  inputBoxContact.classList.add('input-box__contact');
  inputContact.classList.add('input-contact');
  nameContact.classList.add('choices');
  delContact.classList.add('del-contact');
  delBtnContact.classList.add('del-btn', 'btn');
  imgDelBtn.classList.add('img-del');

  delBtnContact.addEventListener('click', (e) => {
    e.preventDefault();
    contact.remove();
    document.querySelector('.modal-add__contact').classList.remove('modal-add__contact--remove')
  })

  contactList.append(
    telephon,
    doptelephon,
    mail,
    vk,
    facebook,
    other
  );

  const getType = (type) => {
    type.addEventListener('click', () => {
      nameContact.textContent = type.textContent;
      nameContact.classList.remove("choices--active");
      contactList.classList.remove("choice-list--active");
    })
  };

  const typesArray = [mail, facebook, vk, telephon, doptelephon, other];
  for (const type of typesArray) {
    getType(type);
  }

  typeContact.append(nameContact, contactList);
  inputBoxContact.append(inputContact);
  delBtnContact.append(delTooltip);
  delBtnContact.append(imgDelBtn);
  delContact.append(delBtnContact);

  contact.append(
    typeContact,
    inputBoxContact,
    delContact
  );
  contactList.classList.remove("choice-list--active");
  nameContact.classList.remove("choices--active");

  nameContact.addEventListener('click', () => {
    nameContact.classList.toggle("choices--active");
    contactList.classList.toggle("choice-list--active");
  })
  typeContact.addEventListener('mouseleave', () => {
    nameContact.classList.remove("choices--active");
    contactList.classList.remove("choice-list--active");
  })
  return {
    contact,
    nameContact,
    typeContact,
    inputContact,
    inputBoxContact,
    delContact
  }

}
