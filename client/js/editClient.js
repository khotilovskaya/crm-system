import { createClientForm } from "./createModal.js"
import { sendClientData } from "./clientApi.js"
import { delClientModal } from "./delClient.js";

import { createContactItem } from "./createContact.js";

export const editClientModal = (client) => {
  const editForm = createClientForm();
  const modal = document.createElement('div');
  const editClientModal = document.createElement('div');
  const valueId = document.createElement('span');

  modal.classList.add('overlay', 'site-modal', 'modal-active');
  editClientModal.classList.add('modal-edit', 'modal-active');
  editForm.form.classList.add('modal-edit__form');
  valueId.classList.add('modal-edit__id');
  editForm.surnameLabel.classList.add("active");
  editForm.nameLabel.classList.add("active");
  editForm.lastNameLabel.classList.add("active");

  editForm.btnCancel.textContent = 'Удалить клиента';
  valueId.textContent = 'ID: ' + client.id.substr(0, 6);
  editForm.surnameInput.value= client.surname;
  editForm.nameInput.value = client.name;
  editForm.lastNameInput.value = client.lastName;



  for (const contact of client.contacts) {
    const createContact = createContactItem();
    createContact.nameContact.textContent = contact.type;
    createContact.inputContact.value = contact.value;

    editForm.contactsBlock.prepend(createContact.contact);
  }

  if (client.contacts.length == 10) {
    editForm.btnAdd.classList("modal-add__contact--remove");
  }

  editForm.titleEditModal.append(valueId)
  editClientModal.append(
    editForm.btnClose,
    editForm.titleEditModal,
    editForm.form
  );
  modal.append(editClientModal);

// удаление клиента
editForm.btnCancel.addEventListener('click', (e) => {
  e.preventDefault();

  const deleteModal = delClientModal();
  document.body.append(deleteModal.modal);

  import('./clientApi.js').then(({ deleteClientItem }) => {
    deleteModal.btnDel.addEventListener('click', () => {
      deleteClientItem(client.id);
      document.getElementById(client.id).remove();
    })
  })
});

  editForm.btnClose.addEventListener('click', () => {
    modal.remove();
  });

  document.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.remove();
    }
  });

  editForm.form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const contactTypes = document.querySelectorAll('.choices');
    const contactValues = document.querySelectorAll('.input-contact');

    let contacts = [];
    let clientEdit = {};

    for (let i = 0; i < contactTypes.length; i++) {
      contacts.push ({
        type: contactTypes[i].innerHTML,
        value: contactValues[i].value
      });
    }

    clientEdit.name = editForm.nameInput.value;
    clientEdit.surname = editForm.surnameInput.value;
    clientEdit.lastName = editForm.lastNameInput.value;
    clientEdit.contacts = contacts;

try {
  await sendClientData(clientEdit, 'PATCH', client.id);
} catch (error) {
  console.log(error);
}


    // await sendClientData(clientEdit, 'PATCH', client.id);
  });

  return {
    editClientModal,
    modal
  }
}

