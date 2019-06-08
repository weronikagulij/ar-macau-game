export function dragElement(elmnt, name) {
  let height = 90; // height of a card
  elmnt.onmousedown = dragMouseDown;
  elmnt.ontouchstart = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    document.onmouseup = closeDragElement;
    document.ontouchend = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    document.ontouchmove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    // e.preventDefault();

    let clientY;
    let clientX;

    if (typeof e.clientX === "undefined") {
      clientX = e.changedTouches[0].clientX;
      clientY = e.changedTouches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    // calculate the new cursor position:
    let diffX = clientX - (elmnt.offsetLeft * 2 + elmnt.offsetWidth) / 2;
    let diffY = clientY - (window.innerHeight * 2 - height) / 2;
    elmnt.style.overflow = "visible";
    elmnt.style.transform = "translate(" + diffX + "px, " + diffY + "px)";
  }

  function closeDragElement(e) {
    let clientY =
      typeof e.clientY === "undefined"
        ? e.changedTouches[0].clientY
        : e.clientY;

    // stop moving when mouse button is released:
    let diffY = clientY - (window.innerHeight * 2 - height) / 2;

    if ((elmnt.offsetHeight * 3) / 4 < Math.abs(diffY)) {
      // when card is dropped, fire event
      let event = new CustomEvent("carddropped", { detail: { name: name } });
      document.dispatchEvent(event);
    }

    document.onmouseup = null;
    document.ontouchend = null;
    document.onmousemove = null;
    document.ontouchmove = null;
    elmnt.style.overflow = "hidden";
    elmnt.style.transform = "translate(0, 0)";
  }
}

export function formatDate(date) {
  return `${date.slice(11, 16)}`;
}
