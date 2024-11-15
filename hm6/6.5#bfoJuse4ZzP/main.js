// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']



function stringToarray(str){

    let split = str.split(' ');
    return split;
}
let str = 'перетворює рядок на масив слів'
console.log(stringToarray(str));


