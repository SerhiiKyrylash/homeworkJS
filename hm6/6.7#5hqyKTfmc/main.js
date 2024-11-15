// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]



function sortNums(array,direction){


   let sort =  array.sort(function (a,b){
       if(direction === 'ascending'){
               return  a - b;
            }

       if (direction === 'descending') {

           return b - a;

       }

        })

return sort
}
let nums = [12, 10, 9, 44, 66 ]
console.log(sortNums(nums,'ascending'))






