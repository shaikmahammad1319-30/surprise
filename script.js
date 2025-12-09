// =========================
// CHANGE PASSWORD HERE 👇
// =========================
const SECRET_PASSWORD = "1319";   // ← change your password here


// PASSWORD CHECK
document.getElementById("unlock-btn").onclick = function () {
    let input = document.getElementById("password-input").value;

    if (input === SECRET_PASSWORD) {
        document.getElementById("lock-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        document.getElementById("bg-music").play();
    } else {
        document.getElementById("error-msg").style.display = "block";
    }
};


// HEARTS
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 300);


// SLIDESHOW
let slideIndex = 0;
slideShow();

function slideShow() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";
    setTimeout(slideShow, 3000);
}
