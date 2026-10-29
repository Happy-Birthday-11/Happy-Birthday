/* =====================================
   FLOATING HEARTS
===================================== */

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 500);

/* =====================================
   SHOOTING STARS
===================================== */

function createShootingStar() {
    const star = document.createElement("div");
    star.style.position = "fixed";
    star.style.width = "3px";
    star.style.height = "3px";
    star.style.background = "white";
    star.style.borderRadius = "50%";
    star.style.boxShadow = "0 0 10px white, 0 0 20px white, 0 0 40px white";
    star.style.top = Math.random() * 250 + "px";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.zIndex = "-1";
    document.body.appendChild(star);
    star.animate(
        [
            { transform: "translate(0,0)", opacity: 1},
            { transform: "translate(-450px,450px)", opacity: 0}
        ],
        { duration: 1800, easing: "linear" }
    );
    setTimeout(() => {
        star.remove();
    }, 1800);
}

setInterval(createShootingStar, 4000);

/* =====================================
   POPUP
===================================== */

const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const closePopup = document.querySelector(".close");
function showPopup(message) {
    popupText.innerHTML = message;
    popup.style.display = "flex";
}

function hidePopup() {
    popup.style.display = "none";
}

closePopup.addEventListener("click", hidePopup);
window.addEventListener("click", (e) => {
    if (e.target === popup) {
        hidePopup();
    }
});

/* =====================================
   TOAST
===================================== */

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerHTML = message;
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

/* =====================================
   BALLOON GAME
===================================== */

const balloonContainer = document.getElementById("balloonContainer");
const balloonMessages = [
    "❤️ You make every day brighter",
    "🌸 You deserve endless happiness",
    "✨ Keep shining like a star",
    "💖 Thank you for being amazing",
    "🎂 Happy Birthday Superstar",
    "🌙 You're special beyond words",
    "🌹 Sending you lots of love",
    "🍫 Hope your day is as sweet as you",
    "🎁 You deserve all the happiness",
    "💌 You are deeply appreciated",
    "🌈 May all your dreams come true",
    "❤️ Forever grateful for you"
];

for (let i = 0; i < 8; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.innerHTML = "🎈";
    balloon.addEventListener("click", () => {
        if (balloon.innerHTML === "💥") return;
        balloon.innerHTML = "💥";
        const msg =
            balloonMessages[
            Math.floor(
                Math.random() * balloonMessages.length
            )
            ];
        showPopup(msg);
    });
    balloonContainer.appendChild(balloon);
}

/* =====================================
   CHOCOLATE GAME
===================================== */

const gameArea = document.getElementById("gameArea");
const basket = document.getElementById("basket");
const scoreBoard = document.getElementById("score");
let score = 0;
gameArea.addEventListener("mousemove", (e) => {
    const rect = gameArea.getBoundingClientRect();
    let x = e.clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width - 60) x = rect.width - 60;
    basket.style.left = x + "px";
});

function createChocolate() {
    const chocolate = document.createElement("div");
    chocolate.className = "chocolate";
    chocolate.innerHTML = "🍫";
    chocolate.style.left =
        Math.random() *
        (gameArea.clientWidth - 50) + "px";
    chocolate.style.top = "0px";
    gameArea.appendChild(chocolate);
    let topPos = 0;
    const falling = setInterval(() => {
        topPos += 4;
        chocolate.style.top = topPos + "px";
        const cRect = chocolate.getBoundingClientRect();
        const bRect = basket.getBoundingClientRect();
        const caught =
            cRect.bottom >= bRect.top &&
            cRect.left <= bRect.right &&
            cRect.right >= bRect.left;
        if (caught) {
            score++;
            scoreBoard.innerHTML = `Score : ${score}`;
            showToast("🍫 Chocolate collected!");
            chocolate.remove();
            clearInterval(falling);
            if (score === 5) {
                showPopup(
                    "🎉 Great Job! You've collected 5 chocolates. Keep going!"
                );
            }
            if (score === 10) {
                clearInterval(chocolateInterval);
                document .getElementById("secretMessage") .classList.remove("hidden");
                showPopup(`
                    <strong>💌 Secret Birthday Wish Unlocked 💌</strong>
                    <br><br>
                    May your days always be filled with happiness, success,
                    beautiful memories and lots of reasons to smile.
                `);
            }
        }
        if (topPos > gameArea.clientHeight) {
            chocolate.remove();
            clearInterval(falling);
        }
    }, 20);
}

