// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)


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
    new Client (2, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34},{name:'banan', price:34}]),
    new Client (3, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34}]),
    new Client (4, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34},{name:'banan', price:34},{name:'banan', price:34}]),
    new Client (5, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34}]),
    new Client (6, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34}]),
    new Client (7, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34},{name:'banan', price:34},{name:'banan', price:34},{name:'banan', price:34}]),
    new Client (8, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34}]),
    new Client (9, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34},{name:'banan', price:34},{name:'banan', price:34},{name:'banan', price:34},{name:'banan', price:34},{name:'banan', price:34},]),
    new Client (10, 'Petr', 'Petrakov', 'dfdd@mail.ua', 34838483, [{name:'ananas', price:24},{name:'banan', price:34}]),


]


let sortProduct = product.sort(function (a, b){
        return a.order.length - b.order.length
})

console.log(sortProduct)