const User = require("./user.js");
<<<<<<< Updated upstream
<<<<<<< HEAD
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
=======
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
>>>>>>> 3395be2bc313910fc040a9c7bc3721ca1014485d
=======
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
<<<<<<< HEAD
const findPlayerById = id => {
  return players.find(x => x.sockid === id);
};

const sendMsgToAll = msg => {
  io.emit("message", { text: msg, date: new Date() });
};

const registerUser = (id, name) => {
  const user = new User(id, name);
=======
const findPlayerById = (id) => {
=======
const findPlayerById = id => {
>>>>>>> Stashed changes
  return players.find(x => x.sockid === id);
};

const sendMsgToAll = msg => {
  io.emit("message", { text: msg, date: new Date() });
};

const registerUser = (id, name) => {
<<<<<<< Updated upstream
  const user = new User(id, name)
>>>>>>> 3395be2bc313910fc040a9c7bc3721ca1014485d
=======
  const user = new User(id, name);
>>>>>>> Stashed changes

  if (players.length === 0) user.activeTurn = true;

  players.push(user);
<<<<<<< Updated upstream
<<<<<<< HEAD
  console.log("registered: " + user.sockid);
  io.to(user.sockid).emit("registerRes", "You are registered " + user.name);

  sendMsgToAll(`${name} was registered!`);
};

const sendNewCardToPlayer = player => {
  if (availableCards.length === 0) {
    io.to(player.sockid).emit("new-card", {
      cardCode: availableCards[i],
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
  sendMsgToAll(`${player.name} took a new card!`);
};

const reshuffleCards = player => {
  // to do: reshuffle
  sendMsgToAll(`${player.name} reshuffled!`);
};

const setNextActivePlayer = player => {
=======
  console.log("registered: " + user.sockid)
  io.to(user.sockid).emit('registerRes', 'You are registered ' + user.name);
=======
  console.log("registered: " + user.sockid);
  io.to(user.sockid).emit("registerRes", "You are registered " + user.name);
>>>>>>> Stashed changes

  sendMsgToAll(`${name} was registered!`);
};

const sendNewCardToPlayer = player => {
  if (availableCards.length === 0) {
    io.to(player.sockid).emit("new-card", {
      cardCode: availableCards[i],
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
  sendMsgToAll(`${player.name} took a new card!`);
};

const reshuffleCards = player => {
  // to do: reshuffle
  sendMsgToAll(`${player.name} reshuffled!`);
};

<<<<<<< Updated upstream
>>>>>>> 3395be2bc313910fc040a9c7bc3721ca1014485d
=======
const setNextActivePlayer = player => {
>>>>>>> Stashed changes
  let activeIndex = -1;

  players.forEach((p, i) => {
    if (p.activeTurn === true) {
      activeIndex = i;
      p.activeTurn = false;
    }
<<<<<<< Updated upstream
<<<<<<< HEAD
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
      // turn can only be played fore on user at the time
      if (turnData.move === "new-card") {
        sendNewCardToPlayer(player);
      } else if (turnData.move === "reshuffle") {
        reshuffleCards(player);
      } else {
        console.log("Error: there is no code for this move");
      }
    } else {
      sock.emit("error-msg", { msg: "Not your turn!", success: false });
    }
  });

  sock.on("end-turn", () => {
    player = findPlayerById(sock.id);

    if (typeof player !== "undefined" && player !== null) {
=======
  })
=======
  });
>>>>>>> Stashed changes

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
      // turn can only be played fore on user at the time
      if (turnData.move === "new-card") {
        sendNewCardToPlayer(player);
      } else if (turnData.move === "reshuffle") {
        reshuffleCards(player);
      } else {
        console.log("Error: there is no code for this move");
      }
    } else {
      sock.emit("error-msg", { msg: "Not your turn!", success: false });
    }
  });

  sock.on("end-turn", () => {
    player = findPlayerById(sock.id);

<<<<<<< Updated upstream
    if (typeof player !== 'undefined' && player !== null) {
>>>>>>> 3395be2bc313910fc040a9c7bc3721ca1014485d
=======
    if (typeof player !== "undefined" && player !== null) {
>>>>>>> Stashed changes
      if (player.activeTurn === true) {
        player = findPlayerById(sock.id);
        setNextActivePlayerMonitor(player);
      } else {
<<<<<<< Updated upstream
<<<<<<< HEAD
        sock.emit("error-msg", { msg: "Not your turn!", success: false });
      }
    }
  });

  sock.on("disconnect", () => {
    player = findPlayerById(sock.id);

    if (typeof player !== "undefined" && player !== null) {
      sendMsgToAll(player.name + " disconnected!");
=======
        sock.emit('error-msg', { msg: 'Not your turn!' })
=======
        sock.emit("error-msg", { msg: "Not your turn!", success: false });
>>>>>>> Stashed changes
      }
    }
  });

  sock.on("disconnect", () => {
    player = findPlayerById(sock.id);

<<<<<<< Updated upstream
    if (typeof player !== 'undefined' && player !== null) {
      sendMsgToAll(player.name + " disconnected!")
>>>>>>> 3395be2bc313910fc040a9c7bc3721ca1014485d
=======
    if (typeof player !== "undefined" && player !== null) {
      sendMsgToAll(player.name + " disconnected!");
>>>>>>> Stashed changes
      if (player.activeTurn === true) setNextActivePlayerMonitor(player);

      // remove player from array
      let i = players.indexOf(player);
      players.splice(i, 1);
    }
<<<<<<< Updated upstream
<<<<<<< HEAD
  });

  sock.on("throw-card", card => {
    console.log("rzucona");
    player = findPlayerById(sock.id);

    if (typeof player !== "undefined" && player !== null) {
      if (!cardsOnDeck.includes(card) && !availableCards.includes(card)) {
        cardsOnDeck.push(card);
        io.emit("card-thrown-all");
        sendMsgToAll(`${player.name} played ${card}`);
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

=======
  })
=======
  });
>>>>>>> Stashed changes

  sock.on("throw-card", card => {
    console.log("rzucona");
    player = findPlayerById(sock.id);

    if (typeof player !== "undefined" && player !== null) {
      if (!cardsOnDeck.includes(card) && !availableCards.includes(card)) {
        cardsOnDeck.push(card);
        io.emit("card-thrown-all");
        sendMsgToAll(`${player.name} played ${card}`);
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

<<<<<<< Updated upstream

>>>>>>> 3395be2bc313910fc040a9c7bc3721ca1014485d
=======
>>>>>>> Stashed changes
// const express = require("express");
// const app = express();
// const path = require("path");

// app.set("/", "html");
// app.use(express.static(path.join(__dirname, "/")));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.listen(3333, "0.0.0.0", () => {
//   console.log("listening on http://localhost:3333");
// });
