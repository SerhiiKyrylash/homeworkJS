// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) =>{

          let arr1 = arr[index1];
          let arr2 = arr[index2];
           arr[index1] = arr2;
           arr[index2] = arr1;
           return  arr
}



console.log(swap([12,22,44,56],0,3))





