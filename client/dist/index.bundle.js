/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/buttons-events.js":
/*!**********************************!*\
  !*** ./src/js/buttons-events.js ***!
  \**********************************/
/*! exports provided: ButtonsEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonsEvents\", function() { return ButtonsEvents; });\nclass ButtonsEvents {\r\n  constructor(sock, classes) {\r\n    this._sock = sock;\r\n    this._classes = classes;\r\n  }\r\n\r\n  initReshuffle() {\r\n    this._sock.emit(\"make-turn\", { move: \"reshuffle\" });\r\n  }\r\n\r\n  endTurn() {\r\n    this._sock.emit(\"end-turn\", null);\r\n    document\r\n      .getElementsByClassName(this._classes.yourTurnElement)[0]\r\n      .classList.remove(this._classes.visible);\r\n  }\r\n\r\n  initEvents() {\r\n    document\r\n      .getElementsByClassName(\"reshuffle\")[0]\r\n      .addEventListener(\"click\", this.initReshuffle.bind(this));\r\n    document\r\n      .getElementsByClassName(\"end-turn\")[0]\r\n      .addEventListener(\"click\", this.endTurn.bind(this));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/buttons-events.js?");

/***/ }),

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Card; });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/js/utility.js\");\n\r\n\r\nclass Card {\r\n  constructor(name) {\r\n    this._name = name; // card symbol, i. e. \"2D\", \"3D\"...\r\n    this._element = document.createElement(\"div\");\r\n    this.fillElement();\r\n  }\r\n\r\n  fillElement() {\r\n    this._element.innerHTML =\r\n      \"<img src='assets/img/cards/\" + this._name + \".png' />\";\r\n    this._element.classList.add(this._name, \"card-element\");\r\n    this._element.style.overflow = \"hidden\";\r\n    this._element.style.transform = \"translate(0px, 0px)\";\r\n  }\r\n\r\n  addEvents() {\r\n    // handle dragging element, dispatch event when dropped\r\n    Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"dragElement\"])(this._element, this._name);\r\n  }\r\n\r\n  getElement() {\r\n    return this._element;\r\n  }\r\n\r\n  removeHtmlElement() {\r\n    this._element.parentNode.removeChild(this._element);\r\n  }\r\n\r\n  getName() {\r\n    return this._name;\r\n  }\r\n\r\n  getElement() {\r\n    return this._element;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/card.js?");

/***/ }),

