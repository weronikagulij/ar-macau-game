import { formatDate } from "./utility";

export default class MessageManager {
  constructor(sock, classes) {
    this._classes = classes;
    this._sock = sock;
  }

  initEvents() {
    this._sock.on("your-turn", this.myTurn.bind(this));
    this._sock.on("message", this.receiveMsgToAll.bind(this));
    this._sock.on("error-msg", this.errorMsg.bind(this));
  }

  myTurn() {
    document
      .getElementsByClassName(this._classes.yourTurnElement)[0]
      .classList.add(this._classes.visible);
  }

  errorMsg(err) {
    let el = document.getElementsByClassName(
      this._classes.notYourTurnElement
    )[0];
    el.innerHTML = err.msg;

    el.classList.remove(this._classes.visible);
    // el.classList.add(this._classes.visible);

    setTimeout(() => {
      el.classList.add(this._classes.visible);
    }, 10);
  }

  receiveMsgToAll(msg) {
    const parent = document.getElementById("chat-list");
    const child = document.createElement("li");

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
