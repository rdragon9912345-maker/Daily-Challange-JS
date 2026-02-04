// deklarasi untuk DOM
const tombol = document.getElementById("btnIn");
const select = document.getElementById("barang");
const inQty = document.getElementById("qty");
const tBody = document.getElementById("tbody");
const total = document.getElementById("total-harga");
let totalHarga = 0; // variabel total

// buat wadah
const barangDagang = {
  susu: { nama: "Susu", harga: 10000 },
  roti: { nama: "Roti", harga: 5000 },
  telur: { nama: "Telur", harga: 2000 },
};

// Jika tombol click
tombol.addEventListener("click", function () {
  const kodeBarang = select.value; // isinya : "susu" / "roti" / "telur"
  const jumlah = Number(inQty.value); // ubah teks jadi angka

  // Validasi Inputan
  if (kodeBarang === "" || jumlah <= 0) {
    alert("Pilih barang dan masukan jumlah yang benar!");
    return;
  }

  const barangKetemu = barangDagang[kodeBarang]; // mencari barang

  const hargaPerQty = barangKetemu.harga * jumlah; // harga * jumlah

  const barisBaru = tBody.insertRow(); // buat baris

  // buat kolom
  const cellNama = barisBaru.insertCell(0);
  const cellHarga = barisBaru.insertCell(1);
  const cellJumlah = barisBaru.insertCell(2);
  const cellTotal = barisBaru.insertCell(3);

  // masukan data ke kolom
  cellNama.innerHTML = barangKetemu.nama;
  cellHarga.innerHTML = barangKetemu.harga;
  cellJumlah.innerHTML = jumlah;
  cellTotal.innerHTML = hargaPerQty;

  inQty.value = ""; // default qty = ""

  totalHarga += hargaPerQty; // totalHarga itu jumlah hargaPerQty

  // diskon
  console.log(totalHarga);
  if (totalHarga > 50000) {
    const hargaAsli = totalHarga * 0.9; // diskon 10%
    total.innerHTML = `
      <th>Rp ${totalHarga} - 10% = Rp ${hargaAsli} </th>
      `;
  } else {
    // tidak ada diskon
    total.innerHTML = `
      <td> Rp ${totalHarga} </td>
      `;
  }
});
