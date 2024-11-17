// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

// Array.prototype.myForEach = function (callback){
//     const Array = this;
//   for (let item of Array ){
//       callback(item)
//   }
// };
//
// [11, 22, 44].myForEach(function (x){
//     console.log(x)
// });



Array.prototype.myFilter = function (say){
    const arr = [];
    for (let item of this){
        if(say(item)){
            arr.push(item)
        }
    }
    return arr
}


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
const result = users.myFilter(function (item){
   return  item.status

});
console.log(result);
