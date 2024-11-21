// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

let  product = {
    id:1,
    name: 'telephone',
    price: 500,
    color: 'black',
    adress:{
        city:"New",
        number:19288
    },
    foo:function (){
        console.log('Привіт')
    },
    hddsdj:['sdas','asd']
};


function copy (obj) {

    let arr = {};
    let newArr = {};

    for (let item in obj) {
        if (typeof obj[item] === 'function') {
            arr[item] = obj[item];
        } else {
            newArr[item] = obj[item];
        }


    }

    let productCopy = JSON.parse(JSON.stringify(newArr));

    for(let item in arr){
        finalCopy[item] = arr[item]
    }

    return finalCopy
    const finalCopy = {};
    for (let item in productCopy) {
        finalCopy[item] = productCopy[item];
    }


 }

copy(product)
console.log(copy(product))


// copy(product).id = 2;
// copy(product).adress.city.push(citi1='sdf')


// console.log(product)