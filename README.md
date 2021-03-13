# js-object
I created a deck of cards using JavaScript Objects.
- Part 1:
    - Define a Card object using constructor function
    - Instantiate a card object and display the value returned by the describeSelf() function
- Part 2:
    - Define Deck object functions using Class function
    - Invoke and display Deck object functions
- Part 3:
    - Define a Player object
    - Instantiate two Player Objects and deal five cards to each
    - Display to the browser the contents of each player's hand

## What I need to fix:
- How to use forEach loop to list out the cards in the third part??
- Solution:
```jsx
/*
PART 3a
DEFINE A Player OBJECT
*/
class Player{

    constructor( name ){
        //all players have names
        this.name   = name;
        //each player will hold zero or more Cards
        //in their hand
        //default begins with an empty array (no Cards in the hand)
        this.hand   =   [];

    }
    //add a Card to the Player's hand
    drawCard( card ){
        //push() a Card onto the 'hand' array
        this.hand.push( card );
    }
    //return a string describing status of this Card
    describeSelf(){
        //introduce the Player by name
        let string =  `${this.name}'s hand:`;
        //list all the Cards in the hand
        string += "<ul>";
        this.hand.forEach(function(card){
            //let each Card describe itself 
            string+= `<li>${card.describeSelf()}</li>`;
        });
        string += "</ul>";
        return string;
    }
}

/*
PART 3b
Instantiate Two Player OBJECTs
and deal five cards to each
*/
output.innerHTML += "<h2>Part 3: Player Object Using Deck of Cards</h2>";

//instantiate a couple of Player objects
const player01 = new Player("Joe");
const player02 = new Player("Jane");

//start with a fresh Deck of cards
const deckOfCards = new Deck();

//randomize the cards in the deck 
deckOfCards.shuffle();

//deal five cards to each player
//alternate the cards dealt from player01 to player02 
//to replicate how a dealer would distribute the Cards
player01.drawCard(deckOfCards.dealCard());
player02.drawCard(deckOfCards.dealCard());
player01.drawCard(deckOfCards.dealCard());
player02.drawCard(deckOfCards.dealCard());
player01.drawCard(deckOfCards.dealCard());
player02.drawCard(deckOfCards.dealCard());
player01.drawCard(deckOfCards.dealCard());
player02.drawCard(deckOfCards.dealCard());
player01.drawCard(deckOfCards.dealCard());
player02.drawCard(deckOfCards.dealCard());

//show the player's hands
output.innerHTML += player01.describeSelf();
output.innerHTML += player02.describeSelf();
```
## Super helpful tutorial to solve this assignment
- [Create a nest loop](https://www.youtube.com/watch?v=LxXWTXOny3A)
- [Coding A Card Deck In JavaScript](https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript)

