// var box = document.createElement("a-box");
// var node = document.getElementById("a-marker");
// node.appendChild(box);

// console.log(document.getElementById("a-marker"));

var marker = document.getElementById("a-marker");
marker.addEventListener("markerFound", () => {
  console.log("found");
});

console.log(marker.object3D.visible);

var game = new Game();
game.startGame();
