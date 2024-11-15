// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
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

let reduce = cards.reduce(function (item,array) {

        if (array.cardSuit === 'spade') {
            item.spades.push(array)
        }
        if (array.cardSuit === 'diamond'){
            item.diamonds.push(array)
        }
        if(array.cardSuit === 'heart'){
            item.hearts.push(array)
        }
        if(array.cardSuit === 'club'){
            item.clubs.push(array)
        }


    return item
},{
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []

})

console.log(reduce)