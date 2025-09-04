
//let sumEl = document.querySelector("#sum-el") query means we are asking for an element using its selector and you have to specify with # or .


//let firstCard = 10
//let secondCard = 11

//let sum = Number(firstCard) + Number(secondCard)
//console.log(sum)

//startGame.addEventListener("click", function () {
    //if(sum < 21) {
        //messageEl.textContent = "Do you want to draw a new card?";
    //} else if (sum === 21) {
       // messageEl.textContent = "Blackjack! You win!";
        //sumEl.textContent = "Sum: " + sum;
    //} else //if (sum > 21) 
    //{
       // messageEl.textContent = "You're out of the game!";
    //}
//})
let messageEl = document.getElementById("message-el")
console.log(messageEl)
let sumEl = document.getElementById("sum-el")
console.log(sumEl)
let cardsEl = document.getElementById("cards-el")
console.log(cardsEl)
let nameEl = document.getElementById("name")
console.log(nameEl)

//let playerName = "Sam" // What would be neat is if both of this were combined and thats where objects come in
//let playerChips = 145

let player = {
    name: "Sam:",
    chips: 200,
    //sayHello: function () { // this is called a method where we use a function inside an object player is object sayHello below is the method.METHODS ARE FUNCTIONS ATTATCHED TO OBJECTS
       // console.log("Hello world!")
    //}
}
//player.sayHello()


nameEl.textContent = player.name + " $" + player.chips

let startGame = document.getElementById("start-btn")
let newCard = document.getElementById("new-card-btn")









let cards = [] //array ordered list of items
console.log(cards)

let hasBlackjack= false

let isAlive = false



function randomCard () {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10) {
        return 10
    } else if(randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function checkGame() {
    cardsEl.textContent = "Cards: ";
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent +=  cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        messageEl.textContent = "Do you want to draw a new card?";
    } else if (sum === 21) {
        messageEl.textContent = "Blackjack! You win!";
        hasBlackjack = true;
        
    } else {
        messageEl.textContent = "You're out of the game!";
        isAlive = false;
        newCard.disabled = true;
    }
}

startGame.addEventListener("click", function () {

    
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true

    checkGame();

    
    
    
    
})
newCard.addEventListener("click", function() {  
    console.log("New card drawn");

    if (isAlive === true && hasBlackjack === false) {
        let thirdCard = randomCard()
        sum += thirdCard
        checkGame();
        cards.push(thirdCard)

    }
    
    

});

// What i learnt throught all this:
// 1. Arrays they are an ordered list of items which are zero indexed but when you use length they stop being zero indexed.
//2. BOOLeans are the simplest data type or primitive data type which can either be true or false
//3. Function return where we return what we get inside a function so as to use it such as we did with the random numbers.
// 4. For loops this tells you where to start finish and amount of steps we should take we used it when we wanted to render all the cards that were in our cards array
//5. Comparison operators we use this to compare variables and other statements such as === which checks for value or type 
//6. Operators && whereby both have to be to so as to run and || where either statement has to be true we used it on the newgame button so it stops when isAlive is true and blackJack is false it runs otherwise not run
//7. Then we learnt about object they are complex data you know its an object when you have curly brackets and you have a key and value and you call upon it using dot notation as seen above 
// 8. Methods are functions attached to an object such as console.log() console is the object and the function is the log or player.sayHello() 
