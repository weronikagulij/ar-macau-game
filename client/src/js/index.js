import Game from "./game.js";
import MessageManager from "./message-manager.js";

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

const sock = io();
let game = new Game(sock, classesToSend);
let messageManager = new MessageManager(sock, classesToSend);

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

const registerSuccessRes = msg => {
  const welcomePanel = document.getElementsByClassName("welcome-background")[0];

  welcomePanel.classList.add("hidden");
  console.log(msg);
  game.startGame();
};

document.getElementById("name-form").addEventListener("submit", registerName);
sock.on("registerRes", registerSuccessRes);

messageManager.initEvents();
