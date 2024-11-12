// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.



const listText = (text, number) =>{
    for (i=0; i<number; i++ ){
        document.write(`<ul><li>${text}</li></ul>`)
    }
}
listText('створити функцію яка створює ul', 5)