/***/ "./src/js/deck.js":
/*!************************!*\
  !*** ./src/js/deck.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Deck; });\nclass Deck {\r\n  constructor() {\r\n    this._element = document.getElementById(\"a-marker\");\r\n    this._boxesStack = [];\r\n    this._cardsToTake = [];\r\n  }\r\n\r\n  renderCard(name) {\r\n    this._boxesStack.push(document.createElement(\"a-box\"));\r\n    this._boxesStack[this._boxesStack.length - 1].setAttribute(\"depth\", \"0.01\");\r\n    this._boxesStack[this._boxesStack.length - 1].setAttribute(\r\n      \"material\",\r\n      \"transparent: true;\"\r\n    );\r\n    this._boxesStack[this._boxesStack.length - 1].setAttribute(\r\n      \"src\",\r\n      \"assets/img/cards/\" + name + \".png\"\r\n    );\r\n    this._boxesStack[this._boxesStack.length - 1].setAttribute(\r\n      \"position\",\r\n      \"0 \" + (0.03 * this._boxesStack.length + 2.2) + \" 0\"\r\n    );\r\n    this._boxesStack[this._boxesStack.length - 1].setAttribute(\"height\", \"2\");\r\n    this._boxesStack[this._boxesStack.length - 1].setAttribute(\"width\", \"1.3\");\r\n    let rotation = Math.floor(Math.random() * 90);\r\n    this._boxesStack[this._boxesStack.length - 1].setAttribute(\r\n      \"rotation\",\r\n      \"20 \" + rotation + \" 0\"\r\n    );\r\n\r\n    // create animation of falling\r\n    let animation = document.createElement(\"a-animation\");\r\n    animation.setAttribute(\"attribute\", \"rotation\");\r\n    animation.setAttribute(\"dur\", \"200\");\r\n    animation.setAttribute(\"easing\", \"linear\");\r\n    animation.setAttribute(\"to\", \"90 \" + rotation + \" 0\");\r\n\r\n    let animation2 = document.createElement(\"a-animation\");\r\n    animation2.setAttribute(\"attribute\", \"position\");\r\n    animation2.setAttribute(\"dur\", \"200\");\r\n    animation2.setAttribute(\"easing\", \"linear\");\r\n    animation2.setAttribute(\"to\", \"0 \" + 0.03 * this._boxesStack.length + \" 0\");\r\n\r\n    this._boxesStack[this._boxesStack.length - 1].appendChild(animation);\r\n    this._boxesStack[this._boxesStack.length - 1].appendChild(animation2);\r\n    this._element.appendChild(this._boxesStack[this._boxesStack.length - 1]);\r\n  }\r\n\r\n  renderCardsToTake(number) {\r\n    // remove all cards\r\n    for (let i = this._cardsToTake.length - 1; i >= 0; i--) {\r\n      this.removeFromCardsToTake();\r\n    }\r\n\r\n    // render as many cards as number\r\n    for (let i = 0; i < number; i++) {\r\n      let newCard = document.createElement(\"a-box\");\r\n      newCard.setAttribute(\"depth\", \"0.01\");\r\n      newCard.setAttribute(\"material\", \"transparent: true;\");\r\n      newCard.setAttribute(\"src\", \"assets/img/cards/gray_back.png\");\r\n      newCard.setAttribute(\"position\", \"2.2 \" + 0.03 * i + \" 0\");\r\n      newCard.setAttribute(\"height\", \"2\");\r\n      newCard.setAttribute(\"width\", \"1.3\");\r\n      newCard.setAttribute(\"rotation\", \"270 0 0\");\r\n\r\n      this._cardsToTake.push(newCard);\r\n      this._element.appendChild(\r\n        this._cardsToTake[this._cardsToTake.length - 1]\r\n      );\r\n    }\r\n  }\r\n\r\n  // remove last thrown card\r\n  removeLastCard() {\r\n    let el = this._boxesStack.pop();\r\n    el.parentNode.removeChild(el);\r\n  }\r\n\r\n  removeFromCardsToTake() {\r\n    let el = this._cardsToTake.pop();\r\n    el.parentNode.removeChild(el);\r\n  }\r\n\r\n  removeAllCardsExceptTop() {\r\n    let src = this._boxesStack[this._boxesStack.length - 1].getAttribute(\"src\");\r\n\r\n    for (let i = this._boxesStack.length - 1; i >= 0; i--) {\r\n      this.removeLastCard();\r\n    }\r\n\r\n    this.renderCard(src.replace(\"assets/img/cards/\", \"\").replace(\".png\", \"\"));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/deck.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deck */ \"./src/js/deck.js\");\n/* harmony import */ var _buttons_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons-events */ \"./src/js/buttons-events.js\");\n\r\n\r\n\r\n\r\nclass Game {\r\n  constructor(sock, classes) {\r\n    this._availableCards = [\r\n      \"2C\",\r\n      \"3C\",\r\n      \"4C\",\r\n      \"5C\",\r\n      \"6C\",\r\n      \"7C\",\r\n      \"8C\",\r\n      \"9C\",\r\n      \"10C\",\r\n      \"AC\",\r\n      \"JC\",\r\n      \"KC\",\r\n      \"QC\",\r\n      \"2D\",\r\n      \"3D\",\r\n      \"4D\",\r\n      \"5D\",\r\n      \"6D\",\r\n      \"7D\",\r\n      \"8D\",\r\n      \"9D\",\r\n      \"10D\",\r\n      \"AD\",\r\n      \"JD\",\r\n      \"KD\",\r\n      \"QD\",\r\n      \"2H\",\r\n      \"3H\",\r\n      \"4H\",\r\n      \"5H\",\r\n      \"6H\",\r\n      \"7H\",\r\n      \"8H\",\r\n      \"9H\",\r\n      \"10H\",\r\n      \"AH\",\r\n      \"JH\",\r\n      \"KH\",\r\n      \"QH\",\r\n      \"2S\",\r\n      \"3S\",\r\n      \"4S\",\r\n      \"5S\",\r\n      \"6S\",\r\n      \"7S\",\r\n      \"8S\",\r\n      \"9S\",\r\n      \"10S\",\r\n      \"AS\",\r\n      \"JS\",\r\n      \"KS\",\r\n      \"QS\"\r\n    ];\r\n\r\n    this._cardsOnDeck = [];\r\n    this._players = [];\r\n    this._mainPlayer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([]);\r\n    this._deck = new _deck__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n    this._sock = sock;\r\n    this._buttonsEvents = new _buttons_events__WEBPACK_IMPORTED_MODULE_2__[\"ButtonsEvents\"](this._sock, classes);\r\n  }\r\n\r\n  startGame() {\r\n    // init buttons\r\n    this.initEventListener();\r\n    this.initNewCardButton();\r\n    this.initSockEvents();\r\n    this._buttonsEvents.initEvents();\r\n\r\n    // get first 5 cards\r\n    for (var i = 0; i < 5; i++) {\r\n      this.emitNewCard(true);\r\n    }\r\n\r\n    this._deck.renderCardsToTake(52); // render all cards\r\n  }\r\n\r\n  initSockEvents() {\r\n    this._sock.on(\"new-card\", card => {\r\n      if (card.success === true) {\r\n        this.addCardToMainPlayer(card.cardCode);\r\n      }\r\n    });\r\n\r\n    this._sock.on(\"card-thrown-all\", card => {\r\n      this._deck.renderCard(card.cardCode);\r\n    });\r\n\r\n    this._sock.on(\"new-card-all\", () => {\r\n      this._deck.removeFromCardsToTake();\r\n    });\r\n\r\n    this._sock.on(\"card-thrown\", card => {\r\n      this._mainPlayer.deleteCard(card.name);\r\n      this._mainPlayer.setLastThrownCard(card.name);\r\n    });\r\n\r\n    this._sock.on(\"reshuffle-all\", card => {\r\n      this._deck.renderCardsToTake(card.numberOfAvailableCards);\r\n      this._deck.removeAllCardsExceptTop();\r\n    });\r\n\r\n    this._sock.on(\"initial-cards\", cards => {\r\n      for (let i = 0; i < cards.cards.length; i++) {\r\n        this._deck.renderCard(cards.cards[i]);\r\n      }\r\n    });\r\n  }\r\n\r\n  initEventListener() {\r\n    // on card thrown\r\n    document.addEventListener(\"carddropped\", e => {\r\n      this.addCardOnDeck(e.detail.name);\r\n    });\r\n  }\r\n\r\n  addCardOnDeck(name) {\r\n    this._sock.emit(\"throw-card\", name);\r\n  }\r\n\r\n  initNewCardButton() {\r\n    var button = document.getElementsByClassName(\"new-card\")[0];\r\n    button.addEventListener(\"click\", () => {\r\n      this.emitNewCard(false);\r\n    });\r\n  }\r\n\r\n  addCardToMainPlayer(name) {\r\n    // name - card symbol\r\n    var node = document.getElementsByClassName(\"cards-wrapper\")[0];\r\n    this._mainPlayer.addCard(name);\r\n\r\n    // insert element into cards-wrapper\r\n    node.appendChild(this._mainPlayer.getLastCard().getElement());\r\n    this._mainPlayer.getLastCard().addEvents();\r\n  }\r\n\r\n  emitNewCard(firstTurn) {\r\n    this._sock.emit(\"make-turn\", { move: \"new-card\", firstTurn: firstTurn });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/js/game.js\");\n/* harmony import */ var _message_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-manager.js */ \"./src/js/message-manager.js\");\n\r\n\r\n\r\nconst classes = {\r\n  errorMsgVisible: \"visible\",\r\n  welcomePanelHidden: \"hidden\",\r\n  yourTurn: \"your-turn\"\r\n};\r\n\r\nconst classesToSend = {\r\n  visible: \"visible\",\r\n  notYourTurnElement: \"error-message\",\r\n  yourTurnElement: \"your-turn\"\r\n};\r\n\r\nconst sock = io();\r\nlet game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](sock, classesToSend);\r\nlet messageManager = new _message_manager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](sock, classesToSend);\r\n\r\nconst registerName = e => {\r\n  e.preventDefault();\r\n\r\n  let input = document.getElementById(\"name-input\");\r\n  let errorMsg = document.getElementsByClassName(\"error-msg\")[0];\r\n\r\n  const name = input.value;\r\n  input.value = \"\";\r\n\r\n  if (name.length < 3) {\r\n    errorMsg.innerHTML = \"Name is too short! Type at least 3 characters.\";\r\n    errorMsg.classList.add(classes.errorMsgVisible);\r\n  } else {\r\n    errorMsg.classList.remove(classes.errorMsgVisible);\r\n    sock.emit(\"name\", name);\r\n  }\r\n};\r\n\r\nconst registerSuccessRes = msg => {\r\n  const welcomePanel = document.getElementsByClassName(\"welcome-background\")[0];\r\n\r\n  welcomePanel.classList.add(\"hidden\");\r\n  game.startGame();\r\n};\r\n\r\ndocument.getElementById(\"name-form\").addEventListener(\"submit\", registerName);\r\nsock.on(\"registerRes\", registerSuccessRes);\r\n\r\nmessageManager.initEvents();\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/message-manager.js":
