
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let number = [10,8,-7,55,987,-1011,0,1050,0];

  let string =  number.map(function (num){

      return  num + '';
})

console.log(string)

