let students_M = ["   fay  ", "  apdal ", "  rehan ", " ripki  ", "  nadip ", "  bany  ", "  adit  ", "himendra", "  irsat ", " basmi  ", "om nanda", " dipan  ", " farhan ", "  aldi  "];
let students_F = ["   al   ", "sipapasi", "   eca  ", "  ibu   ", " wilda  ", "  feli  ", "   el   ", "  kiran ", " tazkia ", " devni  ", "  alika ", "  neta  ", "  riri  ", "  cella ", " sofia  ", "  aura  ", " yuyuayu", "   cia  ", "  josu  ", "   dea  ", "  nindi ", "  andin "];
let chmate = Array.from({ length: 18 }, () => Array(2).fill(""));

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let k = 609;
let intervalId; 
let clickSound = document.getElementById("clickSound");
let backgroundSound = document.getElementById("backgroundSound"); 

function updateText() {
    shuffle(students_F);
    shuffle(students_M);
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


// Start the loop, updating every 1 second (1000 milliseconds)
intervalId = setInterval(updateText, 130);

































































































