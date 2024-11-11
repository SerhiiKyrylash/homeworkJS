// - створити функцію яка повертає найменьше число з масиву

function number(array){
    let minNumber =array[0];
    for (let item of array){
        if(item < minNumber){
          minNumber = item
        }

    }
    return minNumber
}


console.log(number([8,265,87,45,112,90,78,9,8]))