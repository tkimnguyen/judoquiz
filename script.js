let flashcards = [

["Attention!", "Kiyotsuke"],
["Bow", "Rei"],
["Begin", "Hajime"],
["Stop", "Matte"],
["Practice Hall", "Dojo"],
["Teacher", "Sensei"],
["Yes", "Hai"],
["No", "Iie"],
["Please", "Onegai Shimasu"],
["Thank you", "Domo Arigato"],
["That is all", "Sore made"],
["Don't Move", "Sono Mama"],
["Continue", "Yoshi"],
["Time!", "Jikan"],

["Sitting on knees", "Seiza"],
["Sitting cross legged", "Anza"],
["Following Foot Walking", "Tsugi Ashi"],
["Normal Foot Walking", "Ayumi Ashi"],
["Left", "Hidari"],
["Right", "Migi"],
["Natural posture", "Shizen Hontai"],
["Defensive posture", "Jigo Hontai"],

["Person performing technique", "Tori"],
["Person receiving technique", "Uke"],
["Referee", "Shimpan"],

["Judo uniform", "Judogi"],
["Judo belt", "Obi"],
["Judo jacket", "Uwagi"],
["Judo pants", "Zubon"],
["Judo sleeve", "Sode"],
["Judo lapel", "Eri"],

["Falling methods", "Ukemi"],
["Rear falling", "Koho Ukemi"],
["Forward rolling falling", "Zempo Kaiten Ukemi"],

["Free Practice", "Randori"],
["Formal prearranged practice", "Kata"],
["General practice", "Keiko"],
["Solo practice", "Tandoku Renshu"],
["Paired practice", "Sotai Renshu"],

["Tournament", "Shiai"],
["Contest area", "Shiaijo"],
["Judo mats", "Tatami"],
["Decision", "Hantei"],
["Win", "Gachi"],
["Loss", "Make"],

["One point", "Ippon"],
["Almost Ippon", "Waza ari"],
["Near Waza ari", "Yuko"],
["Near yuko", "Koka"],
["Holddown", "Osae Komi"],
["Holddown broken", "Toketa"],

["Caution", "Chui"],
["Warning", "Keikoku"],
["Disqualification", "Hansoku Make"],

["Off balance", "Kuzushi"],
["Entry", "Tsukuri"],
["Execution", "Kake"],

["Sweeping action", "Harai"],
["Reaping action", "Gari"],
["Dashing action", "Gake"],
["Springing action", "Hane"],

["Technique", "Waza"],
["Throw", "Nage"],
["Throwing techniques", "Nage Waza"],
["Grappling techniques", "Katame Waza"],
["Ground techniques", "Newaza"],

["Standing techniques", "Tachi Waza"],
["Sacrifice techniques", "Sutemi Waza"],

["Hand techniques", "Te Waza"],
["Hip techniques", "Koshi Waza"],
["Foot techniques", "Ashi Waza"],

["Major hip throw", "Ogoshi"],
["Major outer reap", "Osoto Gari"],

["Outside", "Soto"],
["Inside", "Uchi"],

["Holding techniques", "Osaekomi Waza"],
["Choke", "Shime"],
["Choking techniques", "Shime Waza"],
["Joint locking techniques", "Kansetsu Waza"],

["Principle of gentleness", "Ju"],
["Way of life", "Do"],
["Gentle way", "Judo"],
["Gentle art", "Jujitsu"],
["Way of the warrior", "Bushido"],

["First kyu", "Ikkyu"],
["Second kyu", "Nikyu"],
["Third kyu", "Sankyu"],
["Fourth kyu", "Yonkyu"],
["Fifth kyu", "Gokyu"],
["Sixth kyu", "Rokkyu"],

["First dan", "Shodan"],
["Second dan", "Nidan"],
["Third dan", "Sandan"],
["Fourth dan", "Yodan"],
["Fifth dan", "Godan"],

["Mutual welfare", "Jita Kyoei"],
["Maximum efficiency", "Seiroku Zenyo"],

["Founder of Judo", "Jigoro Kano"],
["Judo school", "Kodokan"],
["Kodokan founded", "1882"],

["Parts of a throw", "Kuzushi, Tsukuri, Kake"],
["Olympics introduction year", "1964"],
["Ultimate goal of Judo", "Perfection of human character"]

];

let currentIndex = 0;

function showCard() {
    document.getElementById("frontText").innerText = flashcards[currentIndex][0];
    document.getElementById("backText").innerText = flashcards[currentIndex][1];
    document.getElementById("counter").innerText =
        (currentIndex + 1) + " / " + flashcards.length;

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
