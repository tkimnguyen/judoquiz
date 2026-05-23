let flashcards = [
    ["Attention!", "Kiyotsuke"],
    ["Bow", "Rei"],
    ["Begin", "Hajime"],
    ["Stop", "Matte"],

    ["Practice Hall", "Dojo"],
    ["Teacher", "Sensei"],

    ["Sitting on knees", "Seiza"],
    ["Sitting cross legged", "Anza"],

    ["Following Foot Walking", "Tsugi Ashi"],
    ["Normal Foot Walking", "Ayumi Ashi"],

    ["Judo uniform", "Judogi"],
    ["Tori", "Person performing technique"],
    ["Uke", "Person receiving technique"],

    ["Left", "Hidari"],
    ["Right", "Migi"],

    ["Falling methods", "Ukemi"],
    ["Rear falling", "Koho Ukemi"],
    ["Forward roll", "Zempo Kaiten Ukemi"],

    ["Free Practice", "Randori"],
    ["Formal routine practice", "Kata"],
    ["Tournament", "Shiai"],

    ["Judo mats", "Tatami"],

    ["Holddown", "Osae Komi"],
    ["Holddown broken", "Toketa"],

    ["One point", "Ippon"],
    ["Almost Ippon", "Waza ari"],

    ["Thank you", "Domo Arigato"],
    ["Please", "Onegai Shimasu"],

    ["Caution", "Chui"],
    ["Warning", "Keikoku"],

    ["Don't Move", "Sono Mama"],
    ["Continue", "Yoshi"],

    ["Off balance", "Kuzushi"],
    ["Entry", "Tsukuri"],
    ["Execution", "Kake"],

    ["Technique", "Waza"],
    ["Throwing technique", "Nage Waza"],

    ["Principle of Gentleness", "Ju"],
    ["Way", "Do"],
    ["Gentle Way", "Judo"]
];

let currentIndex = 0;

function showCard() {
    document.getElementById("frontText").innerText = flashcards[currentIndex][0];
    document.getElementById("backText").innerText = flashcards[currentIndex][1];
    document.getElementById("counter").innerText =
        `${currentIndex + 1} / ${flashcards.length}`;

    document.getElementById("cardInner").classList.remove("flipped");
}

function flipCard() {
    document.getElementById("cardInner").classList.toggle("flipped");
}

function nextCard() {
    currentIndex = (currentIndex + 1) % flashcards.length;
    showCard();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    showCard();
}

function shuffleDeck() {
    flashcards.sort(() => Math.random() - 0.5);
    currentIndex = 0;
    showCard();
}

document.getElementById("card").addEventListener("click", flipCard);

showCard();
