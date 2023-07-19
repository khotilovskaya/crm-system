import { delClientModal } from "./delClient.js";
import { editClientModal } from "./editClient.js";

export const createList = (client) => {

  const clientElement = document.createElement('tr')
  const id = document.createElement('td')
  const fio = document.createElement('td')
  const create = document.createElement('td')
  const createBox = document.createElement('div')
  const datac = document.createElement('span')
  const timec = document.createElement('span')
  const update = document.createElement('td')
  const updateBox = document.createElement('div')
  const upc = document.createElement('span')
  const timeup = document.createElement('span')
  const deleteClient = delClientModal();
  const editClient = editClientModal(client);

  clientElement.classList.add('client-row')

  id.classList.add('number')
  id.textContent = client.id

  fio.classList.add('fio-text')

  fio.textContent = client.surname + ' ' + client.name + ' ' + client.lastName

  let date = client.createdAt.split('T')[0]
  let times = client.createdAt.split('T')[1]

  let data = new Date(date)
  let time = times.split('.')[0]

  let yyyy = data.getFullYear();
  let mm = data.getMonth() + 1;
  let dd = data.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  let hh = time.split(':')[0]
  let min = time.split(':')[1]
  datac.textContent = dd + '.' + mm + '.' + yyyy;
  timec.textContent = hh + ':' + min;

  createBox.classList.add('make-box')
  datac.classList.add('make-date')
  timec.classList.add('make-time')

  createBox.appendChild(datac)
  createBox.appendChild(timec)
  create.append(createBox)

  let dateUp = client.updatedAt.split('T')[0]
  let timesUp = client.updatedAt.split('T')[1]

  let dataUp = new Date(dateUp)
  let timeUp = timesUp.split('.')[0]

  let yyyyUp = dataUp.getFullYear();
  let mmUp = dataUp.getMonth() + 1;
  let ddUp = dataUp.getDate();
  if (ddUp < 10) ddUp = '0' + ddUp;
  if (mmUp < 10) mmUp = '0' + mmUp;

  let hhUp = timeUp.split(':')[0]
  let minUp = timeUp.split(':')[1]

  upc.textContent = ddUp + '.' + mmUp + '.' + yyyyUp;
  timeup.textContent = hhUp + ':' + minUp;

  updateBox.classList.add('update-box')
  updateBox.appendChild(upc)
  updateBox.appendChild(timeup)
  update.append(updateBox)

  upc.classList.add('make-date')
  timeup.classList.add('make-time')

  const contacts = document.createElement('td')
  let contactBox = document.createElement('ul')
  contactBox.classList.add('contact-list')

  let items = client.contacts
  for (let item of items) {
    const contactItem = document.createElement('li')
    contactItem.classList.add('contact-item')
    const contactLink = document.createElement('a')
    contactLink.classList.add('contact-link')
    const contactTooltip = document.createElement('span')
    const imgLink = document.createElement('img')
    contactTooltip.textContent = item.value
    contactTooltip.classList.add('tooltip', 'contact-tooltip')

    switch (item.type) {
      case 'VK':
        imgLink.src = './img/vk.svg';
        break;
      case 'Телефон':
        imgLink.src = './img/phone.svg';
        break;
      case 'Facebook':
        imgLink.src = './img/fb.svg';
        break;
      case 'Email':
        imgLink.src = './img/mail.svg';
        break;
      case 'Other':
        imgLink.src = './img/other.svg';

        default:
        break;
    }

    contactLink.append(contactTooltip)
    contactLink.append(imgLink)
    contactItem.append(contactLink)
    contactBox.append(contactItem)
  }

  contacts.append(contactBox)

  const actions = document.createElement('td')
  const actionBox = document.createElement('div')
  const edit = document.createElement('div')
  const editButton = document.createElement('button')
  const del = document.createElement('div')
  const deleteButton = document.createElement('button')

  actionBox.classList.add('button-box')
  edit.classList.add('edit')
  editButton.classList.add('edit-button')
  del.classList.add('delete')
  deleteButton.classList.add('delete-button')
  editButton.textContent = 'Изменить'
  deleteButton.textContent = 'Удалить'
  del.append(deleteButton)

  // удаление клиента
  const deleteById = () => {
  import('./clientApi.js').then(({ deleteClientItem }) => {
    deleteClient.btnDel.addEventListener('click', () => {
      deleteClientItem(client.id);
      document.getElementById(client.id).remove();
    });
  });
}

  del.addEventListener('click', () => {
    deleteById();
    // console.log(delClientModal().modal)
    document.body.append(deleteClient.modal);
  });
//
    edit.appendChild(editButton)
    actionBox.appendChild(edit)

    actionBox.appendChild(del)
    actions.append(actionBox)


  // изменение клиента
  const editById = () => {
    import('./clientApi.js').then(({ editClientItem }) => {
      deleteClient.btnDel.addEventListener('click', () => {
        editClientItem(client.id);
        document.getElementById(client.id).remove();
      });
    });
  }

  editButton.addEventListener('click', () => {
    editById();
    document.body.append(editClient.modal);
  })

    clientElement.append(
      id,
      fio,
      create,
      update,
      contacts,
      actions
    )
    return clientElement;

}
