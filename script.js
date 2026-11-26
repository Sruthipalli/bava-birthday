
function startSurprise() {

  document.getElementById("surprise").style.display = "block";

  document.getElementById("surprise").scrollIntoView({
    behavior: "smooth"
  });

  // Floating hearts
  for (let i = 0; i < 30; i++) {

    let heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = "25px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "transform 5s linear, opacity 5s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.style.transform = "translateY(-110vh)";
      heart.style.opacity = "0";
    }, 100);

    setTimeout(() => heart.remove(), 5500);
  }
}

function finalSurprise() {

  document.getElementById("finalMessage").innerHTML =
    "BAVA ❤️ YOU ARE MY FAVOURITE NOTIFICATION! 💗<br><br>Happy Birthday!";

}
