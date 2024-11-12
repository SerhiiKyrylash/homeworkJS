// - створити функцію яка повертає найменьше число з масиву



const number = (array) => {
    let min = array[0];
    for (let item of array){
        if(item < min){
            min = item
        }
    }
    return min
}

console.log(number([2,3,5,7,9,1,145,44]))



