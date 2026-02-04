const merah = document.getElementById("merah");
const kuning = document.getElementById("kuning");
const hijau = document.getElementById("hijau");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waktuLampu() {
  while (true) {
    hijau.classList.remove("mode-nyala");
    merah.classList.add("mode-nyala");
    await delay(2000);
    merah.classList.remove("mode-nyala");
    kuning.classList.add("mode-nyala");
    await delay(1000);
    kuning.classList.remove("mode-nyala");
    hijau.classList.add("mode-nyala");
    await delay(1500);
  }
}

waktuLampu();
