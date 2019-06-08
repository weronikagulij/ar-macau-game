export class ButtonsEvents {
  constructor(sock, classes) {
    this._sock = sock;
    this._classes = classes;
  }

  initReshuffle() {
    this._sock.emit("make-turn", { move: "reshuffle" });
  }

  endTurn() {
    this._sock.emit("end-turn", null);
    document
      .getElementsByClassName(this._classes.yourTurnElement)[0]
      .classList.remove(this._classes.visible);
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
