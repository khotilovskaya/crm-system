import { findClient } from "./clientApi.js";
import { createList } from "./client.js";

export const searchClients = (clients) => {
  const findList = document.querySelector('.find-list');
  const input = document.querySelector('.input-search');

  clients.forEach(client => {
    const findItems = document.createElement('li');
    const findLink = document.createElement('a');

    findItems.classList.add('find-list__item');
    findLink.classList.add('find-list__link');

    findLink.textContent = `${client.surname} ${client.name} ${client.surname}`;
    findLink.href = '#';

    findItems.append(findLink);
    findList.append(findItems);

  });

  const rewriteTable = async (str) => {
    const response = await findClient(str),
    tbody = document.getElementById('clients-list');
    tbody.innerHTML = '';

    for (const client of response) {
      tbody.append(createList(client))
    }
  }

  input.addEventListener('input', async () => {
    const findList = document.querySelector('.find-list');

      const value =input.value.trim();
      const foundsItems = document.querySelectorAll(".find-list__link");

    if (value !== '') {
      // foundsItems.addEventListener('click', () => {
      //   input.value = foundsItems.textContent
      // })
      // findList.classList.remove('hide')
      rewriteTable(value);

      foundsItems.forEach(link => {
        if (link.innerText.search(value) == -1) {

          link.classList.add('hide');
          link.innerHTML = link.innerText;
        } else {
          link.classList.remove('hide');
          findList.classList.remove('hide');
          const str = link.innerText;
        }
      });
    } else {
      const tbody = document.getElementById('clients-list');

    }
  });

}
