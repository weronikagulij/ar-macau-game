export class ButtonsEvents {
  constructor(sock, yourTurnEl, classes) {
    this._sock = sock;
    this._yourTurnEl = yourTurnEl;
    this._classes = classes;
    console.log("tutaJJJJJ 2", classes);
  }

  initReshuffle() {
    console.log(this._sock);
    this._sock.emit("make-turn", { move: "reshuffle" });
  }

  endTurn() {
    this._sock.emit("end-turn", null);
    console.log(this);
    document
      .getElementsByClassName(this._classes.yourTurnElement)[0]
      .classList.remove(this._classes.visible);
    // this._yourTurnEl.classList.remove(this._classes.visible);
  }

  initEvents() {
    document
      .getElementsByClassName("reshuffle")[0]
      .addEventListener("click", this.initReshuffle.bind(this));
    document
      .getElementsByClassName("end-turn")[0]
      .addEventListener("click", this.endTurn.bind(this));
  }
}
