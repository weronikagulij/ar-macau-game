export class ButtonsEvents {
  constructor(sock) {
    this._sock = sock;
    console.log(this._sock, sock);
  }

  initReshuffle() {
    console.log(this._sock);
    this._sock.emit("make-turn", { move: "reshuffle" });
  }

  endTurn() {
    this._sock.emit("end-turn", null);
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
