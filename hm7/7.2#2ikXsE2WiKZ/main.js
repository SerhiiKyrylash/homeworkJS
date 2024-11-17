// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

function User (id, name,surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User (1, 'vova', 'Petrakov', 'www.skd@mail', '+38065349338'),
    new User (2, 'vova', 'Petrakov', 'www.skd@mail', '+38065349338'),
    new User (3, 'vova', 'Petrakov', 'www.skd@mail', '+38065349338'),
    new User (4, 'vova', 'Petrakov', 'www.skd@mail', '+38065349338'),
    new User (5, 'vova', 'Petrakov', 'www.skd@mail', '+38065349338'),
    new User (6, 'vova', 'Petrakov', 'www.skd@mail', '+38065349338'),
    new User (7, 'vova', 'Petrakov', 'www.skd@mail', '+38065349338'),
    new User (8, 'vova', 'Petrakov', 'www.skd@mail', '+38065349338'),
    new User (9, 'vova', 'Petrakov', 'www.skd@mail', '+38065349338'),
    new User (10, 'vova', 'Petrakov', 'www.skd@mail', '+38065349338'),
];

let filterArray = users.filter(function (item){
    return item.id % 2 === 0;
})

console.log(filterArray);








