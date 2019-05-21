module.exports = class User {
    constructor(sockid, name) {
        this._sockid = sockid;
        this._name = name;
        this._activeTurn = false;
    }

    get sockid() {
        return this._sockid;
    }

    get name() {
        return this._name;
    }

    get activeTurn() {
        return this._activeTurn;
    }

    set activeTurn(turn) {
        this._activeTurn = turn;
    }
}