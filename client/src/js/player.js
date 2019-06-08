import Card from "./card";

export default class Player {
  constructor(cards) {
    this._cards = cards;
    this._lastThrownCard = "";
  }

  deleteCard(name) {
    for (let i = 0; i < this._cards.length; i++) {
      if (this._cards[i].getName() == name) {
        this._cards[i].removeHtmlElement();
        delete this._cards[i];
        this._cards.splice(i, 1);
        break;
      }
    }
  }

  addCard(name) {
    this._cards.push(new Card(name));
  }

  getLastCard() {
    return this._cards[this._cards.length - 1];
  }

  setLastThrownCard(name) {
    this._lastThrownCard = name;
  }

  getLastThrownCard() {
    return this._lastThrownCard;
  }
}
