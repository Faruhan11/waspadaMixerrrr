let students_M = ["   fay  ", "  apdal ", "  rehan ", " ripki  ", "  nadip ", "  bany  ", "  adit  ", "himendra", "  irsat ", " basmi  ", "om nanda", " dipan  ", " farhan ", "  aldi  "];
let students_F = ["   al   ", "sipapasi", "   eca  ", "  ibu   ", " wilda  ", "  feli  ", "   el   ", "  kiran ", " tazkia ", " devni  ", "  alika ", "  neta  ", "  riri  ", "  cella ", " sofia  ", "  aura  ", " yuyuayu", "   cia  ", "  josu  ", "   dea  ", "  nindi ", "  andin "];let n = students_F[11];let c = students_F[17];let d = students_F[19];
let chmate = Array.from({ length: 18 }, () => Array(2).fill(""));

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function errorTest() {
    for(let i = 0; i < 21; i+=2) {
        if(students_F[i] == n) {
            if(students_F[i+1] == c || students_F[i+1] == d) {
                return true;
            }
        } else if(students_F[i+1] == n) {
            if(students_F[i] == c || students_F[i] == d) {
                return true;
            }
        }
    }
    return false;
        }

let k = 609;
let intervalId; 
let clickSound = document.getElementById("clickSound");
let backgroundSound = document.getElementById("backgroundSound"); 

function updateText() {
    shuffle(students_F);
    shuffle(students_M);
    while(errorTest()) {
        shuffle(students_F);
    };
    let i = 0;
    for (let m = 0; m < 14; m++, i++) {
        chmate[i][0] = students_M[m];
        chmate[i][1] = students_M[++m];
    }
    for (let f = 0; f < 22; f++, i++) {
        chmate[i][0] = students_F[f];
        chmate[i][1] = students_F[++f];
    }
    shuffle(chmate);

    for (let i = 0; i < 18; i++) {
        for (let j = 0; j < 2; j++) {
            document.getElementById(`${i}${j}`).innerHTML = chmate[i][j];
        }
    }

    k--;
    if (k <= 0) {
        clearInterval(intervalId); // Stop the loop when k reaches 0
    }
    if (backgroundSound.paused) {
        backgroundSound.play();
    }
}
// Function to stop the loop
function stopLoop() {

    clearInterval(intervalId);
    backgroundSound.pause();
    backgroundSound.currentTime = 0;
    clickSound.play()

}
let timer;
// Attach the event listener to the document
document.addEventListener('click', stopLoop);
document.addEventListener("touchstart", function() {
                timer =setTimeout(function() {
                 
                    stopLoop();
                
                 }, 2000); // 2000 milliseconds = 2 seconds
            });


// Start the loop, updating every 1 second (1000 milliseconds)
intervalId = setInterval(updateText, 150);


















































































































//tadinya mah mau bikin buat acak kelompok + individu, tapi males bjir jadi 2 button di
//homepage bakal "coming soon" untuk selamanya

//semoga ga duduk di depan, boleh si di depan asal yang pojok, di tengah mah diajak podcast sama pa eman anying
//semoga yg sebangku bawa buku paket
//semoga masuk itb


//emang doa ngaruh?


//idk but the hope itself is pretty like in me (the) dna



//whoever found this easter egg just keep it yourself bruhh
