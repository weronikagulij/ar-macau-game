function Player(cards) {
  this._cards = cards;
  this._lastThrownCard = "";
}

_p = Player.prototype;

// _p.renderCards = function() {};

// _p.getCards = function() {
//   return this._cards;
// };

_p.deleteCard = function(name) {
  for (var i = 0; i < this._cards.length; i++) {
    if (this._cards[i].getName() == name) {
      this._cards[i].removeHtmlElement();
      delete this._cards[i];
      this._cards.splice(i, 1);
      break;
    }
  }
};

_p.addCard = function(name) {
  this._cards.push(new Card(name));
};

_p.getLastCard = function() {
  return this._cards[this._cards.length - 1];
};

_p.setLastThrownCard = function(name) {
  this._lastThrownCard = name;
};

_p.getLastThrownCard = function() {
  return this._lastThrownCard;
};
