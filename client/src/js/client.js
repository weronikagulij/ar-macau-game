const classes = {
    errorMsgVisible: 'visible',
    welcomePanelHidden: 'hidden'
}

let userRegistered = false;
let name = "";

const registerName = (e) => {
    e.preventDefault();

    let input = document.getElementById("name-input");
    let errorMsg = document.getElementsByClassName('error-msg')[0];

    const name = input.value;
    input.value = "";

    if (name.length < 3) {
        errorMsg.innerHTML = "Name is too short! Type at least 3 characters."
        errorMsg.classList.add(classes.errorMsgVisible);
    } else {
        errorMsg.classList.remove(classes.errorMsgVisible);
        sock.emit('name', name);
    }
}

// msg : string ;
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
            ${formatDate(msg.date)}
        </span>
        <span class="message">
            ${msg.text}
        </span>`;

    parent.appendChild(child);
}

// new card events

const newCard = (card) => {
    console.log("you have taken a card " + card.cardCode);
}

const initNewCard = () => {
    sock.emit('make-turn', { move: 'new-card' })
}

const newCardAll = () => {

}

// reshuffle events

const initReshuffle = () => {
    sock.emit('make-turn', { move: 'reshuffle' })
}

const reshuffleAll = () => {
    // somebody reshuffled 
}

const endTurn = () => {
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
