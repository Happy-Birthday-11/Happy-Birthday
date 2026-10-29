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
    "❤️ Forever grateful for you",
    "🥳 Today is all about celebrating you",
    "🎉 Wishing you laughter and joy today",
    "💫 You light up every room you enter",
    "🌷 Your kindness makes the world better",
    "💝 You are a gift to everyone around you",
    "🌟 Never stop being wonderful",
    "🍰 May your life be as sweet as birthday cake",
    "🎊 Sending endless smiles your way",
    "💕 You deserve the very best in life",
    "🌺 May happiness follow you everywhere",
    "✨ Keep chasing your dreams fearlessly",
    "💗 Your smile is truly magical",
    "🌸 You make life more beautiful",
    "🎂 Another year, another reason to celebrate",
    "💖 Happiness looks wonderful on you",
    "🌈 May your future be colorful and bright",
    "🎁 Every moment with you is precious",
    "🌹 May your heart always stay happy",
    "💫 Wishing you success in everything you do",
    "🌟 You're stronger than you know",
    "🍫 Here's an extra sweet birthday wish",
    "🎊 May all your wishes come true today",
    "💌 Thank you for being you",
    "❤️ You are loved more than you realize",
    "🌙 May your nights be peaceful and calm",
    "🌞 May your mornings start with joy",
    "🌻 Keep blooming beautifully every day",
    "✨ Your presence makes life brighter",
    "🎉 Celebrate every little happiness",
    "💝 You deserve endless love and care",
    "🌸 May this year bring wonderful surprises",
    "🎂 Let's make today unforgettable",
    "🥰 Stay happy, healthy and blessed",
    "💕 Your happiness means a lot",
    "🌟 You inspire people around you",
    "🌹 Wishing you beautiful memories ahead",
    "💫 The world is better with you in it",
    "🎁 May good things always find you",
    "🍰 Enjoy every magical moment today",
    "🌈 Sending positivity and love",
    "💖 Keep smiling and shining",
    "🎊 Cheers to another amazing year",
    "❤️ You are someone's favorite person",
    "🌷 May love surround you forever",
    "✨ Every day is better because of you",
    "🥳 Wishing you endless adventures",
    "💝 Your heart is truly special",
    "🌟 Never forget how amazing you are",
    "🌺 You deserve every happiness",
    "🎂 May this birthday be your best one yet",
    "🍫 Sweet wishes for a sweet soul",
    "💌 Here's a hug wrapped in words"
];

/* Shuffle messages */
const shuffledMessages = [...balloonMessages].sort(
    () => Math.random() - 0.5
);

/* Create 8 balloons with unique messages */
for (let i = 0; i < 8; i++) {

    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.innerHTML = "🎈";

    balloon.addEventListener("click", () => {

        if (balloon.dataset.popped) return;

        balloon.dataset.popped = "true";
        balloon.innerHTML = "💥";

        showPopup(shuffledMessages[i]);
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

/* ===========================
   BIRTHDAY COUNTDOWN + EXPIRY
=========================== */

const countdownScreen = document.getElementById("countdownScreen");
const birthdayPage = document.getElementById("birthdayPage");

// Opens on Nov 15
const unlockDate = new Date("November 15, 2026 00:00:00").getTime();

// Expires on Nov 17
const expiryDate = new Date("November 17, 2026 00:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    // AFTER NOVEMBER 17
    if (now >= expiryDate) {

        countdownScreen.innerHTML = `
            <div class="countdown-box">
                <h1>🎂 Birthday Surprise Ended</h1>
                <p style="margin-top:20px;font-size:20px;">
                    ❤️ This special birthday page was available only on
                    November 15 and November 16.
                </p>

                <p style="margin-top:20px;">
                    Thank you for visiting ✨
                </p>
            </div>
        `;

        birthdayPage.style.display = "none";
        return;
    }

    // BETWEEN NOV 15 AND NOV 16
    if (now >= unlockDate && now < expiryDate) {

        countdownScreen.style.display = "none";
        birthdayPage.style.display = "block";

        return;
    }

    // BEFORE NOV 15
    const difference = unlockDate - now;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);