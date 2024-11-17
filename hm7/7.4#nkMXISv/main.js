// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

function Client ( id, name,surname,email,phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
}



let product = [
    new Client (1, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34}]),
    new Client (2, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34}]),
    new Client (3, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34}]),
    new Client (4, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34}]),
    new Client (5, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34}]),
    new Client (6, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34}]),
    new Client (7, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34}]),
    new Client (8, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34}]),
    new Client (9, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34}]),
    new Client (10, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34}]),


]
console.log(product)

