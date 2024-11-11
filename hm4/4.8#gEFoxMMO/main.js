// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write

function arrofElements(array){
      for (let item of array ){
          document.write(`
                <ul>
                   <li>${item}</li>
                   
                 </ul>     
          
          `)
      }
}

arrofElements([112, 45,34,67, null,'fsdf',false]);