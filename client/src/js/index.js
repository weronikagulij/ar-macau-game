import Game from "./game.js";

<<<<<<< Updated upstream
<<<<<<< HEAD
// import { formatDate } from "./utility";

const classes = {
  errorMsgVisible: "visible",
  welcomePanelHidden: "hidden"
};

const sock = io();
let game = new Game(sock);

const formatDate = date => {
  return `${date.slice(0, 10)} ${date.slice(11, 16)}`;
};
=======

import formatDate from "./utility"

const classes = {
    errorMsgVisible: 'visible',
    welcomePanelHidden: 'hidden'
}
>>>>>>> 3395be2bc313910fc040a9c7bc3721ca1014485d
=======
// import { formatDate } from "./utility";

const classes = {
  errorMsgVisible: "visible",
  welcomePanelHidden: "hidden"
};

const sock = io();
let game = new Game(sock);

const formatDate = date => {
  return `${date.slice(0, 10)} ${date.slice(11, 16)}`;
};
>>>>>>> Stashed changes

let userRegistered = false;
let name = "";

<<<<<<< Updated upstream
<<<<<<< HEAD
const registerName = e => {
  e.preventDefault();

  let input = document.getElementById("name-input");
  let errorMsg = document.getElementsByClassName("error-msg")[0];

  const name = input.value;
  input.value = "";

  if (name.length < 3) {
    errorMsg.innerHTML = "Name is too short! Type at least 3 characters.";
    errorMsg.classList.add(classes.errorMsgVisible);
  } else {
    errorMsg.classList.remove(classes.errorMsgVisible);
    sock.emit("name", name);
  }
};

// msg : string ;
const registerSuccessRes = msg => {
  const welcomePanel = document.getElementsByClassName("welcome-background")[0];

  welcomePanel.classList.add("hidden");
  userRegistered = true;
  console.log(msg);
  game.startGame();
};

const receiveMsgToAll = msg => {
  console.log("tutaj");
  const parent = document.getElementById("chat-list");
  const child = document.createElement("li");
  child.innerHTML = `<span class="date">
=======
const registerName = (e) => {
    e.preventDefault();
=======
const registerName = e => {
  e.preventDefault();
>>>>>>> Stashed changes

  let input = document.getElementById("name-input");
  let errorMsg = document.getElementsByClassName("error-msg")[0];

  const name = input.value;
  input.value = "";

  if (name.length < 3) {
    errorMsg.innerHTML = "Name is too short! Type at least 3 characters.";
    errorMsg.classList.add(classes.errorMsgVisible);
  } else {
    errorMsg.classList.remove(classes.errorMsgVisible);
    sock.emit("name", name);
  }
};

// msg : string ;
<<<<<<< Updated upstream
const showsuccessMsg = (msg) => {
    const welcomePanel = document.getElementsByClassName('welcome-panel')[0];

    welcomePanel.classList.add('hidden');
    userRegistered = true;
    console.log(msg);
}

// msg = { text : string; date : Date; }
const receiveMsgToAll = (msg) => {
    const parent = document.getElementById('chat-list');
    const child = document.createElement('li');
    child.innerHTML =
        `<span class="date">
>>>>>>> 3395be2bc313910fc040a9c7bc3721ca1014485d
=======
const registerSuccessRes = msg => {
  const welcomePanel = document.getElementsByClassName("welcome-background")[0];

  welcomePanel.classList.add("hidden");
  userRegistered = true;
  console.log(msg);
  game.startGame();
};

const receiveMsgToAll = msg => {
  console.log("tutaj");
  const parent = document.getElementById("chat-list");
  const child = document.createElement("li");
  child.innerHTML = `<span class="date">
>>>>>>> Stashed changes
            ${formatDate(msg.date)}
        </span>
        <span class="message">
            ${msg.text}
        </span>`;

<<<<<<< Updated upstream
<<<<<<< HEAD
  parent.appendChild(child);
};

// new card events

// const newCard = card => {
//   if (success === true) {
//     console.log(card, "you have taken a card " + card.cardCode);
//   }
// };

// const initNewCard = () => {
//   sock.emit("make-turn", { move: "new-card" });
// };

const newCardAll = () => {};
=======
    parent.appendChild(child);
}
=======
  parent.appendChild(child);
};
>>>>>>> Stashed changes

