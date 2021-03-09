/*
grab some HTML elements
*/ 
const output        = document.getElementById("output");


/*
PART 1a
DEFINE A Card OBJECT
*/
// constructor function
const card = {
    // properties (variables)
    // propertyName: value,
    face: "King", 
    value: 10,   
    suit: "Heart",
    
    // behaviour (functions)
    // functionName: function(){}
    describeSelf: function(){
        return `${this.face} of ${this.suit}s. Value: ${this.value}`;
    }

}

/*
PART 1b
INSTANTIATE A Card OBJECT and 
display the value returned by the describeSelf() function
*/
// access object directly
output.innerHTML += "<h2>Part 1: Card Object</h2>";
output.innerHTML += "<p>Before we build the full Deck of Cards, a single example, demonstration Card object has been created:</p>";
output.innerHTML += `<p><strong>${card.describeSelf()}</strong></p>`;



/*
PART 2a
DEFINE A Deck OBJECT
*/
class Deck{
    constructor(){
        
        //build a deck of Card objects
        //prepare arrays for all the aspects of a Card
        this.faces   = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];        
        this.values  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];        
        this.suits   = ["Spade","Club","Heart","Diamond"];  
        
        //prepare an array to store the Cards in
        this.cards = [];

        //use nested 'for' loops
        //build the Deck of Cards
        //one iteration for each suit
        //one iteration for each face/value pair
        //each time, instantiate a new Card
        //add new cards to the using Array.push()
        //eg:    this.cards.push( newCardObject );

        for(let suitCounter = 0; suitCounter < this.suits.length; suitCounter++) {
            for(let faceValueCounter = 0; faceValueCounter < this.faces.length && this.values.length; faceValueCounter++){
                const newCard = {
                    Suit: this.suits[suitCounter],
                    Face: this.faces[faceValueCounter],
                    Value: this.values[faceValueCounter]
                }

                this.cards.push( newCard );
            }
        }
        
    }
}

/*
DEFINE Deck OBJECT FUNCTIONS
no changes need to be made here
*/
Deck.prototype.dealCard = function(){
 
    //remove and return the first item in array
    //and shift the index of remaining items 
    const card = this.cards.shift();
    //if we have run out of cards...
    if(card === undefined){
        return 'No more cards';
    }else{
        //return the next card in the array
        return card;
    }         
}
Deck.prototype.shuffle = function(){
 
    let j, x, i;
    //loop through the entire array
    for (i = this.cards.length - 1; i > 0; i--) {
        //randomly select a card
        j = Math.floor(Math.random() * (i + 1));
        x = this.cards[i];
        //resort cards
        this.cards[i] = this.cards[j];
        this.cards[j] = x;
    }
    //return the randomly sorted array
    return this.cards;       
}
Deck.prototype.describeSelf = function(){
    let description = "";
    description += `This deck of cards has ${this.cards.length} card(s) in it`;
    //return the above statement 'description'
    return description;
}


/*
PART 2b
INVOKE AND DISPLAY Deck OBJECT FUNCTIONS
*/
// access object directly
output.innerHTML += "<h2>Part 2: Deck Object Containing Card Objects</h2>";

/*
INSTANTIATE A NEW OBJECT
const myObjectInstance = new ObjectName();
*/
const myDeckOfCards = new Deck();

//invoke and display the Deck function describeSelf() here...
output.innerHTML += `<p>${myDeckOfCards.describeSelf()}</p>`;

//rendomize the cards in the deck using shuffle()
myDeckOfCards.shuffle();

//take the next card from the deck using dealCard()
let myCards = myDeckOfCards.dealCard();
output.innerHTML += `<p>You've been dealt a ${myCards.Suit} of ${myCards.Face}s. Value: ${myCards.Value}</p>`;

//invoke and display the Deck function describeSelf() AGAIN here...
output.innerHTML += `<p>${myDeckOfCards.describeSelf()}</p>`;

//take the next card from the deck using dealCard()
myCards = myDeckOfCards.dealCard();
output.innerHTML += `<p>You've been dealt a ${myCards.Suit} of ${myCards.Face}s. Value: ${myCards.Value}</p>`;

//invoke and display the Deck function describeSelf() AGAIN here...
output.innerHTML += `<p>${myDeckOfCards.describeSelf()}</p>`;



/*
PART 3a
DEFINE A Player OBJECT
*/




/*
PART 3b
Instantiate Two Player OBJECTs
and deal five cards to each

display to the browser the contents 
of each player's hand
*/