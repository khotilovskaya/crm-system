import { addClientModal } from "./addClient.js";
// import { delClientModal } from "./delClient.js";
// import { editClientModal } from "./editClient.js";
import { getClients } from "./clientApi.js";
import { createList } from "./client.js";
import { searchClients } from "./searchClient.js";

let column = 'ID',
    columnDir = true
// const loadClients = async () => {
//   const response = await fetch('./db.json');
//   return await response.json();
//   // const result = await getClients();
//   // return result;

// }
const clientsList = document.getElementById('clients-list'),
      clientsListThAll = document.querySelectorAll('.table-clients th')

const findList = document.createElement('ul'),
      findForm = document.querySelector('.form');
findList.classList.add('find-list', 'hide');

findForm.append(findList);

// сортировка массива
function getSortClients(prop, dir) {
  const clientsCopy = [...clients]
  return clients.sort(function(clientA, clientB) {
    if (!dir ? clientA[prop] < clientB[prop] : clientA[prop] > clientB[prop])
    return -1;
 })
}

const clients = await getClients();
// отрисовка таблицы
const render = async () => {
  clientsList.innerHTML = ''
 let clientsCopy = [...clients]

  clientsCopy = getSortClients(column, columnDir);

  searchClients(clientsCopy);

  for (const client of clients) {
    clientsList.append(createList(client));
  }

}

// сортировка по нажатию на шапку соответствующей колонки
clientsListThAll.forEach(element => {
  element.addEventListener('click', function() {
    column = this.dataset.column;
    columnDir = !columnDir;
    render()
    console.log(column, columnDir)
  })
});

render();

// добавление клиента
document.querySelector('.add-client').addEventListener('click', () => {
  console.log(addClientModal())
  document.body.append(addClientModal());
});



