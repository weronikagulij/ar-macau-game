import Player from "./player";
import Deck from "./deck";

export default class Game {
  constructor(sock) {
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
    this._deck = new Deck();
    this._sock = sock;
  }

  initSockEvents() {
    this._sock.on("new-card", card => {
      if (card.success === true) {
        this.addCardToMainPlayer(card.cardCode);
        // console.log(card, "you have taken a card " + card.cardCode);
      } ///
    });

    this._sock.on("card-thrown-all", card => {
      // console.log("card was thrown: ", card);
      // this._deck.removeFromCardsToTake();
      this._deck.renderCard(card.cardCode);
    });

    this._sock.on("new-card-all", () => {
      this._deck.removeFromCardsToTake();
    });

    this._sock.on("card-thrown", card => {
      this._mainPlayer.deleteCard(card.name);
      this._mainPlayer.setLastThrownCard(card.name);
    });

    this._sock.on("reshuffle-all", card => {
      // console.log(card.firstCardCode);
      this._deck.renderCardsToTake(card.numberOfAvailableCards);
      this._deck.removeAllCardsExceptTop();
    });

    this._sock.on("initial-cards", cards => {
      for (let i = 0; i < cards.cards.length; i++) {
        this._deck.renderCard(cards.cards[i]);
      }
      console.log(cards);
    });

    // this._sock.on("render-cards-to-take", number => {
    //   console.log("rendering new cards");
    //   this._deck.renderCardsToTake(number);
    // });
  }

  firstInitialCard() {
    // var firstCard = "";
    // var index = -1;
    // // select proper first card
    // while (
    //   firstCard === "" ||
    //   firstCard.includes("2") ||
    //   firstCard.includes("3") ||
    //   firstCard.includes("J") ||
    //   firstCard.includes("A")
    // ) {
    //   index = Math.floor(Math.random() * this._availableCards.length);
    //   firstCard = this._availableCards[index];
    // }
    // this._cardsOnDeck.push(firstCard);
    // this._availableCards.splice(index, 1);
    // this._deck.renderCard(firstCard);
    // this._deck.renderCardsToTake(this._availableCards.length);
  }

  initEventListener() {
    // on card thrown
    document.addEventListener("carddropped", e => {
      this.addCardOnDeck(e.detail.name);
    });
  }

  addCardOnDeck(name) {
    // this._mainPlayer.deleteCard(name);
    // this._mainPlayer.setLastThrownCard(name);
    this._sock.emit("throw-card", name);
  }

  initNewCardButton() {
    var button = document.getElementsByClassName("new-card")[0];
    button.addEventListener("click", () => {
      this.emitNewCard(false);
    });
  }

  initReshuffleButton() {
    // var button = document.getElementsByClassName("reshuffle")[0];
    // button.addEventListener("click", () => {
    //   if (this._cardsOnDeck.length > 1) {
    //     for (let i = this._cardsOnDeck.length - 2; i >= 0; i--) {
    //       this._availableCards.push(this._cardsOnDeck[i]);
    //       this._cardsOnDeck.splice(i, 1);
    //     }
    //     this._deck.renderCardsToTake(this._availableCards.length);
    //     this._deck.removeAllCardsExceptTop();
    //   } else {
    //     // to do, information
    //     console.log("There is no card to reshuffle!");
    //   }
    // });
  }

  initUndoButton() {
    // var button = document.getElementsByClassName("undo")[0];
    // button.addEventListener("click", () => {
    //   var lastThrown = this._cardsOnDeck[this._cardsOnDeck.length - 1];
    //   // if card on the deck is the same as last thrown by user
    //   if (
    //     this._mainPlayer.getLastThrownCard() === lastThrown &&
    //     this._cardsOnDeck.length > 1
    //   ) {
    //     // remove last card from the deck and add one to available cards
    //     this._availableCards.push(lastThrown);
    //     this._cardsOnDeck.splice(this._cardsOnDeck.length - 1, 1);
    //     this.addCardToMainPlayer(this._availableCards.length - 1);
    //     this._deck.removeLastCard();
    //   } else {
    //     // to do, information
    //     console.log("Could not return last move.");
    //   }
    // });
  }

  listenWhenCardThrown() {}

  addPlayer() {}

  startGame() {
    // init buttons
    this.initEventListener();
    this.initNewCardButton();
    this.initReshuffleButton();
    this.initUndoButton();
    this.initSockEvents();

    // first card on deck
    this.firstInitialCard();

    // get first 5 cards
    for (var i = 0; i < 5; i++) {
      this.emitNewCard(true);
    }

    this._deck.renderCardsToTake(52); // render all cards
  }

  addCardToMainPlayer(name) {
    // name - card symbol
    // console.log(name);
    var node = document.getElementsByClassName("cards-wrapper")[0];
    this._mainPlayer.addCard(name);

    // insert element into cards-wrapper
    node.appendChild(this._mainPlayer.getLastCard().getElement());
    this._mainPlayer.getLastCard().addEvents();
  }

  emitNewCard(firstTurn) {
    this._sock.emit("make-turn", { move: "new-card", firstTurn: firstTurn });
  }
}
