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

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Card; });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ \"./src/js/utility.js\");\n\r\n\r\nclass Card {\r\n  constructor(name) {\r\n    this._name = name; // card symbol, i. e. \"2D\", \"3D\"...\r\n    this._element = document.createElement(\"div\");\r\n    this.fillElement();\r\n    this.initEventListener();\r\n  }\r\n\r\n  fillElement() {\r\n    this._element.innerHTML =\r\n      \"<img src='assets/img/cards/\" + this._name + \".png' />\";\r\n    this._element.classList.add(this._name, \"card-element\");\r\n    this._element.style.overflow = \"hidden\";\r\n    this._element.style.transform = \"translate(0px, 0px)\";\r\n    // overflow: hidden; transform: translate(0px, 0px);\r\n  }\r\n\r\n  addEvents() {\r\n    // handle dragging element, dispatch event when dropped\r\n    Object(_utility__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this._element, this._name);\r\n  }\r\n\r\n  getLink() {}\r\n\r\n  getCard() {}\r\n\r\n  animateOnDrag() {}\r\n\r\n  getElement() {\r\n    return this._element;\r\n  }\r\n\r\n  initEventListener() {\r\n    // document.addEventListener(\"carddropped\", e => {\r\n    //   console.log(\"from card\", e.detail);\r\n    //   if (e.detail.name === this._name) {\r\n    //     // this._element.parentNode.removeChild(this._element);\r\n    //   }\r\n    // });\r\n  }\r\n\r\n  removeHtmlElement() {\r\n    this._element.parentNode.removeChild(this._element);\r\n  }\r\n\r\n  getName() {\r\n    return this._name;\r\n  }\r\n\r\n  getElement() {\r\n    return this._element;\r\n  }\r\n}\r\n\r\n// _p = Card.prototype;\r\n\n\n//# sourceURL=webpack:///./src/js/card.js?");

/***/ }),

