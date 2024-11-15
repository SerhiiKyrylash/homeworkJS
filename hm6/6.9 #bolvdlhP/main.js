// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }







const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const cards = [];
for (let item of suits){
    for(let items of values){
        let card ={cardSuit: item, value: items}

        if(item === 'heart' || item === 'diamond'){
            card.color = 'red'
        }else{
            card.color ='black'
        }
        cards.push(card)
    }

}

console.log(cards)

let cardAce = cards.filter(function (item) {
    return item.value === 'ace' &&  item.cardSuit === 'spade';

});
console.log(cardAce);

let cardSix = cards.filter(function (item) {
    return item.value === '6'

})
console.log(cardSix);

let cardRed = cards.filter(function (item){
    return item.color === 'red'
})

console.log(cardRed);

let cardDiamond = cards.filter(function (item){
    return item.cardSuit === 'diamond';
})

console.log(cardDiamond);


let cardClub = cards.filter(function (item) {
    return item.cardSuit === 'club' &&  ( item.value > 9 || item.value === 'jack' || item.value ==='queen'|| item.value ==='king' || item.value ==='ace' );

});
console.log(cardClub);

