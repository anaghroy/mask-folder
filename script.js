let cursor = document.getElementById("cursor");
let body = document.body;

body.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.clientX + "px";
  cursor.style.top = dets.clientY + "px";
});