import { createClientForm } from "./createModal.js"
import { sendClientData } from "./clientApi.js"
import { validateClientForm } from "./validateForm.js"
import { validateClientContact } from "./validateContact.js";

export const addClientModal = () => {
  const createForm = createClientForm();
  const modal = document.createElement('div');
  const newClientModal = document.createElement('div');

  modal.classList.add('overlay', 'site-modal', 'modal-active');
  newClientModal.classList.add('modal-add', 'modal-active');
  createForm.form.classList.add('modal-add__form');

  newClientModal.append(
    createForm.btnClose,
    createForm.titleModal,
    createForm.form
  );
  modal.append(newClientModal);

  createForm.form.addEventListener('submit', async(e) => {
    e.preventDefault();

    if (!validateClientForm()) {
      return;
    }

    const contactTypes = document.querySelectorAll('.choices');
    const contactValues = document.querySelectorAll('.input-contact');

    let contacts = [];
    let clientObj = {};

    for (let i = 0; i < contactTypes.length; i++) {

      if (!validateClientContact(contactTypes[i], contactValues[i])) {
        return;
      }

      contacts.push ({
        type: contactTypes[i].innerHTML,
        value: contactValues[i].value
      })
    }

    clientObj.name = createForm.nameInput.value;
    clientObj.surname = createForm.surnameInput.value;
    clientObj.lastName = createForm.lastNameInput.value;
    clientObj.contacts = contacts;

    await sendClientData(clientObj, 'POST');

  });

  createForm.btnClose.addEventListener('click', () => {
    modal.remove();
  });
  createForm.btnCancel.addEventListener('click', () => {
    modal.remove();
  });

  document.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.remove();
    }
  });

  return modal;
}

