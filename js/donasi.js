$(document).ready(function(){
    $(".preloader").fadeOut();
   })
  
  setTimeout(function() {
    loaderWrapper.classList.add("fade-out"); // Add CSS class for smooth fading out
    content.style.display = "block"; // Show the content after loader fades out
  }, 2000); // Adjust delay as needed (in milliseconds)
  
  