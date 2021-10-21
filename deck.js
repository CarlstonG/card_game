const SUITS = ["♥","♦","♠","♣"]
const VALUES = ["A","2","3","4","5","6","7","8","9","10","J","K","Q"]

//pass in freshdeck here
export default class Deck {
    constructor(cards = freshDeck()) {
    this.cards = cards
  }

  //shuffling 
get numberCards(){
    return this.cards.length         
}

pop() {
    return this.cards.shift()
}

push(card){
    this.cards.push(card)
}

  shuffle(){
      //if you just use sort it will only short in an actual order but not in a real random order -- so it will be predictable
      //this.cards.sort((a, b) => Math.random() - .5)
    

      /* Search for for loop techniques i++ vs i-- */
      for(let i = this.numberCards - 1; i > 0; i--){
        //setting random index to newIndex  
        const newIndex = Math.floor(Math.random() * (i + 1))
        //swap the current card the oldValue is just an intermediary value to have access to it before passing or changing it 
        //looping and swaping
        const oldValue = this.cards[newIndex]
          this.cards[newIndex] = this.cards[i]
          this.cards[i] = oldValue
      }
    }
}

class Card {
    constructor(suit, value){
        this.suit = suit
        this.value = value
    }

    //color getter
    get Color(){
        return this.suit === '♣' || this.suit === '♠' ? 'black' : 'red'
    }
    //html create element 
    getHTML() {
        const cardDiv = document.createElement('div')
        cardDiv.innerHTML = this.suit
        cardDiv.classList.add("card", this.Color)
        cardDiv.dataset.value = `${this.value} ${this.suit}`
        return cardDiv
    }
}

//combine cards 
//flatmap method combines 2 arrays in 1 / u can use just map method but it will just combine two separate value arrays...
function freshDeck() {
    return SUITS.flatMap(suit => {
      return VALUES.map(value => {
        return new Card(suit, value)
      })
    })
  }