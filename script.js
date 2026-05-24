let gradingMode = false;
let cleanupMode = false;
let gradingBelt = null;
let testQuestions = [];
let testLength = 20;
let currentTestIndex = 0;
let studentName = "";
let testActive = false;

let allCards = [

/* ROKKYU */
{ front: "Attention!", back: "Kiyotsuke", belt: "rokkyu" },
{ front: "Bow", back: "Rei", belt: "rokkyu" },
{ front: "Begin", back: "Hajime", belt: "rokkyu" },
{ front: "Stop", back: "Matte", belt: "rokkyu" },
{ front: "Practice Hall", back: "Dojo", belt: "rokkyu" },
{ front: "Teacher", back: "Sensei", belt: "rokkyu" },
{ front: "Sitting on knees", back: "Seiza", belt: "rokkyu" },
{ front: "Sitting cross legged", back: "Anza", belt: "rokkyu" },
{ front: "Following Foot Walking", back: "Tsugi Ashi", belt: "rokkyu" },
{ front: "Normal Foot Walking", back: "Ayumi Ashi", belt: "rokkyu" },
{ front: "Judo uniform", back: "Judogi", belt: "rokkyu" },
{ front: "Judo practitioner or player", back: "Judoka", belt: "rokkyu" },
{ front: "Person performing technique", back: "Tori", belt: "rokkyu" },
{ front: "Person receiving technique", back: "Uke", belt: "rokkyu" },
{ front: "Left", back: "Hidari", belt: "rokkyu" },
{ front: "Right", back: "Migi", belt: "rokkyu" },
{ front: "Falling methods or ways", back: "Ukemi", belt: "rokkyu" },
{ front: "Falling methods to the rear", back: "Koho Ukemi", belt: "rokkyu" },
{ front: "Forward rolling falling", back: "Zempo Kaiten Ukemi", belt: "rokkyu" },
{ front: "Free Practice", back: "Randori", belt: "rokkyu" },
{ front: "Formal prearranged routine practice", back: "Kata", belt: "rokkyu" },
{ front: "Tournament", back: "Shiai", belt: "rokkyu" },
{ front: "Judo mats", back: "Tatami", belt: "rokkyu" },
{ front: "Holddown", back: "Osae Komi", belt: "rokkyu" },
{ front: "Holddown broken", back: "Toketa", belt: "rokkyu" },
{ front: "One point", back: "Ippon", belt: "rokkyu" },
{ front: "Almost Ippon", back: "Waza ari", belt: "rokkyu" },
{ front: "Near Waza ari", back: "Yuko", belt: "rokkyu" },
{ front: "Near yuko", back: "Koka", belt: "rokkyu" },
{ front: "That is all", back: "Sore made", belt: "rokkyu" },
{ front: "Sixth class (kyu) judo rank", back: "Rokyu/Rokkyu", belt: "rokkyu" },
{ front: "Yes", back: "Hai", belt: "rokkyu" },
{ front: "No", back: "Iie", belt: "rokkyu" },
{ front: "Please", back: "Onegai Shimasu", belt: "rokkyu" },
{ front: "Thank you", back: "Domo Arigato", belt: "rokkyu" },
{ front: "What is the name of your club?", back: "(will vary at each dojo)", belt: "rokkyu" },
{ front: "Name of Instructor/Sensei", back: "(will vary at each dojo)", belt: "rokkyu" },
{ front: "Who was the founder of judo?", back: "Dr. Jigoro Kano", belt: "rokkyu" },
{ front: "Name of the school Kano founded", back: "Kodokan", belt: "rokkyu" },
{ front: "Date of founding", back: "1882", belt: "rokkyu" },
{ front: "What was unarmed combat called in Japan before judo?", back: "Jujitsu", belt: "rokkyu" },
{ front: "How long had unarmed combat martial arts been practiced in Japan?", back: "About 600 to 1000 years.", belt: "rokkyu" },
{ front: "Name the three parts of unarmed combat in English and Japanese", back: "1. Throwing Techniques - Nage Waza; 2. Grappling Techniques - Katame Waza; 3. Striking Techniques - Atemi Waza", belt: "rokkyu" },
{ front: "Name the three parts of a judo throw in English and Japanese.", back: "1. Off-balance - Kuzushi; 2. Entry - Tsukuri; 3. Completion -", belt: "rokkyu" },
{ front: "List the USJA senior belt ranks in order by color:", back: "White, Yellow, Orange, Green, Brown, Black", belt: "rokkyu" },

/* GOKYU */
{ front: "Note", back: "Shido", belt: "gokyu" },
{ front: "Caution", back: "Chui", belt: "gokyu" },
{ front: "Warning", back: "Keikoku", belt: "gokyu" },
{ front: "Loss by rule violation", back: "Hansoku Make", belt: "gokyu" },
{ front: "Decision", back: "Hantei", belt: "gokyu" },
{ front: "Don't Move", back: "Sono Mama", belt: "gokyu" },
{ front: "Continue", back: "Yoshi", belt: "gokyu" },
{ front: "Natural Posture", back: "Shizen Hontai", belt: "gokyu" },
{ front: "Defensive Posture", back: "Jigo Hontai", belt: "gokyu" },
{ front: "Off balance", back: "Kuzushi", belt: "gokyu" },
{ front: "Entry into throw", back: "Tsukuri", belt: "gokyu" },
{ front: "Execution of throw", back: "Kake", belt: "gokyu" },
{ front: "Sweeping action of leg", back: "Harai", belt: "gokyu" },
{ front: "Reaping action of leg", back: "Gari", belt: "gokyu" },
{ front: "Dashing action done with the leg", back: "Gake/Kake", belt: "gokyu" },
{ front: "Springing action done with the leg", back: "Hane", belt: "gokyu" },
{ front: "Throw", back: "Nage", belt: "gokyu" },
{ front: "Technique", back: "Waza", belt: "gokyu" },
{ front: "Throwing Technique", back: "Nage Waza", belt: "gokyu" },
{ front: "Hand", back: "Te", belt: "gokyu" },
{ front: "Hand techniques", back: "Te Waza", belt: "gokyu" },
{ front: "Foot or Leg", back: "Ashi", belt: "gokyu" },
{ front: "Foot techniques", back: "Ashi Waza", belt: "gokyu" },
{ front: "Big or major", back: "O", belt: "gokyu" },
{ front: "Little or minor", back: "Ko", belt: "gokyu" },
{ front: "Waist or hip", back: "Goshi/Koshi", belt: "gokyu" },
{ front: "Waist or hip techniques", back: "Koshi Waza", belt: "gokyu" },
{ front: "Major hip throw", back: "Ogoshi", belt: "gokyu" },
{ front: "Outside", back: "Soto", belt: "gokyu" },
{ front: "Inside", back: "Uchi", belt: "gokyu" },
{ front: "Major outside reap", back: "Osoto gari", belt: "gokyu" },
{ front: "Internal force or spiritual energy", back: "Ki", belt: "gokyu" },
{ front: "Shout to gather inner strength", back: "Kiai", belt: "gokyu" },
{ front: "Name the two divisions of throwing techniques in English and Japanese", back: "1. Standing Techniques / Tachi Waza; 2. Sacrificing Techniques / Sutemi Waza", belt: "gokyu" },
{ front: "Name the three divisions of standing throwing techniques in English and Japanese", back: "1. Hand Techniques / Te Waza; 2. Hip Techniques / Koshi Waza; 3. Foot & Leg Techniques / Ashi Waza", belt: "gokyu" },
{ front: "Name the two divisions of sacrifice throwing techniques in English and Japanese.", back: "1. Back Sacrificing Techniques / Ma Sutemi Waza; 2. Side Sacrificing Techniques / Yoko Sutemi Waza", belt: "gokyu" },
{ front: "What are the ordinal numbers between one and ten in Japanese?", back: "1. Ichi; 2. Ni; 3. San; 4. Shi; 5. Go; 6. Roku; 7. Shichi; 8. Hachi; 9. Ku; 10. Ju", belt: "gokyu" },

/* YONKYU */
{ front: "Decision win! (referee's award)", back: "Yusei Gachi", belt: "yonkyu" },
{ front: "Draw match! (referee's award)", back: "Hiki Wake", belt: "yonkyu" },
{ front: "A full point by adding two waza-ari scores", back: "Waza Ari Awasete Ippon", belt: "yonkyu" },
{ front: "Grappling techniques", back: "Katame Waza", belt: "yonkyu" },
{ front: "Techniques from supine position", back: "Newaza", belt: "yonkyu" },
{ front: "Holding techniques", back: "Osaekomi Waza", belt: "yonkyu" },
{ front: "Choke", back: "Shime", belt: "yonkyu" },
{ front: "Choking techniques", back: "Shime Waza", belt: "yonkyu" },
{ front: "Joint locking techniques", back: "Kansetsu Waza", belt: "yonkyu" },
{ front: "Principle of Gentleness", back: "Ju", belt: "yonkyu" },
{ front: "Way of life", back: "Do", belt: "yonkyu" },
{ front: "Gentle Way", back: "Judo", belt: "yonkyu" },
{ front: "Gentle arts", back: "Jujitsu", belt: "yonkyu" },
{ front: "Favorite technique", back: "Tokui Waza", belt: "yonkyu" },
{ front: "Way of the warrior", back: "Bushido", belt: "yonkyu" },
{ front: "Martial arts", back: "Budo", belt: "yonkyu" },
{ front: "Class of belt ranks in judo below black belt", back: "Kyu", belt: "yonkyu" },
{ front: "Step or degree in the black belt ranks", back: "Dan", belt: "yonkyu" },
{ front: "Holder of any black belt rank", back: "Yudansha", belt: "yonkyu" },
{ front: "Holder of any rank below black belt", back: "Mudansha", belt: "yonkyu" },
{ front: "Black belt association", back: "Yudanshakai", belt: "yonkyu" },
{ front: "Repetition attack practice without throwing, done with partner", back: "Uchi Komi", belt: "yonkyu" },
{ front: "Alternate throwing practice without resistance, done with partner", back: "Sute Geiko", belt: "yonkyu" },
{ front: "Solo practice", back: "Tandoku Renshu", belt: "yonkyu" },
{ front: "Practice in pairs", back: "Sotai Renshu", belt: "yonkyu" },
{ front: "Practice in general", back: "Keiko", belt: "yonkyu" },
{ front: "Fourth class (kyu) judo rank", back: "Yonkyu", belt: "yonkyu" },
{ front: "Kneeling bow", back: "Zarei", belt: "yonkyu" },
{ front: "Standing bow", back: "Ritsurei", belt: "yonkyu" },
{ front: "Knee", back: "Hiza", belt: "yonkyu" },
{ front: "Lock or Hold", back: "Gatame", belt: "yonkyu" },
{ front: "Wheel", back: "Guruma", belt: "yonkyu" },
{ front: "Side or lateral", back: "Yoko", belt: "yonkyu" },
{ front: "Fifth class (kyu) judo rank", back: "Gokyu", belt: "yonkyu" },
{ front: "Formal eight directions of off-balancing", back: "Happo No Kuzushi", belt: "yonkyu" },
{ front: "Name the three divisions of mat techniques in English and Japanese", back: "1. Holding Techniques / Osaekomi Waza; 2. Strangulation Techniques / Shime Waza; 3. Joint Lock Techniques / Kansetsu Waza", belt: "yonkyu" },
{ front: "Name three of the eight men who attained 10th degree black belt (judan) in judo while they were still alive.", back: "Yoshiaki Yamashita - 1935 (1856 -1935); Hidekazu Nagaoka - 1937 (1876 - 1952); Hajime Isogai - 1937 (1871 - 1947); Kyuzo Mifune - 1945 (1884 - 1965); Kunisaburo lizuka - 1946 (1875 - 1958); Kaichiro Samura - 1948(1880 - 1965); Shotaro Tabata - 1948 (1885 - 1950); Sumiyuki Kotani - 1984 (1903 - 1991). Note: The following four men were promoted to judan posthumously by the Kodokan.; Kotaro Okano - 1967 (1885 - 1967); Maisutaro Shoriki - 1969 (1885 - 1969); Nakano Shozo - 1979 (1888 - 1977); Kurihara Tamino - 1979 (1896 - 1979)", belt: "yonkyu" },
{ front: "What are the two principles of Kodokan Judo as defined by Dr. Kano?", back: "1. Mutual benefit & welfare - Jita Kyoei; 2. Maximum efficiency - Seiroyku Zenyo", belt: "yonkyu" },
{ front: "Ultimate goal of Judo", back: "The harmonious development and perfection of human character", belt: "yonkyu" },
{ front: "What does the acronym G.E.T. P.A.D. (tactical variables for randori/shiai) stand for?", back: "Grip. Edge of mat. Tempo. Posture. Angle of attack. Direction of movement.", belt: "yonkyu" },

/* SANKYU */
{ front: "", back: "", belt: "sankyu" },


/* NIKYU */
{ front: "", back: "", belt: "nikyu" },

/* IKKYU */
{ front: "Throwing from standing position", back: "Tachi Waza", belt: "ikkyu" },
{ front: "Sacrifice throws", back: "Sutemi Waza", belt: "ikkyu" },
{ front: "", back: "", belt: "ikkyu" },


/* UNKNOWN (everything else) */
{ front: "Parts of a throw", back: "Kuzushi, Tsukuri, Kake", belt: "unknown" },
{ front: "Olympics introduction year", back: "1964", belt: "unknown" },

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

    if (testActive) {
        currentTestIndex++;

        if (currentTestIndex >= testQuestions.length) {
            finishTest();
            return;
        }

        showTestCard();
    } else {
        nextCard();
    }

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

function startBeltTest() {
    let belt = prompt("Enter belt (rokkyu, gokyu, yonkyu, sankyu, nikyu, ikkyu)");

    studentName = document.getElementById("studentName").value || "Student";

    let pool = allCards.filter(c => c.belt === belt);

    if (pool.length === 0) {
        alert("No questions found for this belt!");
        return;
    }

    // Shuffle and select 20
    pool.sort(() => Math.random() - 0.5);
    testQuestions = pool.slice(0, Math.min(testLength, pool.length));

    currentTestIndex = 0;
    correct = 0;
    total = 0;
    testActive = true;

    document.getElementById("quizButtons").style.display = "block";

    showTestCard();
}

function showTestCard() {
    let card = testQuestions[currentTestIndex];

    document.getElementById("frontText").innerText = card.front;
    document.getElementById("backText").innerText = "???";

    document.getElementById("cardInner").classList.remove("flipped");

    document.getElementById("counter").innerText =
        `Test ${currentTestIndex + 1} / ${testQuestions.length}`;
}

function finishTest() {
    testActive = false;

    let percent = Math.round((correct / total) * 100);
    let result = percent >= 70 ? "PASS ✅" : "FAIL ❌";

    let record = {
        name: studentName,
        score: `${correct}/${total}`,
        percent: percent,
        result: result,
        date: new Date().toLocaleString()
    };

    saveResult(record);

    alert(
        `${studentName}\n\nScore: ${record.score} (${percent}%)\n${result}`
    );
}

function saveResult(record) {
    let history = JSON.parse(localStorage.getItem("judoResults") || "[]");
    history.push(record);
    localStorage.setItem("judoResults", JSON.stringify(history));
}

function printResults() {
    let history = JSON.parse(localStorage.getItem("judoResults") || "[]");

    if (history.length === 0) {
        alert("No results available");
        return;
    }

    let html = `
    <html>
    <head>
        <title>Judo Belt Test Results</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                padding: 20px;
            }
            h1, h2 {
                text-align: center;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
            th, td {
                border: 1px solid black;
                padding: 10px;
                text-align: center;
            }
            th {
                background-color: #eee;
            }
            .pass {
                color: green;
                font-weight: bold;
            }
            .fail {
                color: red;
                font-weight: bold;
            }
            .footer {
                margin-top: 40px;
                text-align: center;
                font-size: 14px;
            }
        </style>
    </head>
    <body>

        <h1>🥋 Judo Belt Test Results</h1>
        <h2>Dojo Evaluation Report</h2>

        <table>
            <tr>
                <th>Student Name</th>
                <th>Score</th>
                <th>Percent</th>
                <th>Result</th>
                <th>Date</th>
            </tr>
    `;

    history.forEach(r => {
        let resultClass = r.result.includes("PASS") ? "pass" : "fail";

        html += `
        <tr>
            <td>${r.name}</td>
            <td>${r.score}</td>
            <td>${r.percent}%</td>
            <td class="${resultClass}">${r.result}</td>
            <td>${r.date}</td>
        </tr>`;
    });

    html += `
        </table>

        <div class="footer">
            <p>Instructor Signature: _____________________________</p>
            <p>Date: _____________________________</p>
        </div>

    </body>
    </html>
    `;

    let win = window.open("", "", "width=900,height=700");
    win.document.write(html);
    win.document.close();

    // Delay ensures content renders before print dialog
    setTimeout(() => {
        win.print();
    }, 500);
}

/* INIT */
document.getElementById("card").addEventListener("click", flipCard);
showCard();
