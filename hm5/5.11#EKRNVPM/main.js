// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//    Приклад sum([1,2,10]) //->13

const  sum = (array) =>{
    let result = 0;
    for (let item of array){
        result = result+item
    }
    return result
}

console.log(sum([1,2,3]))






























//
// function sum(arr){
//     let result =0;
//     for (let item of arr){
//         result =result+item
//     }
//     return result
// }
//
// console.log(sum([1,45,4]))