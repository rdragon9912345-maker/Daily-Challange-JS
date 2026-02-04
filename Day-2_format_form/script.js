const inNik = document.getElementById("nik");
const inName = document.getElementById("nama");
const inAge = document.getElementById("umur");
const btn = document.getElementById("open");
const lblAge = document.getElementById("labelUmur");

inNik.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});
inName.addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Z]/g, "");
});
inAge.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "");
});
btn.addEventListener("click", function () {
  const intAge = parseInt(inAge.value);

  if (intAge > 17) {
    alert("Anda berhasil input data");
    inAge.value = "";
    inName.value = "";
    inNik.value = "";
    lblAge.textContent = "Masukan Umur";
  } else {
    alert("umur tidak valid");
    lblAge.innerHTML =
      "Masukan Umur <br> <span> Umur anda tidak valid </span> ";
  }
});
