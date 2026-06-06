let pilihanSekarang = null;

// URL Apps Script
const API_URL =
  "https://script.google.com/macros/s/AKfycbxial3qdo9sYGGb47EsFn-zzQp7jTeao8ExyIpeKLBfcT7T7MKp7EHw4Q6EwsolZr_MFw/exec";

function mulaiVoting() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("voting").style.display = "block";
}

function detailPaslon(nomor) {
  let judul = "";
  let isi = "";

  if (nomor == 1) {
    judul = "Paslon 1";
    isi =
      "VISI:\nOSIS aktif dan inovatif.\n\n" +
      "MISI:\n- Menambah kegiatan siswa\n- Meningkatkan disiplin";
  }

  if (nomor == 2) {
    judul = "Paslon 2";
    isi =
      "VISI:\nMenciptakan sekolah kreatif.\n\n" +
      "MISI:\n- Lomba rutin\n- Pengembangan bakat";
  }

  if (nomor == 3) {
    judul = "Paslon 3";
    isi =
      "VISI:\nSekolah berprestasi.\n\n" +
      "MISI:\n- Pembinaan akademik\n- Pengembangan karakter";
  }

  document.getElementById("judulPaslon").innerText = judul;
  document.getElementById("isiPaslon").innerText = isi;

  document.getElementById("detailModal").style.display = "flex";
}

function tutupDetail() {
  document.getElementById("detailModal").style.display = "none";
}

function pilih(nomor) {
  pilihanSekarang = nomor;
  document.getElementById("confirmModal").style.display = "flex";
}

function tutupKonfirmasi() {
  document.getElementById("confirmModal").style.display = "none";
}

document.getElementById("btnYa").onclick = function () {

  document.getElementById("confirmModal").style.display = "none";

  fetch(API_URL + "?paslon=" + pilihanSekarang)
    .then(() => {

      console.log(
        "Vote berhasil untuk Paslon",
        pilihanSekarang
      );

      document.getElementById("voting").style.display = "none";
      document.getElementById("terimakasih").style.display = "flex";

    })
    .catch((error) => {

      console.error(error);

      alert("Gagal mengirim suara");

    });

};