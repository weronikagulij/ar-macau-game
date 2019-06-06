const User = require("./user.js");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const app = express();
let availableCards = [
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

let cardsOnDeck = [];

const clientPath = `${__dirname}/../client`;
app.use(express.static(clientPath));

const server = http.createServer(app);
const io = socketio(server);

let players = []; // array of Users
let settingActivePlayer = false;

const findPlayerById = id => {
  return players.find(x => x.sockid === id);
};

const sendMsgToAll = (name, msg) => {
  io.emit("message", {
    text: `<span class="name">${name}</span> ${msg}`,
    date: new Date()
  });
};

const registerUser = (id, name) => {
  const user = new User(id, name);

  if (players.length === 0) user.activeTurn = true;

  players.push(user);
  console.log("registered: " + user.sockid);
  io.to(user.sockid).emit("registerRes", "You are registered " + user.name);

  sendMsgToAll(name, "was registered!");

  // choose first card and send information
  let firstCard;
  if (cardsOnDeck.length === 0) {
    const i = (number = Math.floor(Math.random() * availableCards.length));
    availableCards.splice(number, 1);
    cardsOnDeck.push(availableCards[i]);
  }

  io.to(user.sockid).emit("initial-cards", { cards: cardsOnDeck });
};

const sendNewCardToPlayer = player => {
  if (availableCards.length === 0) {
    io.to(player.sockid).emit("error-msg", {
      msg: "No more cards to take!",
      success: false
    });
    return;
  }

  // chose card
  const i = (number = Math.floor(Math.random() * availableCards.length));

  // send card to a player
  io.to(player.sockid).emit("new-card", {
    cardCode: availableCards[i],
    success: true
  });
  availableCards.splice(number, 1);

  // send message to everyone so they can change view
  io.emit("new-card-all", null);
  sendMsgToAll(player.name, "took a new card!");
};

// const i = (number = Math.floor(Math.random() * availableCards.length));
// availableCards[i]
// availableCards.splice(number, 1);

const reshuffleCards = player => {
  console.log(availableCards);
  // put all cards into availableCards except first one
  if (cardsOnDeck.length > 0) {
    for (let i = 0; i < cardsOnDeck.length - 1; i++) {
      availableCards.push(cardsOnDeck[i]);
    }

    cardsOnDeck.splice(0, cardsOnDeck.length - 1);
    console.log(availableCards);
    io.emit("reshuffle-all", {
      firstCardCode: cardsOnDeck[cardsOnDeck.length - 1],
      numberOfAvailableCards: availableCards.length
    });
  }

  sendMsgToAll(player.name, "reshuffled!");
};

const setNextActivePlayer = player => {
  let activeIndex = -1;

  players.forEach((p, i) => {
    if (p.activeTurn === true) {
      activeIndex = i;
      p.activeTurn = false;
    }
  });

  if (activeIndex === -1 && players.length !== 0) {
    players[0].activeTurn = true;
    console.log("tura gracza 1" + players[0].activeTurn);
  } else if (activeIndex === players.length - 1) {
    players[0].activeTurn = true;
    console.log(" tura gracza nr 1" + players[0].activeTurn);
  } else {
    players[activeIndex + 1].activeTurn = true;
    console.log(
      "tura gracza " +
        (activeIndex + 1) +
        players[0].activeTurn +
        " | " +
        +players[1].activeTurn
    );
  }
};

const setNextActivePlayerMonitor = player => {
  // to do przeniesc to na koniec ruchu uzytkownika albo przy disconneccie aktywnego
  while (settingActivePlayer === true) {}
  settingActivePlayer = true;
  setNextActivePlayer(player);
  settingActivePlayer = false;
};

io.on("connection", sock => {
  let player;
  console.log("someone connected", sock.id);

  sock.on("name", name => {
    player = findPlayerById(sock.id);
    registerUser(sock.id, name);
  });

  sock.on("make-turn", turnData => {
    player = findPlayerById(sock.id);
    if (typeof player === "undefined" || player === null) {
      console.log("Error: there is no player as registered");
    } else if (player.activeTurn === true) {
      if (turnData.move === "new-card") {
        // new card turn
        sendNewCardToPlayer(player);
      } else if (turnData.move === "reshuffle") {
        // reshuffle turn
        reshuffleCards(player);
      } else {
        console.log("Error: there is no code for this move");
      }
    } else if (turnData.firstTurn === true && turnData.move === "new-card") {
      // if player has no active turn, but ask for the cards at the beginning
      sendNewCardToPlayer(player);
    } else {
      sock.emit("error-msg", { msg: "Not your turn!", success: false });
    }
  });

  sock.on("end-turn", () => {
    player = findPlayerById(sock.id);

    if (typeof player !== "undefined" && player !== null) {
      if (player.activeTurn === true) {
        player = findPlayerById(sock.id);
        setNextActivePlayerMonitor(player);
      } else {
        sock.emit("error-msg", { msg: "Not your turn!", success: false });
      }
    }
  });

  sock.on("disconnect", () => {
    player = findPlayerById(sock.id);

    if (typeof player !== "undefined" && player !== null) {
      sendMsgToAll(player.name, " disconnected!");
      if (player.activeTurn === true) setNextActivePlayerMonitor(player);

      // remove player from array
      let i = players.indexOf(player);
      players.splice(i, 1);
    }
  });

  sock.on("throw-card", card => {
    player = findPlayerById(sock.id);

    if (typeof player !== "undefined" && player !== null) {
      if (player.activeTurn === false) {
        sock.emit("error-msg", { msg: "Not your turn!", success: false });
      } else if (
        !cardsOnDeck.includes(card) &&
        !availableCards.includes(card)
      ) {
        console.log("rzucona ", card);
        cardsOnDeck.push(card);
        sock.emit("card-thrown", { name: card, success: true });
        io.emit("card-thrown-all", { cardCode: card });
        sendMsgToAll(player.name, "played ${card}");
      }
    }
  });
});

server.on("error", err => {
  console.error("Server error:", err);
});

server.listen(8080, () => {
  console.log("server started on http://localhost:8080");
});