/*!***********************************!*\
  !*** ./src/js/message-manager.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MessageManager; });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/js/utility.js\");\n\r\n\r\nclass MessageManager {\r\n  constructor(sock, classes) {\r\n    this._classes = classes;\r\n    this._sock = sock;\r\n  }\r\n\r\n  initEvents() {\r\n    this._sock.on(\"your-turn\", this.myTurn.bind(this));\r\n    this._sock.on(\"message\", this.receiveMsgToAll.bind(this));\r\n    this._sock.on(\"error-msg\", this.errorMsg.bind(this));\r\n  }\r\n\r\n  myTurn() {\r\n    document\r\n      .getElementsByClassName(this._classes.yourTurnElement)[0]\r\n      .classList.add(this._classes.visible);\r\n  }\r\n\r\n  errorMsg(err) {\r\n    let el = document.getElementsByClassName(\r\n      this._classes.notYourTurnElement\r\n    )[0];\r\n    el.innerHTML = err.msg;\r\n\r\n    el.classList.remove(this._classes.visible);\r\n    // el.classList.add(this._classes.visible);\r\n\r\n    setTimeout(() => {\r\n      el.classList.add(this._classes.visible);\r\n    }, 10);\r\n  }\r\n\r\n  receiveMsgToAll(msg) {\r\n    const parent = document.getElementById(\"chat-list\");\r\n    const child = document.createElement(\"li\");\r\n\r\n    child.innerHTML = `<span class=\"date\">\r\n              ${Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"formatDate\"])(msg.date)}\r\n          </span>\r\n          <span class=\"message\">\r\n              ${msg.text}\r\n          </span>`;\r\n\r\n    parent.appendChild(child);\r\n    parent.scrollTop = parent.scrollHeight;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/message-manager.js?");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/js/card.js\");\n\r\n\r\nclass Player {\r\n  constructor(cards) {\r\n    this._cards = cards;\r\n    this._lastThrownCard = \"\";\r\n  }\r\n\r\n  deleteCard(name) {\r\n    for (let i = 0; i < this._cards.length; i++) {\r\n      if (this._cards[i].getName() == name) {\r\n        this._cards[i].removeHtmlElement();\r\n        delete this._cards[i];\r\n        this._cards.splice(i, 1);\r\n        break;\r\n      }\r\n    }\r\n  }\r\n\r\n  addCard(name) {\r\n    this._cards.push(new _card__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name));\r\n  }\r\n\r\n  getLastCard() {\r\n    return this._cards[this._cards.length - 1];\r\n  }\r\n\r\n  setLastThrownCard(name) {\r\n    this._lastThrownCard = name;\r\n  }\r\n\r\n  getLastThrownCard() {\r\n    return this._lastThrownCard;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/player.js?");

/***/ }),

