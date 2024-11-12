// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write



const elementArray = (array) =>{
    for(let item of array)
    document.write(`<ul>
                  <li>${item}</li>
                    </ul>
                   `)
}

 elementArray([144,254,'bob', 'string', null, false])



