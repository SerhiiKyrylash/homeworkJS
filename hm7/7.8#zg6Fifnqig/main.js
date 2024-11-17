// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку




class Cinderella {

    constructor(name, age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;

    }

}
const cinderella = [
     new Cinderella('Cinderella',21,35),
    new Cinderella('Cinderella1',26,32),
    new Cinderella('Cinderella2',19,44),
    new Cinderella('Cinderella3',27,36),
    new Cinderella('Cinderella4',25,37),
    new Cinderella('Cinderella5',18,30),
    new Cinderella('Cinderella6',16,40),
    new Cinderella('Cinderella7',54,42),
    new Cinderella('Cinderella8',26,43),
    new Cinderella('Cinderella9',22,35)

]
console.log(cinderella)

class Prince {
    constructor(name,age,slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}

const prince = new Prince('Petr', 24, 36)
console.log(prince)

for(let item of cinderella){
    if(item.footSize === prince.slipper){
        console.log (prince.wife = item);
    }
}


//
// let newCinderella = cinderella.find(function (item){
//     if(item.footSize === prince.slipper){
//         return   prince.wife = item
//
//     }
//
// })
// console.log(newCinderella)





