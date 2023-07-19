import { createClientForm } from "./createModal.js"

export const delClientModal = () => {
  const createForm = createClientForm();
  const modal = document.createElement('div');
  const delClientModal = document.createElement('div');
  const delContentForm = document.createElement('div');
  const btnDel = createForm.btnDel;
  modal.classList.add('overlay', 'site-modal', 'modal-active');
  delClientModal.classList.add('modal-del');
  delContentForm.classList.add('modal-del__content');

  delContentForm.append(
    createForm.titleDelModal,
    createForm.descDelModal,
    createForm.btnDel,
    createForm.btnCancel
  );
  delClientModal.append(createForm.btnClose, delContentForm);

  modal.append(delClientModal);

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

  return {
   modal,
   delContentForm,
   btnDel
  }

}
