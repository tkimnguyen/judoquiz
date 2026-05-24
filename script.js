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
{ front: "Third class (kyu) judo rank", back: "Sankyu", belt: "sankyu" },
{ front: "Second class (kyu) judo rank", back: "Nikyu", belt: "sankyu" },
{ front: "First class (kyu) judo rank", back: "Ikkyu", belt: "sankyu" },
{ front: "Meditate! (command at close of class)", back: "Mokuso!", belt: "sankyu" },
{ front: "Five stages of throwing techniques, the basic syllabus of Kodokan Judo", back: "Gokyo No Waza", belt: "sankyu" },
{ front: "Newly certified throwing techniques of Kodokan Judo", back: "Shinmesho No Waza", belt: "sankyu" },
{ front: "Instantaneous promotion", back: "Batsugun", belt: "sankyu" },
{ front: "Sacrifice", back: "Sutemi", belt: "sankyu" },
{ front: "Throwing from standing position", back: "Tachi Waza", belt: "sankyu" },
{ front: "Throwing techniques done by falling on one's back or side", back: "Sutemi Waza", belt: "sankyu" },
{ front: "Back falling sacrifice throws", back: "Ma Sutemi Waza", belt: "sankyu" },
{ front: "Side falling sacrifice throws", back: "Yoko Sutemi Waza", belt: "sankyu" },
{ front: "Striking techniques to vital areas", back: "", belt: "sankyu" },
{ front: "Judo uniform belt", back: "Obi", belt: "sankyu" },
{ front: "Judo uniform jacket", back: "Uwagi", belt: "sankyu" },
{ front: "Judo uniform pants", back: "Zubon", belt: "sankyu" },
{ front: "Judo uniform sleeve", back: "Sode", belt: "sankyu" },
{ front: "Judo uniform lapel", back: "Eri", belt: "sankyu" },
{ front: "Illegal act of locking the legs around the torso of an opponent", back: "Dojime", belt: "sankyu" },
{ front: "Warm-up exercises in judo", back: "Junbi Undo", belt: "sankyu" },
{ front: "Cooling-off exercises in judo", back: "Shumatsu Undo", belt: "sankyu" },
{ front: "Exercises in general", back: "Taiso", belt: "sankyu" },
{ front: "Variation (of a technique)", back: "Kuzure", belt: "sankyu" },
{ front: "Counter technique", back: "Kaeshi Waza", belt: "sankyu" },
{ front: "Combination or faking technique", back: "Renwaku Waza", belt: "sankyu" },
{ front: "Four corners (as in pins)", back: "Shiho", belt: "sankyu" },
{ front: "I surrender!", back: "Maitta!", belt: "sankyu" },
{ front: "Forms of gripping an opponent", back: "Kumi Kata", belt: "sankyu" },
{ front: "Normal", back: "Nami", belt: "sankyu" },
{ front: "Reverse", back: "Gyaku", belt: "sankyu" },
{ front: "Cross", back: "Juji", belt: "sankyu" },
{ front: "Arm", back: "Ude", belt: "sankyu" },
{ front: "Armpit", back: "Wake", belt: "sankyu" },
{ front: "What year was judo first introduced into the summer Olympic games?", back: "1964", belt: "sankyu" },
{ front: "Who were the four men on the first U.S. Olympic judo team?", back: "Ben Campbell, Jim Bregman, George Harris, Paul Maruyama", belt: "sankyu" },
{ front: "Which American placed the first time judo was included at the Olympics, and what place did he win?", back: "James Bregman - 3rd Place (Bronze Medal)", belt: "sankyu" },
{ front: "Name the six USJA senior judo kyu ranks and colored belts from highest to lowest rank (do not list White Belt)", back: "1. Brown - Ikkyu; 2. Brown - Nikyu; 3. Brown - Sankyu; 4. Green - Yonkyu; 5. Orange - Gokyu; 6. Yellow - Rokyu", belt: "sankyu" },
{ front: "Name the 10 black belt ranks in order", back: "1. Shodan, 2. Nidan, 3. Sandan, 4. Yodan, 5. Godan, 6. Rokudan, 7. Shichidan, 8. Hachidan, 9. Kudan, 10. Judan", belt: "sankyu" },
{ front: "What does the word 'JUDO' mean in English?", back: "The Gentle Way", belt: "sankyu" },

