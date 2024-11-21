// #Kx1xgoKy8
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
//     в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')
for (let items of coursesAndDurationArray ){
    const div = document.createElement('div');
    div.classList.add('item');

    const title = document.createElement('h1');
    title.classList.add('heading');
    title.innerText = items.title;
    div.appendChild(title)

    const text = document.createElement('p');
    text.classList.add('description');
    text.innerText = items.monthDuration;
    div.appendChild(text);


    wrapper.appendChild(div)
}
document.body.appendChild(wrapper);