import { formatDate } from "./utility";

export default class MessageManager {
  constructor(sock) {
    this._sock = sock;
  }

  initEvents() {
    console.log("init");
    this._sock.on("your-turn", this.myTurn);
    this._sock.on("message", this.receiveMsgToAll);
    this._sock.on("error-msg", this.errorMsg);
  }

  myTurn() {
    console.log("my turn!");
  }

  errorMsg(err) {
    console.log(err.msg);
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