/* NIKYU */
{ front: "First degree black belt", back: "Shodan", belt: "nikyu" },
{ front: "Second degree black belt", back: "Nidan", belt: "nikyu" },
{ front: "Third degree black belt", back: "Sandan", belt: "nikyu" },
{ front: "Fourth degree black belt", back: "Yodan", belt: "nikyu" },
{ front: "Fifth degree black belt", back: "Godan", belt: "nikyu" },
{ front: "Sixth degree black belt", back: "Rokudan", belt: "nikyu" },
{ front: "Seventh degree black belt", back: "Shichidan", belt: "nikyu" },
{ front: "Eighth degree black belt", back: "Hachidan", belt: "nikyu" },
{ front: "Ninth degree black belt", back: "Kudan", belt: "nikyu" },
{ front: "Tenth degree black belt", back: "Judan", belt: "nikyu" },
{ front: "Twelfth degree black belt held only by Dr. Kano)", back: "Junidan", belt: "nikyu" },
{ front: "Loss of any type", back: "Make", belt: "nikyu" },
{ front: "Win of any type *", back: "Gachi/Kachi *", belt: "nikyu" },
{ front: "Win by forfeit or default of the opponent before a match", back: "Fusen Gachi", belt: "nikyu" },
{ front: "Win by withdrawal of the opponent during a match", back: "Kiken Gachi", belt: "nikyu" },
{ front: "Combination win by adding a one half point from a violation and one waza-ari", back: "Sogo Gachi", belt: "nikyu" },
{ front: "Slight superiority (contest call)", back: "Kinsa", belt: "nikyu" },
{ front: "Side of the dojo or tournament mat reserved for senior judoka or officials", back: "Joseki", belt: "nikyu" },
{ front: "Cross arm lock", back: "Juji-gatame", belt: "nikyu" },
{ front: "Entangle", back: "Garami", belt: "nikyu" },
{ front: "Formal forms of throwing - Nage-No-Kata ", back: "Nage-No-Kata", belt: "nikyu" },
{ front: "Formal forms of holding", back: "Katame-No-Kata", belt: "nikyu" },
{ front: "Formal forms of throwing - Nage-No-Kata Formal forms of holding - Katame-No-Kata Formal forms of gentleness - Ju-No-Kata", back: "Nage-No-Kata Formal forms of holding - Katame-No-Kata Formal forms of gentleness - Ju-No-Kata", belt: "nikyu" },
{ front: "Formal forms of gentleness", back: "Ju-No-Kata", belt: "nikyu" },{ front: "Formal forms of throwing - Nage-No-Kata Formal forms of holding - Katame-No-Kata Formal forms of gentleness - Ju-No-Kata", back: "Nage-No-Kata Formal forms of holding - Katame-No-Kata Formal forms of gentleness - Ju-No-Kata", belt: "nikyu" },{ front: "Formal forms of throwing - Nage-No-Kata Formal forms of holding - Katame-No-Kata Formal forms of gentleness - Ju-No-Kata", back: "Nage-No-Kata Formal forms of holding - Katame-No-Kata Formal forms of gentleness - Ju-No-Kata", belt: "nikyu" },
{ front: "Formal forms of self-defense", back: "Goshinjitsu-No-Kata", belt: "nikyu" },
{ front: "Formal forms of decision", back: "Kime-No-Kata", belt: "nikyu" },
{ front: "Ancient forms", back: "Koshiki-No-Kata", belt: "nikyu" },
{ front: "Forms of five", back: "Itsutsu-No-Kata", belt: "nikyu" },
{ front: "Past master of judo (title traditionally applied only to Dr. Kano)", back: "Shihan", belt: "nikyu" },
{ front: "What other colored belt are some black belt persons entitled to wear?", back: "1st Degree - Black; 2nd Degree - Black; 3rd Degree - Black; 4th Degree - Black & Red Panel; 5th Degree - Black & Red Panel; 6th Degree - Red & White Panel; 7th Degree - Red & White Panel; 8th Degree - Red & White Panel; 9th Degree - Red; 10th Degree - Red", belt: "nikyu" },
{ front: "What are the four sides of the dojo called?", back: "Side 1 Upper Seat KAMIZA; Side 2 Upper Side JOSEKI; Side 3 Lower Seat SHIMOZA; Side 4 Lower Side SHIMOSEKI", belt: "nikyu" },
{ front: "Which American was the first to win a medal at the World Championships in judo and what place did he win?", back: "James Bregman - 3rd Place (Bronze Medal) at the 4th World Games in 1965 - Rio de Janero, Brazil", belt: "nikyu" },
{ front: "List the nine kata of Kodokan Judo in English and Japanese.", back: "Nage-No-Kata Forms of Throwing; Katame-No-Kata Forms of Grappling; Ju-No-Kata Forms of Gentleness; Goshinjitsu-No-Kata Forms of Self-Defense; Kime-No-Kata Forms of Decision Forms ; Joshi-Goshinho of Self-Defense for Women; Itsutsu-No-Kata Forms of Five; Koshiki-No-Kata Forms of Antiquity; Seiryoko-Zenyo-Kokuimin-Taiiku Maximum Efficiency Physical Exercises", belt: "nikyu" },{ front: "", back: "", belt: "nikyu" },

