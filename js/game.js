function Game() {
  this._availableCards = [
    "2C",
    "3C",
    "4C",
    "5C",
    "6C",
    "7C",
    "8C",
    "9C",
    "10C",
    "AC",
    "JC",
    "KC",
    "QC",
    "2D",
    "3D",
    "4D",
    "5D",
    "6D",
    "7D",
    "8D",
    "9D",
    "10D",
    "AD",
    "JD",
    "KD",
    "QD",
    "2H",
    "3H",
    "4H",
    "5H",
    "6H",
    "7H",
    "8H",
    "9H",
    "10H",
    "AH",
    "JH",
    "KH",
    "QH",
    "2S",
    "3S",
    "4S",
    "5S",
    "6S",
    "7S",
    "8S",
    "9S",
    "10S",
    "AS",
    "JS",
    "KS",
    "QS"
  ];
  this._cardsOnDeck = [];
  this._players = [];
  this._mainPlayer = new Player([]);
  this.initEventListener();
  this.initNewCardButton();
  this.initReshuffleButton();
  this.initUndoButton();
}

_p = Game.prototype;

_p.initEventListener = function() {
  // on card thrown
  document.addEventListener("carddropped", e => {
    this._mainPlayer.deleteCard(e.detail.name);
    this._mainPlayer.setLastThrownCard(e.detail.name);
    this.addCardOnDeck(e.detail.name);
  });
};

_p.addCardOnDeck = function(name) {
  this._cardsOnDeck.push(name);
  console.log(this._cardsOnDeck);
  // to do: implement deck
};

_p.initNewCardButton = function() {
  var button = document.getElementsByClassName("new-card")[0];
  button.addEventListener("click", () => {
    if (this._availableCards.length > 0) {
      this.addCardToMainPlayer(-1);
    } else {
      // to do, information
      console.log("There is no card on the deck!");
    }
  });
};

_p.initReshuffleButton = function() {
  var button = document.getElementsByClassName("reshuffle")[0];
  button.addEventListener("click", () => {
    console.log("przed: ", this._availableCards, this._cardsOnDeck);
    if (this._cardsOnDeck.length > 1) {
      for (i = this._cardsOnDeck.length - 2; i >= 0; i--) {
        this._availableCards.push(this._cardsOnDeck[i]);
        this._cardsOnDeck.splice(i, 1);
      }
    } else {
      // to do, information
      console.log("There is no card to reshuffle!");
    }
    console.log("po: ", this._availableCards, this._cardsOnDeck);
  });
};

_p.initUndoButton = function() {
  var button = document.getElementsByClassName("undo")[0];
  button.addEventListener("click", () => {
    var lastThrown = this._cardsOnDeck[this._cardsOnDeck.length - 1];
    // if card on the deck is last that player threw
    if (
      this._mainPlayer.getLastThrownCard() === lastThrown &&
      this._cardsOnDeck.length > 1
    ) {
      // remove last card from the deck and add one to available cards
      this._availableCards.push(lastThrown);
      this._cardsOnDeck.splice(this._cardsOnDeck.length - 1, 1);
      this.addCardToMainPlayer(this._availableCards.length - 1);
    } else {
      // to do, information
      console.log("Could not return last move.");
    }
  });
};

_p.startGame = function() {};

_p.listenWhenCardThrown = function() {};

_p.addPlayer = function() {};

_p.startGame = function() {
  // choose cards
  for (var i = 0; i < 5; i++) {
    this.addCardToMainPlayer(-1);
  }
};

_p.addCardToMainPlayer = function(num) {
  var node = document.getElementsByClassName("cards-wrapper")[0];
  var number;
  if (num === -1) {
    // choose random card and remove it from availableCards array
    var number = Math.floor(Math.random() * this._availableCards.length);
  } else number = num;
  var name = this._availableCards[number]; // card symbol, i. e. "2D", "3D"...
  this._mainPlayer.addCard(name);
  this._availableCards.splice(number, 1);

  // insert element into cards-wrapper
  node.appendChild(this._mainPlayer.getLastCard().getElement());
  this._mainPlayer.getLastCard().addEvents();
};