/***/ "./src/js/deck.js":
/*!************************!*\
  !*** ./src/js/deck.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Deck; });\nclass Deck {\r\n  constructor() {\r\n    this._element = document.getElementById(\"a-marker\");\r\n    this._boxesStack = [];\r\n    this._cardsToTake = [];\r\n  }\r\n\r\n  renderCard(name) {\r\n    this._boxesStack.push(document.createElement(\"a-box\"));\r\n    this._boxesStack[this._boxesStack.length - 1].setAttribute(\"depth\", \"0.01\");\r\n    this._boxesStack[this._boxesStack.length - 1].setAttribute(\r\n      \"material\",\r\n      \"transparent: true;\"\r\n    );\r\n    this._boxesStack[this._boxesStack.length - 1].setAttribute(\r\n      \"src\",\r\n      \"assets/img/cards/\" +\r\n      name +\r\n      \".png\"\r\n    );\r\n    this._boxesStack[this._boxesStack.length - 1].setAttribute(\r\n      \"position\",\r\n      \"0 \" + (0.03 * this._boxesStack.length + 2.2) + \" 0\"\r\n    );\r\n    this._boxesStack[this._boxesStack.length - 1].setAttribute(\"height\", \"2\");\r\n    this._boxesStack[this._boxesStack.length - 1].setAttribute(\"width\", \"1.3\");\r\n    let rotation = Math.floor(Math.random() * 90);\r\n    this._boxesStack[this._boxesStack.length - 1].setAttribute(\r\n      \"rotation\",\r\n      \"20 \" + rotation + \" 0\"\r\n    );\r\n\r\n    // create animation of falling\r\n    let animation = document.createElement(\"a-animation\");\r\n    animation.setAttribute(\"attribute\", \"rotation\");\r\n    animation.setAttribute(\"dur\", \"200\");\r\n    animation.setAttribute(\"easing\", \"linear\");\r\n    animation.setAttribute(\"to\", \"90 \" + rotation + \" 0\");\r\n\r\n    let animation2 = document.createElement(\"a-animation\");\r\n    animation2.setAttribute(\"attribute\", \"position\");\r\n    animation2.setAttribute(\"dur\", \"200\");\r\n    animation2.setAttribute(\"easing\", \"linear\");\r\n    animation2.setAttribute(\"to\", \"0 \" + 0.03 * this._boxesStack.length + \" 0\");\r\n\r\n    this._boxesStack[this._boxesStack.length - 1].appendChild(animation);\r\n    this._boxesStack[this._boxesStack.length - 1].appendChild(animation2);\r\n    this._element.appendChild(this._boxesStack[this._boxesStack.length - 1]);\r\n  }\r\n\r\n  renderCardsToTake(number) {\r\n    // remove all cards\r\n    for (let i = this._cardsToTake.length - 1; i >= 0; i--) {\r\n      this.removeFromCardsToTake();\r\n    }\r\n\r\n    // render as many cards as number\r\n    for (let i = 0; i < number; i++) {\r\n      let newCard = document.createElement(\"a-box\");\r\n      newCard.setAttribute(\"depth\", \"0.01\");\r\n      newCard.setAttribute(\"material\", \"transparent: true;\");\r\n      newCard.setAttribute(\r\n        \"src\",\r\n        \"assets/img/cards/gray_back.png\"\r\n      );\r\n      newCard.setAttribute(\"position\", \"2.2 \" + 0.03 * i + \" 0\");\r\n      newCard.setAttribute(\"height\", \"2\");\r\n      newCard.setAttribute(\"width\", \"1.3\");\r\n      newCard.setAttribute(\"rotation\", \"270 0 0\");\r\n\r\n      this._cardsToTake.push(newCard);\r\n      this._element.appendChild(\r\n        this._cardsToTake[this._cardsToTake.length - 1]\r\n      );\r\n    }\r\n  }\r\n\r\n  removeLastCard() {\r\n    let el = this._boxesStack.pop();\r\n    el.parentNode.removeChild(el);\r\n  }\r\n\r\n  removeFromCardsToTake() {\r\n    let el = this._cardsToTake.pop();\r\n    el.parentNode.removeChild(el);\r\n  }\r\n\r\n  removeAllCardsExceptTop() {\r\n    let src = this._boxesStack[this._boxesStack.length - 1].getAttribute(\r\n      \"src\"\r\n    );\r\n\r\n    for (let i = this._boxesStack.length - 1; i >= 0; i--) {\r\n      this.removeLastCard();\r\n    }\r\n\r\n    this.renderCard(\r\n      src.replace(\"assets/img/cards/\", \"\").replace(\".png\", \"\")\r\n    );\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/deck.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/js/player.js\");\n/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deck */ \"./src/js/deck.js\");\n\r\n\r\n\r\nclass Game {\r\n  constructor() {\r\n    this._availableCards = [\r\n      \"2C\",\r\n      \"3C\",\r\n      \"4C\",\r\n      \"5C\",\r\n      \"6C\",\r\n      \"7C\",\r\n      \"8C\",\r\n      \"9C\",\r\n      \"10C\",\r\n      \"AC\",\r\n      \"JC\",\r\n      \"KC\",\r\n      \"QC\",\r\n      \"2D\",\r\n      \"3D\",\r\n      \"4D\",\r\n      \"5D\",\r\n      \"6D\",\r\n      \"7D\",\r\n      \"8D\",\r\n      \"9D\",\r\n      \"10D\",\r\n      \"AD\",\r\n      \"JD\",\r\n      \"KD\",\r\n      \"QD\",\r\n      \"2H\",\r\n      \"3H\",\r\n      \"4H\",\r\n      \"5H\",\r\n      \"6H\",\r\n      \"7H\",\r\n      \"8H\",\r\n      \"9H\",\r\n      \"10H\",\r\n      \"AH\",\r\n      \"JH\",\r\n      \"KH\",\r\n      \"QH\",\r\n      \"2S\",\r\n      \"3S\",\r\n      \"4S\",\r\n      \"5S\",\r\n      \"6S\",\r\n      \"7S\",\r\n      \"8S\",\r\n      \"9S\",\r\n      \"10S\",\r\n      \"AS\",\r\n      \"JS\",\r\n      \"KS\",\r\n      \"QS\"\r\n    ];\r\n    this._cardsOnDeck = [];\r\n    this._players = [];\r\n    this._mainPlayer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([]);\r\n    this._deck = new _deck__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n  }\r\n  // this.initEventListener();\r\n  // this.initNewCardButton();\r\n  // this.initReshuffleButton();\r\n  // this.initUndoButton();\r\n  // this.firstInitialCard();\r\n\r\n  firstInitialCard() {\r\n    var firstCard = \"\";\r\n    var index = -1;\r\n\r\n    // select proper first card\r\n    while (\r\n      firstCard === \"\" ||\r\n      firstCard.includes(\"2\") ||\r\n      firstCard.includes(\"3\") ||\r\n      firstCard.includes(\"J\") ||\r\n      firstCard.includes(\"A\")\r\n    ) {\r\n      index = Math.floor(Math.random() * this._availableCards.length);\r\n      firstCard = this._availableCards[index];\r\n    }\r\n\r\n    this._cardsOnDeck.push(firstCard);\r\n    this._availableCards.splice(index, 1);\r\n\r\n    this._deck.renderCard(firstCard);\r\n\r\n    this._deck.renderCardsToTake(this._availableCards.length);\r\n  }\r\n\r\n  initEventListener() {\r\n    // on card thrown\r\n    document.addEventListener(\"carddropped\", e => {\r\n      this.addCardOnDeck(e.detail.name);\r\n    });\r\n  }\r\n\r\n  addCardOnDeck(name) {\r\n    this._mainPlayer.deleteCard(name);\r\n    this._mainPlayer.setLastThrownCard(name);\r\n    this._cardsOnDeck.push(name);\r\n    this._deck.renderCard(name);\r\n  }\r\n\r\n  initNewCardButton() {\r\n    var button = document.getElementsByClassName(\"new-card\")[0];\r\n    button.addEventListener(\"click\", () => {\r\n      if (this._availableCards.length > 0) {\r\n        // take a card\r\n        this.addCardToMainPlayer(-1);\r\n      } else {\r\n        // to do, information\r\n        console.log(\"There is no card on the deck!\");\r\n      }\r\n    });\r\n  }\r\n\r\n  initReshuffleButton() {\r\n    var button = document.getElementsByClassName(\"reshuffle\")[0];\r\n    button.addEventListener(\"click\", () => {\r\n      if (this._cardsOnDeck.length > 1) {\r\n        for (let i = this._cardsOnDeck.length - 2; i >= 0; i--) {\r\n          this._availableCards.push(this._cardsOnDeck[i]);\r\n          this._cardsOnDeck.splice(i, 1);\r\n        }\r\n        this._deck.renderCardsToTake(this._availableCards.length);\r\n        this._deck.removeAllCardsExceptTop();\r\n      } else {\r\n        // to do, information\r\n        console.log(\"There is no card to reshuffle!\");\r\n      }\r\n    });\r\n  }\r\n\r\n  initUndoButton() {\r\n    var button = document.getElementsByClassName(\"undo\")[0];\r\n    button.addEventListener(\"click\", () => {\r\n      var lastThrown = this._cardsOnDeck[this._cardsOnDeck.length - 1];\r\n      // if card on the deck is the same as last thrown by user\r\n      if (\r\n        this._mainPlayer.getLastThrownCard() === lastThrown &&\r\n        this._cardsOnDeck.length > 1\r\n      ) {\r\n        // remove last card from the deck and add one to available cards\r\n        this._availableCards.push(lastThrown);\r\n        this._cardsOnDeck.splice(this._cardsOnDeck.length - 1, 1);\r\n        this.addCardToMainPlayer(this._availableCards.length - 1);\r\n        this._deck.removeLastCard();\r\n      } else {\r\n        // to do, information\r\n        console.log(\"Could not return last move.\");\r\n      }\r\n    });\r\n  }\r\n\r\n  listenWhenCardThrown() { }\r\n\r\n  addPlayer() { }\r\n\r\n  startGame() {\r\n    // init buttons\r\n    this.initEventListener();\r\n    this.initNewCardButton();\r\n    this.initReshuffleButton();\r\n    this.initUndoButton();\r\n\r\n    // first card on deck\r\n    this.firstInitialCard();\r\n\r\n    // get first 5 cards\r\n    for (var i = 0; i < 5; i++) {\r\n      this.addCardToMainPlayer(-1);\r\n    }\r\n  }\r\n\r\n  addCardToMainPlayer(num) {\r\n    var node = document.getElementsByClassName(\"cards-wrapper\")[0];\r\n    var number;\r\n    if (num === -1) {\r\n      // choose random card and remove it from availableCards array\r\n      var number = Math.floor(Math.random() * this._availableCards.length);\r\n    } else number = num;\r\n    var name = this._availableCards[number]; // card symbol, i. e. \"2D\", \"3D\"...\r\n    this._mainPlayer.addCard(name);\r\n    this._availableCards.splice(number, 1);\r\n\r\n    // insert element into cards-wrapper\r\n    node.appendChild(this._mainPlayer.getLastCard().getElement());\r\n    this._mainPlayer.getLastCard().addEvents();\r\n    this._deck.removeFromCardsToTake();\r\n  }\r\n}\r\n\r\n// _p = Game.prototype;\r\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/js/game.js\");\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility */ \"./src/js/utility.js\");\n\r\n\r\n\r\n\r\n\r\nconst classes = {\r\n    errorMsgVisible: 'visible',\r\n    welcomePanelHidden: 'hidden'\r\n}\r\n\r\nlet userRegistered = false;\r\nlet name = \"\";\r\n\r\nconst registerName = (e) => {\r\n    e.preventDefault();\r\n\r\n    let input = document.getElementById(\"name-input\");\r\n    let errorMsg = document.getElementsByClassName('error-msg')[0];\r\n\r\n    const name = input.value;\r\n    input.value = \"\";\r\n\r\n    if (name.length < 3) {\r\n        errorMsg.innerHTML = \"Name is too short! Type at least 3 characters.\"\r\n        errorMsg.classList.add(classes.errorMsgVisible);\r\n    } else {\r\n        errorMsg.classList.remove(classes.errorMsgVisible);\r\n        sock.emit('name', name);\r\n    }\r\n}\r\n\r\n// msg : string ;\r\nconst showsuccessMsg = (msg) => {\r\n    const welcomePanel = document.getElementsByClassName('welcome-panel')[0];\r\n\r\n    welcomePanel.classList.add('hidden');\r\n    userRegistered = true;\r\n    console.log(msg);\r\n}\r\n\r\n// msg = { text : string; date : Date; }\r\nconst receiveMsgToAll = (msg) => {\r\n    const parent = document.getElementById('chat-list');\r\n    const child = document.createElement('li');\r\n    child.innerHTML =\r\n        `<span class=\"date\">\r\n            ${Object(_utility__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(msg.date)}\r\n        </span>\r\n        <span class=\"message\">\r\n            ${msg.text}\r\n        </span>`;\r\n\r\n    parent.appendChild(child);\r\n}\r\n\r\n// new card events\r\n\r\nconst newCard = (card) => {\r\n    console.log(\"you have taken a card \" + card.cardCode);\r\n}\r\n\r\nconst initNewCard = () => {\r\n    sock.emit('make-turn', { move: 'new-card' })\r\n}\r\n\r\nconst newCardAll = () => {\r\n\r\n}\r\n\r\n// reshuffle events\r\n\r\nconst initReshuffle = () => {\r\n    sock.emit('make-turn', { move: 'reshuffle' })\r\n}\r\n\r\nconst reshuffleAll = () => {\r\n    // somebody reshuffled \r\n}\r\n\r\nconst endTurn = () => {\r\n    sock.emit('end-turn', null);\r\n}\r\n\r\nconst error = (err) => {\r\n    if (err.msg === \"Not your turn!\") {\r\n        console.log(err.msg)\r\n    }\r\n}\r\n\r\nconst cardThrownAll = (card) => {\r\n    console.log(\"card was thrown on deck \" + card)\r\n}\r\n\r\nconst sock = io();\r\n\r\ndocument.getElementById(\"name-form\").addEventListener('submit', registerName)\r\ndocument.getElementsByClassName(\"new-card\")[0].addEventListener('click', initNewCard)\r\ndocument.getElementsByClassName(\"reshuffle\")[0].addEventListener('click', initReshuffle)\r\ndocument.getElementsByClassName(\"end-turn\")[0].addEventListener('click', endTurn)\r\n\r\n\r\nsock.on('registerRes', showsuccessMsg)\r\nsock.on('message', receiveMsgToAll);\r\nsock.on('error-msg', error)\r\n\r\nsock.on('new-card', newCard)\r\nsock.on('new-card-all', newCardAll)\r\n\r\nsock.on('reshuffle', reshuffleAll)\r\nsock.on('card-thrown-all', cardThrownAll)\r\n\r\nlet game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\ngame.startGame();\r\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/js/card.js\");\n\r\n\r\nclass Player {\r\n  constructor(cards) {\r\n    this._cards = cards;\r\n    this._lastThrownCard = \"\";\r\n  }\r\n\r\n  deleteCard(name) {\r\n    for (let i = 0; i < this._cards.length; i++) {\r\n      if (this._cards[i].getName() == name) {\r\n        this._cards[i].removeHtmlElement();\r\n        delete this._cards[i];\r\n        this._cards.splice(i, 1);\r\n        break;\r\n      }\r\n    }\r\n  }\r\n\r\n  addCard(name) {\r\n    this._cards.push(new _card__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name));\r\n  }\r\n\r\n  getLastCard() {\r\n    return this._cards[this._cards.length - 1];\r\n  }\r\n\r\n  setLastThrownCard(name) {\r\n    this._lastThrownCard = name;\r\n  }\r\n\r\n  getLastThrownCard() {\r\n    return this._lastThrownCard;\r\n  }\r\n}\r\n\r\n// _p = Player.prototype;\r\n\n\n//# sourceURL=webpack:///./src/js/player.js?");