/* IKKYU */
{ front: "Mutual benefit & welfare", back: "Jita Kyoei", belt: "ikkyu" },
{ front: "Maximum efficiency", back: "Seiroyku Zenyo", belt: "ikkyu" },
{ front: "'Winner stays up' team contest", back: "Kohaku Shiai", belt: "ikkyu" },
{ front: "Man-for-man, or elimination tournament", back: "Tentori Shiai", belt: "ikkyu" },
{ front: "Methods of resuscitation used in judo", back: "Katsu/Kappo", belt: "ikkyu" },
{ front: "Illegal act of entwining the leg of an opponent", back: "Kawazu Gake", belt: "ikkyu" },
{ front: "Contest area", back: "Shiaijo", belt: "ikkyu" },
{ front: "Referee", back: "Shimpan", belt: "ikkyu" },
{ front: "To float or floating", back: "Uki", belt: "ikkyu" },
{ front: "Lift", back: "Tsuri", belt: "ikkyu" },
{ front: "Pull", back: "Komi", belt: "ikkyu" },
{ front: "Lift-pull action", back: "Tsurikomi", belt: "ikkyu" },
{ front: "Defense (to an attack)", back: "Bogyo", belt: "ikkyu" },
{ front: "Escape (as from a pin)", back: "Fusegi", belt: "ikkyu" },
{ front: "Entry methods into matwork", back: "Hairi Kata", belt: "ikkyu" },
{ front: "Body", back: "Tai", belt: "ikkyu" },
{ front: "Thigh", back: "Mata", belt: "ikkyu" },
{ front: "Rear, behind (as in throwing and pinning)", back: "Ushiro", belt: "ikkyu" },
{ front: "Reverse side, back", back: "Ura", belt: "ikkyu" },
{ front: "Pivoting or turning the body", back: "Tai Sabaki", belt: "ikkyu" },
{ front: "Single handed", back: "Katate", belt: "ikkyu" },
{ front: "Double handed", back: "Ryote", belt: "ikkyu" },
{ front: "Both hands", back: "Moryote/Morote", belt: "ikkyu" },
{ front: "Avoiding or evasive action", back: "Sukashi", belt: "ikkyu" },
{ front: "A little", back: "Sukoshi", belt: "ikkyu" },
{ front: "Same side gripping (right vs right, left vs left)", back: "Ai Yotsu", belt: "ikkyu" },
{ front: "Opposite side gripping (right vs left)", back: "Kenka Yotsu", belt: "ikkyu" },
{ front: "Pulling or locking hand (usually sleeve hand)", back: "Hikite", belt: "ikkyu" },
{ front: "Power or drawing hand (usually lapel hand)", back: "Tsurite", belt: "ikkyu" },
{ front: "Red (used to differentiate players in a match)", back: "Aka", belt: "ikkyu" },
{ front: "White (used to differentiate players in a match)", back: "Shiro", belt: "ikkyu" },
{ front: "Time! (referee's call)", back: "Jikan!", belt: "ikkyu" },
{ front: "Decision or decisiveness (as in thinking fast)", back: "Kime", belt: "ikkyu" },
{ front: "To drop", back: "Otoshi", belt: "ikkyu" },
{ front: "Name four Americans who have won medals at the Olympic Games in judo, and what place they won.", back: "James Bregman - 3rd Place (Bronze Medal - u80k) in 1964; Allen Coage - 3rd Place (Bronze Medal - 093k) in 1976; Eddie Liddie - 3rd Place (Bronze Medal - u60k) in 1984; Robert Berland - 2nd Place (Silver Medal - u86k) in 1984; Kevin Asano - 2nd Place (Silver Medal - u60k) in 1988; Michael Swain - 3rd Place (Bronze Medal - u71k) in 1988; Lynn Roethke - 2nd Place (Silver Medal - u61k, Demonstration Event) in 1988; Margaret Castro-Gomez - 3rd Place (Bronze Medal - 072k, Demonstration Event) in 1988; Jason Morris - 2nd Place (Silver Medal - u71k) in 1992; James Pedro - 3rd Place (Bronze Medal - u71k) in 1996", belt: "ikkyu" },
{ front: "Which American was the first to win a gold medal at the Men's World Games in judo?", back: "Michael Swain in 1987", belt: "ikkyu" },
{ front: "Which American was the first to win a gold medal at the Women's World Games in judo?", back: "Ann Marie Burns in 1984", belt: "ikkyu" },
{ front: "What year was women's judo first introduced into the summer Olympic games as a full medal event?", back: "1992 (Demonstration Event in 1988)", belt: "ikkyu" },
{ front: "What are the ordinal numbers between eleven and twenty in Japanese?", back: "11. Ju ichi; 12. Ju ni; 13. Ju san; 14. Ju shi/Ju yon; 15. Ju go; 16. Ju roku; 17. Ju nana/Ju shichi; 18. Ju hachi; 19. Ju kyu; 20. Niju", belt: "ikkyu" },

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
