$(document).ready(function(){
  $(".preloader").fadeOut();
 })

setTimeout(function() {
  loaderWrapper.classList.add("fade-out"); // Add CSS class for smooth fading out
  content.style.display = "block"; // Show the content after loader fades out
}, 2000); // Adjust delay as needed (in milliseconds)


// toggle active class
const navbarNav = document.querySelector(".navbar-nav");
// ketka hamburger menu nya di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik dimanasaja untuk menghilangkan hamburger menu

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// layanan1
document.querySelectorAll(".layanan1").forEach(function (figcaption) {
  figcaption.addEventListener("click", function () {
    // Membuat elemen div untuk overlay
    var overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Membuat elemen div untuk judul layanan
    var tandax = document.createElement("div");
    tandax.classList.add("tandax");
    tandax.innerHTML = "<p>x</p>";

    // Menambahkan tandax ke dalam overlay
    overlay.appendChild(tandax);

    // Membuat elemen div untuk judul layanan
    var judulLayanan = document.createElement("div");
    judulLayanan.classList.add("judullayanan");
    judulLayanan.innerHTML = "<h1>Donasi</h1>";

    // Menambahkan judul layanan ke dalam overlay
    overlay.appendChild(judulLayanan);

    // Membuat elemen div untuk penjelasan
    var penjelasan = document.createElement("div");
    penjelasan.classList.add("penjelasan");
    penjelasan.innerHTML =
      "<img src='img/Donate.png'/>" +
      "<hr>" +
      "<p>Donasi adalah kontribusi sukarela yang diberikan oleh individu atau kelompok untuk mendukung tujuan atau kegiatan amal. Pada web ini Donasi yang diberikan dapat berup uang barang bekas dan barang lainnya yang dibutuhakan.</p>";

    // Menambahkan elemen penjelasan ke dalam overlay
    overlay.appendChild(penjelasan);

    // Menambahkan overlay ke dalam body
    document.body.appendChild(overlay);

    // Menghapus overlay saat overlay diklik
    overlay.addEventListener("click", function () {
      overlay.remove();
    });
  });
});

// layanan2
document.querySelectorAll(".layanan2").forEach(function (figcaption) {
  figcaption.addEventListener("click", function () {
    // Membuat elemen div untuk overlay
    var overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Membuat elemen div untuk judul layanan
    var tandax = document.createElement("div");
    tandax.classList.add("tandax");
    tandax.innerHTML = "<p>x</p>";

    // Menambahkan tandax ke dalam overlay
    overlay.appendChild(tandax);

    // Membuat elemen div untuk judul layanan
    var judulLayanan = document.createElement("div");
    judulLayanan.classList.add("judullayanan");
    judulLayanan.innerHTML = "<h1>Berita</h1>";

    // Menambahkan judul layanan ke dalam overlay
    overlay.appendChild(judulLayanan);

    // Membuat elemen div untuk penjelasan
    var penjelasan = document.createElement("div");
    penjelasan.classList.add("penjelasan");
    penjelasan.innerHTML =
      "<img src='img/news.png'/>" +
      "<hr>" +
      "<p>Saat ini media dalam menyampaikan berita dapat di dapatkan melalui internet salah satunnya media web. Berita yang kami disampaikan pada web yang kami buat ini berkaitan dengan kemanusiaan, peristiwa bencana, donasi dan informasi lainnya yang digunakan utnuk membantu sesama.</p>";

    // Menambahkan elemen penjelasan ke dalam overlay
    overlay.appendChild(penjelasan);

    // Menambahkan overlay ke dalam body
    document.body.appendChild(overlay);

    // Menghapus overlay saat overlay diklik
    overlay.addEventListener("click", function () {
      overlay.remove();
    });
  });
});

//layan3
document.querySelectorAll(".layanan3").forEach(function (figcaption) {
  figcaption.addEventListener("click", function () {
    // Membuat elemen div untuk overlay
    var overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Membuat elemen div untuk judul layanan
    var tandax = document.createElement("div");
    tandax.classList.add("tandax");
    tandax.innerHTML = "<p>x</p>";

    // Menambahkan tandax ke dalam overlay
    overlay.appendChild(tandax);

    // Membuat elemen div untuk judul layanan
    var judulLayanan = document.createElement("div");
    judulLayanan.classList.add("judullayanan");
    judulLayanan.innerHTML = "<h1>Relawan</h1>";

    // Menambahkan judul layanan ke dalam overlay
    overlay.appendChild(judulLayanan);

    // Membuat elemen div untuk penjelasan
    var penjelasan = document.createElement("div");
    penjelasan.classList.add("penjelasan");
    penjelasan.innerHTML =
      "<img src='img/relawann.png'/>" +
      "<hr>" +
      "<p>Relawan adalah suatu perbuatan mulia yang dilakukan secara sukarela, tulus, dan ikhlas. Maka dari itu mari menjadi Relawan bersama korps sukarela Upi Cibiru bersama bantu sesama.</p>";

    // Menambahkan elemen penjelasan ke dalam overlay
    overlay.appendChild(penjelasan);

    // Menambahkan overlay ke dalam body
    document.body.appendChild(overlay);

    // Menghapus overlay saat overlay diklik
    overlay.addEventListener("click", function () {
      overlay.remove();
    });
  });
});

//layan4
document.querySelectorAll(".layanan4").forEach(function (figcaption) {
  figcaption.addEventListener("click", function () {
    // Membuat elemen div untuk overlay
    var overlay = document.createElement("div");
    overlay.classList.add("overlay");

    // Membuat elemen div untuk judul layanan
    var tandax = document.createElement("div");
    tandax.classList.add("tandax");
    tandax.innerHTML = "<p>x</p>";

    // Menambahkan tandax ke dalam overlay
    overlay.appendChild(tandax);

    // Membuat elemen div untuk judul layanan
    var judulLayanan = document.createElement("div");
    judulLayanan.classList.add("judullayanan");
    judulLayanan.innerHTML = "<h1>Donor darah</h1>";

    // Menambahkan judul layanan ke dalam overlay
    overlay.appendChild(judulLayanan);

    // Membuat elemen div untuk penjelasan
    var penjelasan = document.createElement("div");
    penjelasan.classList.add("penjelasan");
    penjelasan.innerHTML =
      "<img src='img/Donordarah.png'/>" +
      "<hr>" +
      "<p>Donor darah merupakan salah satu kegiatan yang sangat mulia karena banyak sekali orang-orang yang membutuhkan darah . Maka dari itu kami dari korps sukrela Upi cibru memfasilitasi bagi orang-orang yang ingin mnedonorkan darah.</p>";

    // Menambahkan elemen penjelasan ke dalam overlay
    overlay.appendChild(penjelasan);

    // Menambahkan overlay ke dalam body
    document.body.appendChild(overlay);

    // Menghapus overlay saat overlay diklik
    overlay.addEventListener("click", function () {
      overlay.remove();
    });
  });
});

 