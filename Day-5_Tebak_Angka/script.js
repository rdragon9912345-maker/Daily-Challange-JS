// Deklarasi DOM
const inNum = document.getElementById("in-number");
const btnTebak = document.getElementById("tebak");
const keterangan = document.getElementById("keterangan");

// // Deklarasi heart
// const heart1 = document.getElementById("1");
// const heart2 = document.getElementById("2");
// const heart3 = document.getElementById("3");
// const heart4 = document.getElementById("4");
// const heart5 = document.getElementById("5");

const heart = document.querySelectorAll(".heart");

// random number generator
function generateRandomNum() {
  const min = 1;
  const max = 100;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNum = generateRandomNum();
console.log(randomNum);
let nyawa = 5;

// Algoritma tebak
btnTebak.addEventListener("click", function () {
  const angka = Number(inNum.value);
  let salah;
  if (angka < randomNum) {
    keterangan.textContent = `Terlalu Kecil! Tebak Lagi.`;
    nyawa -= 1;
    inNum.value = "";
    console.log("Nyawa : " + nyawa);
    salah = true;
  } else if (angka > randomNum) {
    keterangan.textContent = `Terlalu Besar! Tebak Lagi.`;
    nyawa -= 1;
    inNum.value = "";
    salah = true;
    console.log("Nyawa : " + nyawa);
  } else {
    alert(`Benar! Angka adalah ${randomNum}`);
    resetGame();
    salah = false;
  }

  //   // algoritma nyawa
  //   if (nyawa == 4) {
  //     heart1.classList.add("mati");
  //   } else if (nyawa == 3) {
  //     heart2.classList.add("mati");
  //   } else if (nyawa == 2) {
  //     heart3.classList.add("mati");
  //   } else if (nyawa == 1) {
  //     heart4.classList.add("mati");
  //   } else if (nyawa == 0) {
  //     heart5.classList.add("mati");

  //     setTimeout(function () {
  //       alert(`Game Over! Angka adalah ${randomNum}`);
  //       resetGame();
  //     }, 100);
  //   }
  // });
  if (salah == true) {
    if (nyawa > 0) {
      heart[nyawa].classList.add("mati");
    } else {
      heart[nyawa].classList.add("mati");
      setTimeout(function () {
        alert(`Game Over! Angka adalah ${randomNum}`);
        resetGame();
      }, 100);
    }
  }
});
// untuk reset
function resetGame() {
  nyawa = 5;
  randomNum = generateRandomNum();
  console.log(randomNum);

  keterangan.textContent = `##`;
  inNum.value = "";
  heart.forEach(function (h) {
    h.classList.remove("mati");
  });

  //   heart1.classList.remove("mati");
  //   heart2.classList.remove("mati");
  //   heart3.classList.remove("mati");
  //   heart4.classList.remove("mati");
  //   heart5.classList.remove("mati");
}
