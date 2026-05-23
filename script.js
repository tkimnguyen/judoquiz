let gradingMode = false;
let cleanupMode = false;
let gradingBelt = null;

let allCards = [

/* ROKKYU */
{ front: "Attention!", back: "Kiyotsuke", belt: "rokkyu" },
{ front: "Bow", back: "Rei", belt: "rokkyu" },
{ front: "Begin", back: "Hajime", belt: "rokkyu" },
{ front: "Stop", back: "Matte", belt: "rokkyu" },
{ front: "Practice Hall", back: "Dojo", belt: "rokkyu" },
{ front: "Teacher", back: "Sensei", belt: "rokkyu" },
{ front: "Yes", back: "Hai", belt: "rokkyu" },
{ front: "No", back: "Iie", belt: "rokkyu" },
{ front: "Please", back: "Onegai Shimasu", belt: "rokkyu" },
{ front: "Thank you", back: "Domo Arigato", belt: "rokkyu" },

/* GOKYU */
{ front: "Sitting on knees", back: "Seiza", belt: "gokyu" },
{ front: "Sitting cross legged", back: "Anza", belt: "gokyu" },
{ front: "Following Foot Walking", back: "Tsugi Ashi", belt: "gokyu" },
{ front: "Normal Foot Walking", back: "Ayumi Ashi", belt: "gokyu" },

/* YONKYU */
{ front: "Judo uniform", back: "Judogi", belt: "yonkyu" },
{ front: "Person performing technique", back: "Tori", belt: "yonkyu" },
{ front: "Person receiving technique", back: "Uke", belt: "yonkyu" },

/* SANKYU */
{ front: "Falling methods", back: "Ukemi", belt: "sankyu" },
{ front: "Rear falling", back: "Koho Ukemi", belt: "sankyu" },
{ front: "Forward rolling falling", back: "Zempo Kaiten Ukemi", belt: "sankyu" },
{ front: "Free Practice", back: "Randori", belt: "sankyu" },
{ front: "Formal prearranged routine practice", back: "Kata", belt: "sankyu" },

/* NIKYU */
{ front: "Off balance", back: "Kuzushi", belt: "nikyu" },
{ front: "Entry into throw", back: "Tsukuri", belt: "nikyu" },
{ front: "Execution of throw", back: "Kake", belt: "nikyu" },
{ front: "Technique", back: "Waza", belt: "nikyu" },
{ front: "Throw", back: "Nage", belt: "nikyu" },

/* IKKYU */
{ front: "Throwing Technique", back: "Nage Waza", belt: "ikkyu" },
{ front: "Grappling techniques", back: "Katame Waza", belt: "ikkyu" },
{ front: "Techniques from supine position", back: "Newaza", belt: "ikkyu" },
{ front: "Throwing from standing position", back: "Tachi Waza", belt: "ikkyu" },
{ front: "Sacrifice throws", back: "Sutemi Waza", belt: "ikkyu" },

/* UNKNOWN (everything else) */
{ front: "Left", back: "Hidari", belt: "unknown" },
{ front: "Right", back: "Migi", belt: "unknown" },

{ front: "Tournament", back: "Shiai", belt: "unknown" },
{ front: "Judo mats", back: "Tatami", belt: "unknown" },

{ front: "Holddown", back: "Osae Komi", belt: "unknown" },
{ front: "Holddown broken", back: "Toketa", belt: "unknown" },

{ front: "One point", back: "Ippon", belt: "unknown" },
{ front: "Almost Ippon", back: "Waza ari", belt: "unknown" },
{ front: "Near Waza ari", back: "Yuko", belt: "unknown" },
{ front: "Near yuko", back: "Koka", belt: "unknown" },

{ front: "That is all", back: "Sore made", belt: "unknown" },

{ front: "Note", back: "Shido", belt: "unknown" },
{ front: "Caution", back: "Chui", belt: "unknown" },
{ front: "Warning", back: "Keikoku", belt: "unknown" },
{ front: "Loss by rule violation", back: "Hansoku Make", belt: "unknown" },

{ front: "Decision", back: "Hantei", belt: "unknown" },

{ front: "Don't Move", back: "Sono Mama", belt: "unknown" },
{ front: "Continue", back: "Yoshi", belt: "unknown" },

{ front: "Natural Posture", back: "Shizen Hontai", belt: "unknown" },
{ front: "Defensive Posture", back: "Jigo Hontai", belt: "unknown" },

{ front: "Sweeping action of leg", back: "Harai", belt: "unknown" },
{ front: "Reaping action of leg", back: "Gari", belt: "unknown" },

{ front: "Hand techniques", back: "Te Waza", belt: "unknown" },
{ front: "Hip techniques", back: "Koshi Waza", belt: "unknown" },
{ front: "Foot techniques", back: "Ashi Waza", belt: "unknown" },

{ front: "Major hip throw", back: "Ogoshi", belt: "unknown" },
{ front: "Major outside reap", back: "Osoto gari", belt: "unknown" },

{ front: "Outside", back: "Soto", belt: "unknown" },
{ front: "Inside", back: "Uchi", belt: "unknown" },

{ front: "Choke", back: "Shime", belt: "unknown" },
{ front: "Joint locking techniques", back: "Kansetsu Waza", belt: "unknown" },

{ front: "Principle of Gentleness", back: "Ju", belt: "unknown" },
{ front: "Way of life", back: "Do", belt: "unknown" },
{ front: "Gentle Way", back: "Judo", belt: "unknown" },

{ front: "Founder of Judo", back: "Jigoro Kano", belt: "unknown" },
{ front: "Name of the school Kano founded", back: "Kodokan", belt: "unknown" },
{ front: "Date of founding", back: "1882", belt: "unknown" },

{ front: "Parts of a throw", back: "Kuzushi, Tsukuri, Kake", belt: "unknown" },

{ front: "Olympics introduction year", back: "1964", belt: "unknown" },

{ front: "Ultimate goal of Judo", back: "The harmonious development and perfection of human character", belt: "unknown" }

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

    if (gradingMode && total >= flashcards.length) {
        finishGrading();
        return;
    }

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

function startGrading() {
    gradingMode = true;
    cleanupMode = false;

    gradingBelt = prompt("Enter belt to test (rokkyu, gokyu, yonkyu, sankyu, nikyu, ikkyu):");

    flashcards = allCards.filter(c => c.belt === gradingBelt);

    shuffleDeck();

    correct = 0;
    total = 0;

    document.getElementById("quizButtons").style.display = "block";

    showCard();
}

function finishGrading() {
    gradingMode = false;

    let percent = total > 0 ? Math.round((correct / total) * 100) : 0;

    let result = percent >= 70 ? "PASS ✅" : "FAIL ❌";

    alert(
        `Belt Test: ${gradingBelt.toUpperCase()}\n\n` +
        `Score: ${correct}/${total} (${percent}%)\n\n` +
        result
    );
}

function startCleanup() {
    cleanupMode = true;
    gradingMode = false;

    flashcards = allCards.filter(c => c.belt === "unknown");
    index = 0;

    document.getElementById("cleanupControls").style.display = "block";
    document.getElementById("quizButtons").style.display = "none";

    showCard();
}

function assignBelt() {
    let selectedBelt = document.getElementById("beltAssign").value;

    let card = flashcards[index];

    // update original dataset
    let match = allCards.find(c =>
        c.front === card.front && c.back === card.back
    );

    if (match) {
        match.belt = selectedBelt;
    }

    nextCard();
}

function exportData() {
    let dataStr = JSON.stringify(allCards, null, 2);

    let blob = new Blob([dataStr], { type: "application/json" });
    let url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = "judo-curriculum.json";
    a.click();
}

/* INIT */
document.getElementById("card").addEventListener("click", flipCard);
showCard();
