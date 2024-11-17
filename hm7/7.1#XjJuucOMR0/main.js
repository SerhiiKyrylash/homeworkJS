// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name,surname, email, phone) {
  this.id = id;
  this.name = name;
  this.surname = surname;
  this.email = email;
  this.phone = phone;
}

let user = new User (1, 'vova', 'Petrakov', 'www.skd@mail', '+38065349338');
console.log(user);

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
]

console.log(users);
