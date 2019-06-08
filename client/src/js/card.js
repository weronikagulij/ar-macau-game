import { dragElement } from "./utility";

export default class Card {
  constructor(name) {
    this._name = name; // card symbol, i. e. "2D", "3D"...
    this._element = document.createElement("div");
    this.fillElement();
  }

  fillElement() {
    this._element.innerHTML =
      "<img src='assets/img/cards/" + this._name + ".png' />";
    this._element.classList.add(this._name, "card-element");
    this._element.style.overflow = "hidden";
    this._element.style.transform = "translate(0px, 0px)";
    // overflow: hidden; transform: translate(0px, 0px);
  }

  addEvents() {
    // handle dragging element, dispatch event when dropped
    dragElement(this._element, this._name);
  }

  getElement() {
    return this._element;
  }

  removeHtmlElement() {
    this._element.parentNode.removeChild(this._element);
  }

  getName() {
    return this._name;
  }

  getElement() {
    return this._element;
  }
}
