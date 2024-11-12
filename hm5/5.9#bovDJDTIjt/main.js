// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.


const arrayObject = (array)=>{
    for (let item of array) {
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)

    }
}


arrayObject([
    {
        id:1,
         name:'vova',
        age:24
    },
    {
        id:2,
        name:'vova',
        age:24
    },
    {
        id:3,
        name:'vova',
        age:24
    }

])





