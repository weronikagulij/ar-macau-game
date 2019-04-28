function Deck() {
  this._element = document.getElementById("a-marker");
  this._boxesStack = [];
}

_p = Deck.prototype;

_p.renderCard = function(name) {
  this._boxesStack.push(document.createElement("a-box"));
  this._boxesStack[this._boxesStack.length - 1].setAttribute("depth", "0.01");
  this._boxesStack[this._boxesStack.length - 1].setAttribute(
    "material",
    "transparent: true;"
  );
  // this._boxesStack[this._boxesStack.length - 1].setAttribute(
  //   "src",
  //   "assets/img/cards/gray_back.png"
  // );
  this._boxesStack[this._boxesStack.length - 1].setAttribute(
    "multisrc",
    "srcs: assets/img/cards/any2.png,assets/img/cards/any2.png,assets/img/cards/any2.png,assets/img/cards/any2.png,assets/img/cards/gray_back.png,assets/img/cards/" +
      name +
      ".png"
  );
  this._boxesStack[this._boxesStack.length - 1].setAttribute(
    "position",
    "0 " + 0.03 * this._boxesStack.length + " 0"
  );
  this._boxesStack[this._boxesStack.length - 1].setAttribute("height", "2");
  this._boxesStack[this._boxesStack.length - 1].setAttribute("width", "1.3");
  this._boxesStack[this._boxesStack.length - 1].setAttribute(
    "rotation",
    "90 " + Math.floor(Math.random() * 90) + " 0"
  );
  this._element.appendChild(this._boxesStack[this._boxesStack.length - 1]);

  // console.log(document.getElementById("a-marker"));
};

_p.removeLastCard = function() {
  let el = this._boxesStack.pop();
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