/***/ }),

/***/ "./src/js/utility.js":
/*!***************************!*\
  !*** ./src/js/utility.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst dragElement = (elmnt, name) => {\r\n    let height = 90; // height of a card\r\n    elmnt.onmousedown = dragMouseDown;\r\n    elmnt.ontouchstart = dragMouseDown;\r\n\r\n    function dragMouseDown(e) {\r\n        e = e || window.event;\r\n        e.preventDefault();\r\n        // get the mouse cursor position at startup:\r\n        document.onmouseup = closeDragElement;\r\n        document.ontouchend = closeDragElement;\r\n        // call a function whenever the cursor moves:\r\n        document.onmousemove = elementDrag;\r\n        document.ontouchmove = elementDrag;\r\n    }\r\n\r\n    function elementDrag(e) {\r\n        e = e || window.event;\r\n        // e.preventDefault();\r\n\r\n        // calculate the new cursor position:\r\n        let diffX = e.clientX - (elmnt.offsetLeft * 2 + elmnt.offsetWidth) / 2;\r\n        let diffY = e.clientY - (window.innerHeight * 2 - height) / 2;\r\n        elmnt.style.overflow = \"visible\";\r\n        elmnt.style.transform = \"translate(\" + diffX + \"px, \" + diffY + \"px)\";\r\n    }\r\n\r\n    function closeDragElement(e) {\r\n        // stop moving when mouse button is released:\r\n        let diffY = e.clientY - (window.innerHeight * 2 - height) / 2;\r\n\r\n        if ((elmnt.offsetHeight * 3) / 4 < Math.abs(diffY)) {\r\n            // when card is dropped, fire event\r\n            let event = new CustomEvent(\"carddropped\", { detail: { name: name } });\r\n            document.dispatchEvent(event);\r\n        }\r\n\r\n        document.onmouseup = null;\r\n        document.ontouchend = null;\r\n        document.onmousemove = null;\r\n        document.ontouchmove = null;\r\n        elmnt.style.overflow = \"hidden\";\r\n        elmnt.style.transform = \"translate(0, 0)\";\r\n    }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (dragElement);\r\n\r\nconst formatDate = (date) => {\r\n    return `${date.slice(0, 10)} ${date.slice(11, 16)}`;\r\n}\r\n\r\n// export default formatDate;\n\n//# sourceURL=webpack:///./src/js/utility.js?");

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