window.addEventListener("click", function (event) {
  "use strict";
  let element = document.getElementById("gunshot").cloneNode(),
    shotSound;
  document.body.appendChild(element);
  element.style.display = "inline";
  element.style.left = event.clientX - element.offsetWidth / 10 + "px";
  element.style.top = event.clientY - element.offsetHeight / 10 + "px";

  shotSound = new Audio();
  shotSound.src = "http://soundbible.com/mp3/9_mm_gunshot-mike-koenig-123.mp3";
  shotSound.play();
});
