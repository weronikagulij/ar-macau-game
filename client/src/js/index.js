import Game from "./game.js";
import MessageManager from "./message-manager.js";

// import { formatDate } from "./utility";

const classes = {
  errorMsgVisible: "visible",
  welcomePanelHidden: "hidden",
  yourTurn: "your-turn"
};

const classesToSend = {
  visible: "visible",
  notYourTurnElement: "error-message",
  yourTurnElement: "your-turn"
};

let yourTurnEl = document.getElementsByClassName("your-turn")[0];
console.log("TUUUUUU", yourTurnEl);

const sock = io();
let game = new Game(sock, yourTurnEl, classesToSend);
let messageManager = new MessageManager(sock, yourTurnEl, classesToSend);
console.log(messageManager, yourTurnEl, classesToSend);

// const formatDate = date => {
//   return `${date.slice(11, 16)}`;
// };

// let userRegistered = false;
// let name = "";

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
  // userRegistered = true;
  console.log(msg);
  game.startGame();
};

// const receiveMsgToAll = msg => {
//   console.log("tutaj");
//   const parent = document.getElementById("chat-list");
//   const child = document.createElement("li");
//   // child.classList.add("no-highlight");
//   child.innerHTML = `<span class="date">
//             ${formatDate(msg.date)}
//         </span>
//         <span class="message">
//             ${msg.text}
//         </span>`;

//   parent.appendChild(child);
//   parent.scrollTop = parent.scrollHeight;
// };

// new card events

// const newCard = card => {
//   if (success === true) {
//     console.log(card, "you have taken a card " + card.cardCode);
//   }
// };

// const initNewCard = () => {
//   sock.emit("make-turn", { move: "new-card" });
// };

// const newCardAll = () => {};

// reshuffle events

// const initReshuffle = () => {
//   sock.emit("make-turn", { move: "reshuffle" });
// };

// const reshuffleAll = () => {
//   // somebody reshuffled
// };

// const endTurn = () => {
//   sock.emit("end-turn", null);
// };

// const cardThrownAll = card => {
//   console.log("card was thrown on deck " + card);
// };

document.getElementById("name-form").addEventListener("submit", registerName);
// document
//   .getElementsByClassName("new-card")[0]
//   .addEventListener("click", initNewCard);
// document
//   .getElementsByClassName("reshuffle")[0]
//   .addEventListener("click", initReshuffle);
// document
//   .getElementsByClassName("end-turn")[0]
//   .addEventListener("click", endTurn);

sock.on("registerRes", registerSuccessRes);
// sock.on("message", receiveMsgToAll);
// sock.on("error-msg", error);

// sock.on("new-card", newCard);
// sock.on("new-card-all", newCardAll);

// sock.on("reshuffle", reshuffleAll);
// sock.on("card-thrown-all", cardThrownAll);

messageManager.initEvents();
