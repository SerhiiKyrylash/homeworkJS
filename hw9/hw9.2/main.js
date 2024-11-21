
// #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr = ['Main','Products','About us','Contacts'];

const newEl = document.createElement('ul');
  for (let item of arr){
      const Li = document.createElement('li')
         Li.innerText = item;
      newEl.appendChild(Li)
  }
  document.body.appendChild(newEl)