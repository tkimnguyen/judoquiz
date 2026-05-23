let allCards = [
    { front: "Bow", back: "Rei", belt: "rokkyu" },
    { front: "Begin", back: "Hajime", belt: "rokkyu" },
    { front: "Stop", back: "Matte", belt: "rokkyu" },

    { front: "Off balance", back: "Kuzushi", belt: "gokyu" },
    { front: "Entry", back: "Tsukuri", belt: "gokyu" },

    { front: "Execution", back: "Kake", belt: "yonkyu" },
    { front: "Throw", back: "Nage", belt: "yonkyu" },

    { front: "Hip techniques", back: "Koshi Waza", belt: "sankyu" },
    { front: "Foot techniques", back: "Ashi Waza", belt: "sankyu" },

    { front: "Joint lock", back: "Kansetsu Waza", belt: "nikyu" },

    { front: "Principle of gentleness", back: "Ju", belt: "ikkyu" }
];

let flashcards = [...allCards];
let index = 0;

let mode = "study";
let instructorMode = false;

let correct = 0;
let total = 0;
let timer = 0;
let timerInterval;

function showCard() {
    let card = flashcards[index];

    document.getElementById("frontText").innerText = card.front;
    document.getElementById("backText").innerText =
        instructorMode && mode === "quiz" ? "???" : card.back;

    document.getElementById("cardInner").classList.remove("flipped");

    document.getElementById("counter").innerText =
        `${index + 1}/${flashcards.length}`;
}

function flipCard() {
    document.getElementById("cardInner").classList.toggle("flipped");
}

function nextCard() {
    index = (index + 1) % flashcards.length;
    showCard();
}

function prevCard() {
    index = (index - 1 + flashcards.length) % flashcards.length;
    showCard();
}

/* BELT FILTER */
function setBelt(belt) {
    if (belt === "all") {
        flashcards = [...allCards];
    } else {
        flashcards = allCards.filter(c => c.belt === belt);
    }
    index = 0;
    showCard();
}

/* MODE */
function setMode(m) {
    mode = m;

    if (mode === "quiz") {
        document.getElementById("quizButtons").style.display = "block";
        correct = 0;
        total = 0;
        startTimer();
    } else {
        document.getElementById("quizButtons").style.display = "none";
        stopTimer();
    }

    updateScore();
}

/* QUIZ */
function answer(isCorrect) {
    total++;
    if (isCorrect) correct++;

    nextCard();
    updateScore();
}

function updateScore() {
    document.getElementById("score").innerText =
        mode === "quiz" ? `Score: ${correct}/${total}` : "";
}

/* INSTRUCTOR MODE */
function toggleInstructor() {
    instructorMode = !instructorMode;
    showCard();
}

/* TIMER */
function startTimer() {
    timer = 0;
    timerInterval = setInterval(() => {
        timer++;
        document.getElementById("timer").innerText = `Time: ${timer}s`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    document.getElementById("timer").innerText = "";
}

/* INIT */
document.getElementById("card").addEventListener("click", flipCard);
showCard();