/***/ "./src/js/utility.js":
/*!***************************!*\
  !*** ./src/js/utility.js ***!
  \***************************/
/*! exports provided: dragElement, formatDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dragElement\", function() { return dragElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatDate\", function() { return formatDate; });\nfunction dragElement(elmnt, name) {\r\n  let height = 90; // height of a card\r\n  elmnt.onmousedown = dragMouseDown;\r\n  elmnt.ontouchstart = dragMouseDown;\r\n\r\n  function dragMouseDown(e) {\r\n    e = e || window.event;\r\n    e.preventDefault();\r\n    // get the mouse cursor position at startup:\r\n    document.onmouseup = closeDragElement;\r\n    document.ontouchend = closeDragElement;\r\n    // call a function whenever the cursor moves:\r\n    document.onmousemove = elementDrag;\r\n    document.ontouchmove = elementDrag;\r\n  }\r\n\r\n  function elementDrag(e) {\r\n    e = e || window.event;\r\n    // e.preventDefault();\r\n\r\n    let clientY;\r\n    let clientX;\r\n\r\n    if (typeof e.clientX === \"undefined\") {\r\n      clientX = e.changedTouches[0].clientX;\r\n      clientY = e.changedTouches[0].clientY;\r\n    } else {\r\n      clientX = e.clientX;\r\n      clientY = e.clientY;\r\n    }\r\n\r\n    // calculate the new cursor position:\r\n    let diffX = clientX - (elmnt.offsetLeft * 2 + elmnt.offsetWidth) / 2;\r\n    let diffY = clientY - (window.innerHeight * 2 - height) / 2;\r\n    elmnt.style.overflow = \"visible\";\r\n    elmnt.style.transform = \"translate(\" + diffX + \"px, \" + diffY + \"px)\";\r\n  }\r\n\r\n  function closeDragElement(e) {\r\n    let clientY =\r\n      typeof e.clientY === \"undefined\"\r\n        ? e.changedTouches[0].clientY\r\n        : e.clientY;\r\n\r\n    // stop moving when mouse button is released:\r\n    let diffY = clientY - (window.innerHeight * 2 - height) / 2;\r\n\r\n    if ((elmnt.offsetHeight * 3) / 4 < Math.abs(diffY)) {\r\n      // when card is dropped, fire event\r\n      let event = new CustomEvent(\"carddropped\", { detail: { name: name } });\r\n      document.dispatchEvent(event);\r\n    }\r\n\r\n    document.onmouseup = null;\r\n    document.ontouchend = null;\r\n    document.onmousemove = null;\r\n    document.ontouchmove = null;\r\n    elmnt.style.overflow = \"hidden\";\r\n    elmnt.style.transform = \"translate(0, 0)\";\r\n  }\r\n}\r\n\r\nfunction formatDate(date) {\r\n  return `${date.slice(11, 16)}`;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/utility.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ }),

/***/ 0:
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/scss/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/index.js */\"./src/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/index.scss */\"./src/scss/index.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/index.js_./src/scss/index.scss?");

/***/ })

/******/ });