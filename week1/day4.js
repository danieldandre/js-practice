//---------Exercise 1.1-------//

function ScoreGrade(score) {
    if (typeof score !== 'number' || score < 0 || score > 100) {
        return 'Wrong Input';
    }

    if (score >= 90) {
        return 'Excellent';
    } else if (score >= 70) {
        return 'Very good';
    } else if (score >= 50) {
        return 'Good';
    } else if (score >= 20) {
        return 'Bad';
    } else {
        return 'Very bad';
    }
}

// test = ScoreGrade(99)
// console.log(test)


//---------Exercise 1.2-------//
function MysteryBox(LuckyNumber) {
    let reward = ""

    switch (LuckyNumber) {
        case 1:
            reward = "Headset"
            break;
        case 2:
            reward = "Keyboard"
            break;
        case 3:
            reward = "Figure"
            break;
        case 4:
            reward = "Toy"
            break;
        case 5:
            reward = "Watch"
            break;

        default:
            reward = "Chose a number between 1 and 5"
            break;
    }
    console.log(reward)
}
//MysteryBox(3)


//---------Exercise 3.1-------//
function PrintCategory(category) {
    const products = [
        { name: 'keyboard', category: 'hardware', price: '50€' },
        { name: 'mouse', category: 'hardware', price: '45€' },
        { name: 'apple', category: 'fruit', price: '1€' },
        { name: 'banana', category: 'fruit', price: '2€' },
        { name: 'notebook', category: 'basics', price: '5€' }
    ];

    for (const product of products) {
        if (product.category == category) {
            console.log(`${product.name}: ${product.price}`);
        }
    }
}
//PrintCategory('fruit')


//---------Exercise 3.2-------//
function SameVowels() {

    const words = [
        "agora",
        "eerie",
        "illini",
        "oreo",
        "ulu",
        "apple",
        "banana",
        "keyboard",
        "mouse",
        "notebook",
        "javascript",
        "function",
        "variable",
        "object",
        "array",
        "switch",
        "if",
        "else",
        "for",
        "while"
    ];

    for (const word of words) {
        const first = word[0];
        const last = word[word.length - 1];

        if (first == last) {
            console.log(word);
        }
    }
}
//SameVowels()


//---------Exercise 4-------//

const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['♠', '♥', '♦', '♣'];
const deck = [];
let card = ''

let students = [
    { name: 'Clyde', hand: [] },
    { name: 'Keny', hand: [] },
    { name: 'Kyle', hand: [] },
    { name: 'Cartman', hand: [] },
    { name: 'Heidi', hand: [] }
];

//building the deck rank + suit
for (let i = 0; i < ranks.length; i++) {
    for (let e = 0; e < suits.length; e++) {
        card = ranks[i] + suits[e];
        deck.push(card);
    }
}

function Shuffledeck(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
// test = Shuffledeck(deck);
// console.log(test)


//Using your shuffled deck, using either method, deal one card to each student in round-robin order until every student has the right number
//of cards. You should be able to pick up 5 students and shuffle anywhere from 2 to 7 cards each. 

function RoundRobin() {
    const min = 2;
    const max = 7;
    let shuffled_deck = Shuffledeck(deck);
    const rand_2_7 = Math.floor(Math.random() * (max - min + 1)) + min;


    for (let i = 0; i < students.length * rand_2_7; i++) {
        students[i % students.length].hand.push(shuffled_deck.shift());
    }
return students;

    // for (const student of students) {
    //     console.log(`${student['name']}: ${student['hand']}`)
    // }
}

const round = RoundRobin();
console.log(round);