let gameStarted = false;
let chocolateInterval;
const startBtn = document.getElementById("startGameBtn");
startBtn.addEventListener("click", () => {
    if (gameStarted) return;
    gameStarted = true;
    startBtn.innerHTML = "🎉 Game Started";
    startBtn.disabled = true;
    showToast("🍫 Catch the chocolates!");
    chocolateInterval = setInterval(createChocolate, 1400);
});

/* =====================================
   GIFT GAME
===================================== */

const gifts = document.querySelectorAll(".gift");
const rewards = [
    "🌹 A Beautiful Rose For You",
    "🍫 Unlimited Chocolates",
    "💖 A Heart Full Of Love",
    "✨ One Magical Birthday Wish",
    "🌙 A Night Full Of Stars",
    "🎂 Extra Birthday Cake",
    "💌 A Secret Hug From Me"
];

gifts.forEach((gift) => {
    gift.addEventListener("click", () => {
        if (gift.dataset.opened) return;
        gift.dataset.opened = true;
        gift.innerHTML = "✨";
        const reward =
            rewards[
            Math.floor(
                Math.random() * rewards.length
            )
            ];
        showPopup(reward);
    });
});

/* =====================================
   WELCOME SURPRISE
===================================== */

const cake = document.getElementById("birthdayCake");

if (cake) {
    cake.addEventListener("click", () => {
        showCelebration(
            "🎂 Happy Birthday 🎂",
            "May all your wishes come true and may your day be filled with happiness, laughter, love and beautiful memories ❤️",
            "birthday"
        );
    });
}

const heart = document.getElementById("loveHeart");

if (heart) {
    heart.addEventListener("click", () => {
        showCelebration(
            "❤️ Special Message ❤️",
            "You are one of the most precious people in my life. Thank you for every smile, every memory and every happy moment ❤️",
            "heart"
        );
    });
}

function createConfetti(items) {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.innerHTML =
            items[
            Math.floor(
                Math.random() * items.length
            )
            ];
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = (15 + Math.random() * 25) + "px";
        confetti.style.zIndex = "9999";
        confetti.style.pointerEvents = "none";
        document.body.appendChild( confetti );
        let pos = 0;
        const speed = 3 + Math.random() * 4;
        const fall =
            setInterval(() => {
                pos += speed;
                confetti.style.top = pos + "px";
                if (pos >
                    window.innerHeight) {
                    clearInterval(fall);
                    confetti.remove();
                }
            }, 20);
    }
}

function showCelebration(title, message, type = "birthday") {
    const popup = document.createElement("div");
    popup.className = "celebration-popup";
    popup.innerHTML = `
        <div class="celebration-card">
            <div class="celebration-stars">✨🎉✨</div>
            <h1>${title}</h1>
            <p>${message}</p>
            <button class="close-celebration">Close ❤️</button>
        </div>
    `;

    document.body.appendChild(popup);
    if (type === "birthday") {
        createConfetti(["🎉", "🎊", "✨", "🎂", "🥳"]);
    } else {
        createConfetti(["❤️", "💖", "💕", "💗", "💘"]);
    }
    popup
        .querySelector(".close-celebration")
        .addEventListener("click", () => {
            popup.remove();
        });
}

function createPaperConfetti() {

    const colors = [
        "#ffd700",
        "#ffb6c1",
        "#ffffff",
        "#ffc0cb",
        "#f8d568"
    ];

    for (let i = 0; i < 150; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("paper-confetti");

        confetti.style.left = Math.random() * 100 + "vw";

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.width =
            Math.random() * 8 + 5 + "px";

        confetti.style.height =
            Math.random() * 12 + 6 + "px";

        confetti.style.animationDuration =
            Math.random() * 4 + 4 + "s";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 10000);
    }
}
