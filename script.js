alert("Selamat datang di Ekstrakurikuler KIR Bahasa Indonesia SMAN 1 Jatibarang!");

const judul = document.querySelector("#judul");
const tombol = document.querySelector("#tombol-info");
const infoTambahan = document.querySelector("#info-tambahan");

judul.addEventListener("click", function () {
  judul.innerHTML = "KIR Bahasa Indonesia SMAN 1 Jatibarang";
});

tombol.addEventListener("click", function () {
  infoTambahan.classList.toggle("muncul");

  if (infoTambahan.classList.contains("muncul")) {
    tombol.innerHTML = "Sembunyikan Info";
  } else {
    tombol.innerHTML = "Tampilkan Info";
  }
});