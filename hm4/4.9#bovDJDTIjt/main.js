// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

function elements(array){
    for(let item of array)
    document.write(`
              <div>${item.id} ${item.name} ${item.age}<div/>
   
                 `)
}

elements([
    {id:1,name:'ananas', age: 21},
    {id:2, name:'vova', age:23},
    {id:3, name:'petr', age:22},
    {id:4, name:'kokos', age:23},
    {id:5, name:'Honza', age:23}
]);


