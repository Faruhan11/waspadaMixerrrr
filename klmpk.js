const cowo = ["fay", "apdal", "rehan", "ripki", "nadip", "bany", "adit", "himendra", "irsat", "basmi", "om nanda", "dipan", "farhan", "aldi"];
const cewe = ["al", "sipapasi", "eca", "ibu", "wilda", "feli", "el", "kiran", "tazkia", "devni", "alika", "neta", "riri", "cella", "sofia", "aura", "yuyuayu", "cia", "josu", "dea", "nindi", "andin"];
const semua = ["fay", "apdal", "rehan", "ripki", "nadip", "bany", "adit", "himendra", "irsat", "basmi", "om nanda", "dipan", "farhan", "aldi","al", "sipapasi", "eca", "ibu", "wilda", "feli", "el", "kiran", "tazkia", "devni", "alika", "neta", "riri", "cella", "sofia", "aura", "yuyuayu", "cia", "josu", "dea", "nindi", "andin"];
var skip = [];


function kejumlah_kelompok(jumlah_orang) {
  return Math.floor(36/jumlah_orang);
}

function randint(n) {
  return Math.floor(Math.random() * n);
}

function array2d(n) {
  var hasil = [];
  for (var i=0;i<n;i++) {
    hasil.push([]);
  }
  return hasil;
}

function kelompokan(list,orang,forward=true) {
  orang = orang.slice()
  var len = orang.length;
  for (var i=0;i<len;i++) {
    var id = randint(orang.length);
    var nama = orang[id];
    if (skip.includes(nama)) {
      orang.splice(id,1);
      i--;
      len--;
      continue;
    }
    
    var kelompok = i%list.length;
    if(!forward) {
      kelompok = list.length-kelompok-1
    }
    list[kelompok].push(nama);
    orang.splice(id, 1);
  }
  return list;
}

function acak(jumlah_kelompok) {
  var list = array2d(jumlah_kelompok);
  return kelompokan(list,semua);
}
function rata(jumlah_kelompok) {
  var list = array2d(jumlah_kelompok);
  list = kelompokan(list,cowo);
  return kelompokan(list,cewe,false);
}
function pisah(jumlah_kelompok) {
  var len = Math.floor(jumlah_kelompok/2)
  
  var listcow = array2d(cowo.length>cewe.length?len+1:len);
  var cow = kelompokan(listcow,cowo);
  
  var listcew = array2d(cowo.length<cewe.length?len:len+1);
  var cew = kelompokan(listcew,cewe);
  return cow.concat(cew);
}

function kebaris2(hasil) {
  var teks = [];
  for (var kelompok in hasil) {
    kelompok++;
    teks.push("*KELOMPOK " + kelompok + "*");
    for (var nama of hasil[kelompok-1]) {
      teks.push(nama);
    }
    teks.push("")
  }
  return teks;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var jumlah = document.getElementById("jumlah");
var tipe = document.getElementById("tipe");
var nodehasil = document.getElementById("hasil");
var mode = document.getElementById("custom-toggle");
var rolled = false;
var sound = document.getElementById("sound");
var sfx = document.getElementById("sfx");

async function animasi(hasil) {
  for (var i=0; i<hasil.length; i++) {
    await sleep(5);
    if(hasil[i].length==0 || hasil[i][0]=="*") {
      nodehasil.innerHTML = hasil.slice(0,i+1).join("\n")
  nodehasil.style.cssText = 'height:' + nodehasil.scrollHeight + 'px'
      continue;
    }
    for (var j=0; j<10; j++) {
      var str = hasil.slice(0,i);
      str.push(semua[randint(36)]);
      nodehasil.innerHTML = str.join("\n");
  nodehasil.style.cssText = 'height:' + nodehasil.scrollHeight + 'px';
      await sleep(5*j);
    }
    sound.pause();
    sound.currentTime = 0;
    nodehasil.innerHTML = hasil.slice(0,i+1).join("\n");
  }
  //copy(hasil.join("\n"));
  //nodehasil.innerHTML = hasil.join("\n")+"\nSudah dicopy ke clipboard\nJika belum ada, Silahkan copy sendiri";
  //nodehasil.style.cssText = 'height:' + nodehasil.scrollHeight + 'px';
}
function mulai(e) {
  e.innerHTML = "Sudah mulai, ulah mencet deui";
  if(rolled) {return;}
  rolled = true;
  var hasil = "ffff";
  var jumlah_kelompok = jumlah.value;
  if (tipe.value=="orang") {
    jumlah_kelompok = kejumlah_kelompok(jumlah_kelompok);
  }
  switch(mode.value) {
    case "1":
      hasil = kebaris2(rata(jumlah_kelompok));
      break;
    case "2":
      hasil = kebaris2(acak(jumlah_kelompok));
      break;
    case "3":
      hasil = kebaris2(pisah(jumlah_kelompok));
  }
  animasi(hasil);
}

var list = document.getElementById("GrupSiswa");
for (var nama of semua) {
  list.innerHTML += "<button type='button' class='nama include'>"+nama+"</button>"
}
for (var e of list.children) {
  e.addEventListener("click", toggle);
}

var teksmode = document.getElementById("teks_mode");
function ubahmode() {
  sfx.play();
  document.activeElement.blur();
  switch(mode.value) {
    case "1":
      mode.classList.remove("mode-acak");
      mode.classList.remove("mode-pisah");
      mode.classList.add("mode-rata");
      teksmode.innerHTML = "Rata";
      break;
    case "2":
      mode.classList.remove("mode-rata");
      mode.classList.remove("mode-pisah");
      mode.classList.add("mode-acak");
      teksmode.innerHTML = "Acak";
      break;
    case "3":
      mode.classList.remove("mode-rata");
      mode.classList.remove("mode-acak");
      mode.classList.add("mode-pisah");
      teksmode.innerHTML = "Pisah";
  }
}
function toggle() {
  sfx.play()
  this.classList.toggle("include");
  var index = skip.indexOf(this.innerHTML);
if (index == -1) {
  skip.push(this.innerHTML);
} else {
  skip.splice(index, 1);
}
}

function copy(txt) {
  sfx.play()
  navigator.clipboard.writeText(txt);
  nodehasil.select();
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
}

function exclude(e) {
  sfx.play();
  e.classList.toggle("include");
  list.classList.toggle("sembunyikan");
}