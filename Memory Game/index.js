document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'bedroom',
            img: 'images/bedroom.jpeg'
        },
        {
            name: 'bedroom',
            img: 'images/bedroom.jpeg'
        },
        {
            name: 'dwight',
            img: 'images/dwight.png'
        },
        {
            name: 'dwight',
            img: 'images/dwight.png'
        },
        {
            name: 'bhai',
            img: 'images/bhai.jpg'
        },
        {
            name: 'bhai',
            img: 'images/bhai.jpg'
        },
        {
            name: 'lucy',
            img: 'images/lucy.jpg'
        },
        {
            name: 'lucy',
            img: 'images/lucy.jpg'
        },
        {
            name: 'meme',
            img: 'images/meme.jpg'
        },
        {
            name: 'meme',
            img: 'images/meme.jpg'
        },
        {
            name: 'corona',
            img: 'images/corona.jpg'
        },
        {
            name: 'corona',
            img: 'images/corona.jpg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())
    const grid = document.querySelector('.grid');
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = [];
    const resultDisplay = document.querySelector('#result')

    //create your board
    function createBoard(){
        for(let i=0; i<cardArray.length; i++){
            var card = document.createElement('img');
            card.setAttribute('src', 'images/click.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch(){
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            cardsWon.push(cardsChosen)
        } else{
            cards[optionOneId].setAttribute('src', 'images/click.png')
            cards[optionTwoId].setAttribute('src', 'images/click.png')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip card
    function flipCard(){
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }

    createBoard();
})