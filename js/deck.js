function Deck() {
  this._element = document.getElementById("a-marker");
  this._boxesStack = [];
  this._cardsToTake = [];
}

_p = Deck.prototype;

_p.renderCard = function(name) {
  this._boxesStack.push(document.createElement("a-box"));
  this._boxesStack[this._boxesStack.length - 1].setAttribute("depth", "0.01");
  this._boxesStack[this._boxesStack.length - 1].setAttribute(
    "material",
    "transparent: true;"
  );
  this._boxesStack[this._boxesStack.length - 1].setAttribute(
    "multisrc",
    "srcs: assets/img/cards/any2.png,assets/img/cards/any2.png,assets/img/cards/any2.png,assets/img/cards/any2.png,assets/img/cards/gray_back.png,assets/img/cards/" +
      name +
      ".png"
  );
  this._boxesStack[this._boxesStack.length - 1].setAttribute(
    "position",
    "0 " + (0.03 * this._boxesStack.length + 2.2) + " 0"
  );
  this._boxesStack[this._boxesStack.length - 1].setAttribute("height", "2");
  this._boxesStack[this._boxesStack.length - 1].setAttribute("width", "1.3");
  var rotation = Math.floor(Math.random() * 90);
  this._boxesStack[this._boxesStack.length - 1].setAttribute(
    "rotation",
    "20 " + rotation + " 0"
  );

  // create animation of falling
  var animation = document.createElement("a-animation");
  animation.setAttribute("attribute", "rotation");
  animation.setAttribute("dur", "200");
  animation.setAttribute("easing", "linear");
  animation.setAttribute("to", "90 " + rotation + " 0");

  var animation2 = document.createElement("a-animation");
  animation2.setAttribute("attribute", "position");
  animation2.setAttribute("dur", "200");
  animation2.setAttribute("easing", "linear");
  animation2.setAttribute("to", "0 " + 0.03 * this._boxesStack.length + " 0");

  this._boxesStack[this._boxesStack.length - 1].appendChild(animation);
  this._boxesStack[this._boxesStack.length - 1].appendChild(animation2);
  this._element.appendChild(this._boxesStack[this._boxesStack.length - 1]);
};

_p.renderCardsToTake = function(number) {
  // remove all cards
  for (var i = this._cardsToTake.length - 1; i >= 0; i--) {
    this.removeFromCardsToTake();
  }

  // render as many cards as number
  for (var i = 0; i < number; i++) {
    var newCard = document.createElement("a-box");
    newCard.setAttribute("depth", "0.01");
    newCard.setAttribute("material", "transparent: true;");
    newCard.setAttribute(
      "multisrc",
      "srcs: assets/img/cards/any2.png,assets/img/cards/any2.png,assets/img/cards/any2.png,assets/img/cards/any2.png,assets/img/cards/gray_back.png,assets/img/cards/2D.png"
    );
    newCard.setAttribute("position", "2.2 " + 0.03 * i + " 0");
    newCard.setAttribute("height", "2");
    newCard.setAttribute("width", "1.3");
    newCard.setAttribute("rotation", "270 0 0");

    this._cardsToTake.push(newCard);
    this._element.appendChild(this._cardsToTake[this._cardsToTake.length - 1]);
  }
};

_p.removeLastCard = function() {
  var el = this._boxesStack.pop();
  el.parentNode.removeChild(el);
};

_p.removeFromCardsToTake = function() {
  var el = this._cardsToTake.pop();
  el.parentNode.removeChild(el);
};

_p.removeAllCardsExceptTop = function() {
  let multisrc = this._boxesStack[this._boxesStack.length - 1].getAttribute(
    "multisrc"
  );

  for (i = this._boxesStack.length - 1; i >= 0; i--) {
    this.removeLastCard();
  }

  this.renderCard(
    multisrc.srcs[5].replace("assets/img/cards/", "").replace(".png", "")
  );
};
