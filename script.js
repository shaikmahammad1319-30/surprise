
const unlockBtn = document.getElementById("unlock-btn");
const lockScreen = document.getElementById("lock-screen");
const mainContent = document.getElementById("main-content");
const passwordInput = document.getElementById("password-input");
const errorMsg = document.getElementById("error-msg");
const music = document.getElementById("bg-music");

unlockBtn.addEventListener("click", () => {
    if (passwordInput.value === "1234") {
        lockScreen.style.display = "none";
        mainContent.style.display = "block";
        music.play();
    } else {
        errorMsg.style.display = "block";
    }
});
