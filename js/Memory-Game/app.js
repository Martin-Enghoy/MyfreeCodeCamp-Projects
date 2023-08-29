const cardArr = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
]
cardArr.sort(() => 0.5 - Math.random()) // Sorts the array randomly
// console.log(cardArr) 


// Globals
const grid = document.querySelector('#grid')
const result = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIDs = []
const cardsWon = []


function createBoard() {
    for (let i = 0; i < cardArr.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)  // Check for left-click
        grid.append(card)
        // console.log(card, i)
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const firstID = cardsChosenIDs[0]
    const secondID = cardsChosenIDs[1]

    // Check for same image
    if (firstID === secondID) {
        cards[firstID].setAttribute('src', 'images/blank.png')
        cards[secondID].setAttribute('src', 'images/blank.png')
        alert('You have clicked the same image!')
    }

    // Check for match 
    if (cardsChosen[0] === cardsChosen[1]) {
        // congrats
        alert('You found a match')

        // remove cards
        cards[firstID].setAttribute('src', 'images/white.png')
        cards[secondID].setAttribute('src', 'images/white.png')

        // remove listeners
        cards[firstID].removeEventListener('click', flipCard)
        cards[secondID].removeEventListener('click', flipCard)

        cardsWon.push(cardsChosen)  // This pushes an array, so it only counts as one index
    }
    else {
        cards[firstID].setAttribute('src', 'images/blank.png')
        cards[secondID].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again!')
    }

    // Display score
    result.textContent = cardsWon.length

    // refresh arrays
    cardsChosen = []
    cardsChosenIDs = []

    if (cardsWon.length === cardArr.length / 2) {
        result.textContent = "Congratulations! You have found them all!"
    }

}

function flipCard() {
    // console.log(cardArr)
    let cardID = this.getAttribute('data-id')
    // console.log(cardArr[cardId].name)
    cardsChosen.push(cardArr[cardID].name)
    cardsChosenIDs.push(cardID)
    // console.log(cardsChosen)
    this.setAttribute('src', cardArr[cardID].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500) // calls function after 500 ms
    }
    // console.log('clicked', cardId)

}

createBoard()