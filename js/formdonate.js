const donationForm = document.getElementById('donateForm');
const donationNotification = document.getElementById('donation-notification');
const donationError = document.getElementById('donation-error');
const errorMessages = document.querySelectorAll('.error-message');

donationForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  let hasErrors = false; // Flag to track errors

  // Check for empty fields and display error messages
  const fields = donationForm.querySelectorAll('input[type="text"], input[type="number"], select');
  fields.forEach(field => {
    const errorMessage = field.nextElementSibling; // Get the error message span next to the field
    if (field.value === '') {
      errorMessage.textContent = 'This field is required.';
      errorMessage.style.display = 'block'; // Show the error message
      hasErrors = true;
    } else {
      errorMessage.textContent = ''; // Clear any previous error message
      errorMessage.style.display = 'none';
    }
  });

  // Additional validation logic could be added here (e.g., email format, donation amount range)

  if (hasErrors) {
    donationError.style.display = 'block'; // Show error message if there are errors
    return; // Don't proceed with simulated processing
  }

  donationError.style.display = 'none'; // Hide error message if no errors

  // Simulate donation processing (replace with actual API call)
  // You would typically make an API call to your server here
  // and handle the response (success or error)
  setTimeout(() => {
    donationNotification.style.display = 'block'; // Show success notification after a delay
  }, 1000); // Delay for 1 second (you can adjust this)
});
$(document).ready(function(){
  $(".preloader").fadeOut();
 })

setTimeout(function() {
  loaderWrapper.classList.add("fade-out"); // Add CSS class for smooth fading out
  content.style.display = "block"; // Show the content after loader fades out
}, 2000); // Adjust delay as needed (in milliseconds)

