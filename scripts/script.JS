let BUTTON = document.getElementById("BUTTON");
let MUSICA = document.getElementById("MUSICA");
let disco = document.querySelector(".disco");
BUTTON.addEventListener("click", () => {
    if (MUSICA.paused || MUSICA.ended) {
      MUSICA.play();
      BUTTON.src = "images/botones.png";
      disco.animation().playState = "running";
    } else {
      MUSICA.pause();
      BUTTON.src = "images/botones(1).png";
      disco.animation().playState = "paused";
    }
  });