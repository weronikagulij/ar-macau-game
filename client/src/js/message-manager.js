import { formatDate } from "./utility";

export default class MessageManager {
  constructor(sock, yourTurnEl, classes) {
    this._classes = classes;

    this._yourTurnEl = yourTurnEl;
    this._sock = sock;
    this._element = document.getElementsByClassName("messages-wrapper")[0];
    this._notYourTurnEl = document.getElementsByClassName(
      this._classes.notYourTurnElement
    )[0];
    // this._yourTurnClass = yourTurnClass;
  }

  initEvents() {
    console.log("init");
    this._sock.on("your-turn", this.myTurn.bind(this));
    this._sock.on("message", this.receiveMsgToAll.bind(this));
    this._sock.on("error-msg", this.errorMsg.bind(this));
  }

  myTurn() {
    console.log("my turn!");
    console.log(this._yourTurnEl);

    document
      .getElementsByClassName(this._classes.yourTurnElement)[0]
      .classList.add(this._classes.visible);
    // this._yourTurnEl.classList.add(this._classes.visible);
  }

  errorMsg(err) {
    console.log(this._notYourTurnEl);
    let el = document.getElementsByClassName(
      this._classes.notYourTurnElement
    )[0];
    el.innerHTML = err.msg;
    el.classList.add(this._classes.visible);
    // this._notYourTurnEl.innerHTML = err.msg;
    // this._notYourTurnEl.classList.add(this._classes.visible);

    // setTimeout(() => {
    //   console.log("po 2 sekundach");
    //   el.classList.remove(this._classes.visible);
    // }, 2000);
  }

  receiveMsgToAll(msg) {
    const parent = document.getElementById("chat-list");
    const child = document.createElement("li");
    // child.classList.add("no-highlight");
    child.innerHTML = `<span class="date">
              ${formatDate(msg.date)}
          </span>
          <span class="message">
              ${msg.text}
          </span>`;

    parent.appendChild(child);
    parent.scrollTop = parent.scrollHeight;
  }
}
