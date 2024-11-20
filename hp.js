let semua = ["fay", "apdal", "rehan", "ripki", "nadip", "bany", "adit", "himendra", "irsat", "basmi", "om nanda", "dipan", "farhan", "aldi","al", "sipapasi", "eca", "ibu", "wilda", "feli", "el", "kiran", "tazkia", "devni", "alika", "neta", "riri", "cella", "sofia", "aura", "yuyuayu", "cia", "josu", "dea", "nindi", "andin"];
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function chooseHim() {
    shuffle(semua);
    shuffle(semua);
    shuffle(semua);
    shuffle(semua);
    shuffle(semua);
    shuffle(semua);
    shuffle(semua);
    shuffle(semua);
    document.getElementById("him").innerHTML = semua[1];
}
document.addEventListener('click', chooseHim);
