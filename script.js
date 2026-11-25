const gift = document.getElementById("gift");

const message = document.getElementById("message");

const hint = document.getElementById("hint");

// OPEN THE GIFT

function openGift() {

    gift.classList.add("open");

    message.classList.add("show");

    hint.textContent =
        "Surprise! You found the happiness stash 💌";

    burst();

}

gift.addEventListener("click", openGift);

gift.addEventListener("keydown", (e) => {

    if (e.key === "Enter" || e.key === " ") {

        e.preventDefault();

        openGift();

    }

});


// CONFETTI ANIMATION

function burst() {

    const bits = [
        "💗",
        "🐾",
        "✨",
        "🌸",
        "🐟",
        "♡"
    ];

    for (let i = 0; i < 34; i++) {

        const el = document.createElement("span");

        el.className = "confetti";

        el.textContent =
            bits[Math.floor(Math.random() * bits.length)];

        el.style.left = Math.random() * 100 + "vw";

        el.style.fontSize =
            (14 + Math.random() * 18) + "px";

        el.style.animationDelay =
            Math.random() * 0.65 + "s";

        document.body.appendChild(el);

        setTimeout(() => {

            el.remove();

        }, 3600);

    }

}


// MORE HAPPY MESSAGES

const again = document.getElementById("again");

const messages = [

    "You are paws-itively wonderful! 🐾",

    "Sending you a pocket-sized hug! 💗",

    "Stay pawsitive, okay? 😸",

    "I'll take you to the moon!🌕",

    "You are nya-mazing!🐱",

    "The world is a little better with you in it! 🌸",

    "Don't forget to smile today! ✨",

    "You have the best smile ever!😉",

];

again.addEventListener("click", () => {

    burst();

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    message.querySelector("h2").textContent = randomMessage;

});


// FLOATING PAWS AND HEARTS

const field = document.getElementById("sparkles");

for (let i = 0; i < 20; i++) {

    const el = document.createElement("span");

    el.className = "floaty";

    el.textContent = ["🐾", "♡", "✦", "🐟"][i % 4];

    el.style.left = Math.random() * 100 + "%";

    el.style.animationDuration =
        (9 + Math.random() * 12) + "s";

    el.style.animationDelay =
        (-Math.random() * 18) + "s";

    field.appendChild(el);

}
