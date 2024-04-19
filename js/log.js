// Mendapatkan semua elemen input dalam kelas 'inputan'
var inputs = document.querySelectorAll(".inputan input");

// Menambahkan event listener untuk setiap input
inputs.forEach(function (input) {
  input.addEventListener("input", function () {
    // Periksa apakah nilai input kosong atau tidak
    if (this.value !== "") {
      this.parentNode.querySelector("label").classList.add("active");
    } else {
      this.parentNode.querySelector("label").classList.remove("active");
    }
  });
});
$(document).ready(function(){
  $(".preloader").fadeOut();
 })

setTimeout(function() {
  loaderWrapper.classList.add("fade-out"); // Add CSS class for smooth fading out
  content.style.display = "block"; // Show the content after loader fades out
}, 2000); // Adjust delay as needed (in milliseconds)