// new card events

// const newCard = card => {
//   if (success === true) {
//     console.log(card, "you have taken a card " + card.cardCode);
//   }
// };

// const initNewCard = () => {
//   sock.emit("make-turn", { move: "new-card" });
// };

<<<<<<< Updated upstream
const newCardAll = () => {

}
>>>>>>> 3395be2bc313910fc040a9c7bc3721ca1014485d
=======
const newCardAll = () => {};
>>>>>>> Stashed changes

// reshuffle events

const initReshuffle = () => {
<<<<<<< Updated upstream
<<<<<<< HEAD
  sock.emit("make-turn", { move: "reshuffle" });
};

const reshuffleAll = () => {
  // somebody reshuffled
};

const endTurn = () => {
  sock.emit("end-turn", null);
};

const error = err => {
  if (err.msg === "Not your turn!") {
    console.log(err.msg);
  }
};

const cardThrownAll = card => {
  console.log("card was thrown on deck " + card);
};

document.getElementById("name-form").addEventListener("submit", registerName);
// document
//   .getElementsByClassName("new-card")[0]
//   .addEventListener("click", initNewCard);
document
  .getElementsByClassName("reshuffle")[0]
  .addEventListener("click", initReshuffle);
document
  .getElementsByClassName("end-turn")[0]
  .addEventListener("click", endTurn);

sock.on("registerRes", registerSuccessRes);
sock.on("message", receiveMsgToAll);
sock.on("error-msg", error);

// sock.on("new-card", newCard);
sock.on("new-card-all", newCardAll);

sock.on("reshuffle", reshuffleAll);
sock.on("card-thrown-all", cardThrownAll);
=======
    sock.emit('make-turn', { move: 'reshuffle' })
}
=======
  sock.emit("make-turn", { move: "reshuffle" });
};
>>>>>>> Stashed changes

const reshuffleAll = () => {
  // somebody reshuffled
};

const endTurn = () => {
<<<<<<< Updated upstream
    sock.emit('end-turn', null);
}

const error = (err) => {
    if (err.msg === "Not your turn!") {
        console.log(err.msg)
    }
}

const cardThrownAll = (card) => {
    console.log("card was thrown on deck " + card)
}

const sock = io();

document.getElementById("name-form").addEventListener('submit', registerName)
document.getElementsByClassName("new-card")[0].addEventListener('click', initNewCard)
document.getElementsByClassName("reshuffle")[0].addEventListener('click', initReshuffle)
document.getElementsByClassName("end-turn")[0].addEventListener('click', endTurn)


sock.on('registerRes', showsuccessMsg)
sock.on('message', receiveMsgToAll);
sock.on('error-msg', error)

sock.on('new-card', newCard)
sock.on('new-card-all', newCardAll)

sock.on('reshuffle', reshuffleAll)
sock.on('card-thrown-all', cardThrownAll)

let game = new Game();
game.startGame();
>>>>>>> 3395be2bc313910fc040a9c7bc3721ca1014485d
=======
  sock.emit("end-turn", null);
};

const error = err => {
  if (err.msg === "Not your turn!") {
    console.log(err.msg);
  }
};

const cardThrownAll = card => {
  console.log("card was thrown on deck " + card);
};

document.getElementById("name-form").addEventListener("submit", registerName);
// document
//   .getElementsByClassName("new-card")[0]
//   .addEventListener("click", initNewCard);
document
  .getElementsByClassName("reshuffle")[0]
  .addEventListener("click", initReshuffle);
document
  .getElementsByClassName("end-turn")[0]
  .addEventListener("click", endTurn);

sock.on("registerRes", registerSuccessRes);
sock.on("message", receiveMsgToAll);
sock.on("error-msg", error);

// sock.on("new-card", newCard);
sock.on("new-card-all", newCardAll);

sock.on("reshuffle", reshuffleAll);
sock.on("card-thrown-all", cardThrownAll);
>>>>>>> Stashed changes
