// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість,об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car (model, manufacturer, year, maximumspeed, enginesize){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maximumspeed =maximumspeed;
    this.enginesize = enginesize;

   this.drive = function drive(){
        console.log(`їдемо зі швидкістю ${this.maximumspeed} на годину`)
    };

    this.info = function info(){
        for (let item in this){
            console.log(item, this[item])
        }
    };
     this.increaseMaxSpeed = function (newSpeed){
         if(newSpeed>0){
             this.maximumspeed = this.maximumspeed +newSpeed
         }
     };
    this.changeYear = function(newValue){
        if(newValue >1995){
            this.year = newValue;
        }
    };
    this.addDriver = function(driver){
       if(driver){
           this.driver = driver;
       }
    };

}

let car = new Car('tesla','model', 2018, 290, 'electro');

console.log(car)

car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(2000);
car.addDriver({});
console.log(car);

