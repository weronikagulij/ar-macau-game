function Card(name) {
  this._name = name; // card symbol, i. e. "2D", "3D"...
  this._element = document.createElement("div");
  this.fillElement();
  this.initEventListener();
}

_p = Card.prototype;

_p.fillElement = function() {
  this._element.innerHTML =
    "<img src='assets/img/cards/" + this._name + ".png' />";
  this._element.classList.add(this._name, "card-element");
};

_p.addEvents = function() {
  // handle dragging element, dispatch event when dropped
  dragElement(this._element, this._name);
};

_p.getLink = function() {};

_p.getCard = function() {};

_p.animateOnDrag = function() {};

_p.getElement = function() {
  return this._element;
};

_p.initEventListener = function() {
  // document.addEventListener("carddropped", e => {
  //   console.log("from card", e.detail);
  //   if (e.detail.name === this._name) {
  //     // this._element.parentNode.removeChild(this._element);
  //   }
  // });
};

_p.removeHtmlElement = function() {
  this._element.parentNode.removeChild(this._element);
};

_p.getName = function() {
  return this._name;
};

_p.getElement = function() {
  return this._element;
};
