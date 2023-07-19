import { createContactItem } from "./createContact.js"

// добавить клиента модальное окно
export const createClientForm = () => {
  const btnClose = document.createElement('button');
  const closeImg = document.createElement('img');
  const titleModal = document.createElement('h2');
  const titleEditModal = document.createElement('h2');
  const titleDelModal = document.createElement('h2');
  const descDelModal = document.createElement('p');
  const form = document.createElement('form');
  const surnameBox = document.createElement('div');
  const surnameInput = document.createElement('input');
  const surnameLabel = document.createElement('label');
  const starLabel = document.createElement('span');
  const starNameLabel = document.createElement('span');
  const starNameInput = document.createElement('span');
  const starInput = document.createElement('span');
  const nameBox = document.createElement('div');
  const nameInput = document.createElement('input');
  const nameLabel = document.createElement('label');
  const lastNameBox = document.createElement('div');
  const lastNameLabel = document.createElement('label');
  const lastNameInput = document.createElement('input');
  const btnAdd = document.createElement('button');
  const btnDel = document.createElement('button');
  const btnAddImg = document.createElement('img');
  const btnSave = document.createElement('button');
  const btnCancel = document.createElement('button');
  const contactsBlock = document.createElement('div');

  const errorBlock = document.createElement('p');
  const serviceError = document.createElement('span');
  const unacceptableLetter = document.createElement('span');
  const writeName = document.createElement('span');
  const writeSurname = document.createElement('span');
  const writeLastName = document.createElement('span');
  const requaredValue = document.createElement('span');
  const requaredContacts = document.createElement('span');

  btnClose.classList.add('btn', 'close', 'modal-add__close');
  titleModal.classList.add('modal-add__title');
  titleEditModal.classList.add('modal-edit__title');
  titleDelModal.classList.add('modal-del__title');
  descDelModal.classList.add('modal-del__desc');
  form.classList.add('modal-form');
  surnameInput.classList.add('form__input');
  nameInput.classList.add('form__input');
  lastNameInput.classList.add('form__input');
  surnameLabel.classList.add('form__label');
  nameLabel.classList.add('form__label');
  lastNameLabel.classList.add('form__label');
  starLabel.classList.add('star');
  starNameLabel.classList.add('star');
  starNameInput.classList.add('star');
  starInput.classList.add('star');
  surnameBox.classList.add('modal-box');
  nameBox.classList.add('modal-box');
  lastNameBox.classList.add('modal-box', 'modal-box__last');
  btnAdd.classList.add('btn', 'modal-add__contact', 'modal-add__contact--remove');
  btnDel.classList.add('del', 'btn');
  btnSave.classList.add('btn', 'modal-add__save', 'site-btn');
  btnCancel.classList.add('btn', 'cancel', 'cancel-edit');
  contactsBlock.classList.add('modal-add__contacts-block');

  errorBlock.classList.add('modal-error');
  unacceptableLetter.id = 'unacceptableLetter';
  writeName.id = 'writeName';
  writeSurname.id = 'writeSurname';
  writeLastName.id = 'writeLastName';
  requaredValue.id = 'requaredValue';
  requaredContacts.id = 'requaredContacts';
  serviceError.id = 'serviceError';

  btnAdd.id = 'add-contact';
  surnameLabel.for = 'floatingFirstName';
  nameLabel.for = 'floatingName';
  lastNameLabel.for = 'floatingLastName';
  surnameInput.id = 'floatingFirstName';
  nameInput.id = 'floatingName';
  lastNameInput.id = 'floatingLastName';
  surnameInput.type = 'text';
  nameInput.type = 'text';
  lastNameInput.type = 'text';

  titleDelModal.textContent = 'Удалить клиента';
  titleEditModal.textContent = 'Изменить данные';
  titleModal.textContent = 'Новый клиент';
  descDelModal.textContent = 'Вы действительно хотите удалить данного клиента?';
  closeImg.src = './img/close.png';
  surnameLabel.textContent = 'Фамилия';
  nameLabel.textContent = 'Имя';
  lastNameLabel.textContent = 'Отчество';
  starLabel.textContent = '*';
  starNameLabel.textContent = '*';

  btnAdd.textContent = 'Добавить контакт';
  btnSave.textContent = 'Сохранить';
  btnDel.textContent = 'Удалить';
  btnCancel.textContent = 'Отменить';

  btnClose.append(closeImg);
  surnameLabel.append(starLabel);
  nameLabel.append(starNameLabel);
  surnameInput.append(starInput);
  nameInput.append(starNameInput);

  surnameBox.append(surnameLabel, surnameInput)
  nameBox.append(nameLabel, nameInput)
  lastNameBox.append(lastNameLabel, lastNameInput)
  contactsBlock.append(btnAdd)

  errorBlock.append(
    unacceptableLetter,
    writeName,
    writeLastName,
    writeSurname,
    requaredValue,
    requaredContacts,
    serviceError)

  form.append(
    surnameBox,
    nameBox,
    lastNameBox,
    contactsBlock,
    errorBlock,
    btnSave,
    btnCancel
  );
  btnAdd.append(btnAddImg);

  surnameInput.addEventListener('click', () => {
    surnameLabel.classList.toggle("active")
  })
  nameInput.addEventListener('click', () => {
    nameLabel.classList.toggle("active")
  })
  lastNameInput.addEventListener('click', () => {
    lastNameLabel.classList.toggle("active")
  })

  btnAdd.classList.remove("modal-add__contact--remove");
  btnCancel.classList.remove("cancel-edit");

  btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    const items = document.getElementsByClassName('contact');

    if (items.length < 9) {
      const item = createContactItem();
      console.log(item.contact);
      contactsBlock.prepend(item.contact);

      if (items.length >= 5) {
        document.querySelector('.modal-edit').style.top = '50%';
        document.querySelector('.modal-add').style.top = '50%';
      }
    } else {
      const item = createContactItem();
      contactsBlock.prepend(item.contact);
      btnAdd.classList.add("modal-add__contact--remove");
    }
  });

    return {
      form,
      btnClose,
      titleDelModal,
      titleEditModal,
      titleModal,
      descDelModal,
      btnCancel,
      surnameLabel,
      nameLabel,
      lastNameLabel,
      surnameInput,
      nameInput,
      lastNameInput,
      contactsBlock,
      btnAdd,
      btnDel
    }
}
