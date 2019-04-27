function dragElement(elmnt, name) {
  var height = 90;
  elmnt.onmousedown = dragMouseDown;
  elmnt.ontouchstart = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.ontouchup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    document.ontouchend = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    // calculate the new cursor position:
    var diffX = e.clientX - (elmnt.offsetLeft * 2 + elmnt.offsetWidth) / 2;
    var diffY = e.clientY - (window.innerHeight * 2 - height) / 2;

    elmnt.style.transform = "translate(" + diffX + "px, " + diffY + "px)";
  }

  function closeDragElement(e) {
    // stop moving when mouse button is released:
    var diffY = e.clientY - (window.innerHeight * 2 - height) / 2;

    if ((elmnt.offsetHeight * 3) / 4 < Math.abs(diffY)) {
      // when card is dropped, fire event
      var event = new CustomEvent("carddropped", { detail: { name: name } });
      document.dispatchEvent(event);
    }

    document.onmouseup = null;
    document.ontouchend = null;
    document.onmousemove = null;
    document.ontouchmove = null;
    elmnt.style.transform = "translate(0, 0)";
  }
}
