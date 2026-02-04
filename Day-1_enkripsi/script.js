const inputText = document.getElementById("input_teks");
const textPlace = document.getElementById("teks_place");
const btnEnkripsi = document.getElementById("enkripsi_btn");
const btnDekripsi = document.getElementById("dekripsi_btn");

btnEnkripsi.addEventListener("click", function () {
  const kata = inputText.value;
  console.log(kata);

  let hasilPenuh = "";

  for (let i = 0; i < kata.length; i++) {
    const kodeAngka = kata.charCodeAt(i);
    const kodeBaru = kodeAngka + 27;
    const hasilEnkripsi = String.fromCharCode(kodeBaru);
    hasilPenuh = hasilPenuh + hasilEnkripsi;
  }

  console.log(hasilPenuh);
  textPlace.innerHTML = hasilPenuh;
});

btnDekripsi.addEventListener("click", function () {
  const kataTerenkripsi = textPlace.innerText;

  if (kataTerenkripsi == "") {
    alert("Belum Terenkripsi");
    return;
  }

  let hasilAkhir = "";

  for (let i = 0; i < kataTerenkripsi.length; i++) {
    const kodeAngka = kataTerenkripsi.charCodeAt(i);
    const kodeBaru = kodeAngka - 27;
    const hasilDekripsi = String.fromCharCode(kodeBaru);
    hasilAkhir = hasilAkhir + hasilDekripsi;
  }

  textPlace.innerHTML = hasilAkhir;
});
