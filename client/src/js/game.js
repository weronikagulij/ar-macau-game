import Player from "./player";
import Deck from "./deck";
import { ButtonsEvents } from "./buttons-events";

export default class Game {
  constructor(sock, yourTurnEl, classes) {
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
    this._buttonsEvents = new ButtonsEvents(this._sock, yourTurnEl, classes);
    console.log("tutajAAA ", classes);
  }

  startGame() {
    // init buttons
    this.initEventListener();
    this.initNewCardButton();
    this.initSockEvents();
    this._buttonsEvents.initEvents();

    // get first 5 cards
    for (var i = 0; i < 5; i++) {
      this.emitNewCard(true);
    }

    this._deck.renderCardsToTake(52); // render all cards
  }

  initSockEvents() {
    this._sock.on("new-card", card => {
      if (card.success === true) {
        this.addCardToMainPlayer(card.cardCode);
      }
    });

    this._sock.on("card-thrown-all", card => {
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
      this._deck.renderCardsToTake(card.numberOfAvailableCards);
      this._deck.removeAllCardsExceptTop();
    });

    this._sock.on("initial-cards", cards => {
      for (let i = 0; i < cards.cards.length; i++) {
        this._deck.renderCard(cards.cards[i]);
      }
    });
  }

  initEventListener() {
    // on card thrown
    document.addEventListener("carddropped", e => {
      this.addCardOnDeck(e.detail.name);
    });
  }

  addCardOnDeck(name) {
    this._sock.emit("throw-card", name);
  }

  initNewCardButton() {
    var button = document.getElementsByClassName("new-card")[0];
    button.addEventListener("click", () => {
      this.emitNewCard(false);
    });
  }

  addCardToMainPlayer(name) {
    // name - card symbol
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
