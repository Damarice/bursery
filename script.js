// Function to handle the registration form submission
async function registerFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the registration form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Check if the passwords match
    if (password !== confirmPassword) {
      displayMessage('Passwords do not match. Please try again.', 'error');
      return;
    }
  
    // Send the registration data to the backend server
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        displayMessage(data.message, 'success');
        // Redirect to the index page after successful registration
        window.location.href = 'index.html';
      } else {
        displayMessage(data.message, 'error');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      displayMessage('An error occurred during registration. Please try again later.', 'error');
    }
  }
  
  // Function to display a message on the page
  function displayMessage(message, messageType) {
    const messageContainer = document.getElementById('messageContainer');
  
    // Create a div element for the message
    const messageDiv = document.createElement('div');
    messageDiv.className = messageType === 'error' ? 'message error' : 'message success';
    messageDiv.textContent = message;
  
    // Clear previous messages
    messageContainer.innerHTML = '';
  
    // Append the new message to the container
    messageContainer.appendChild(messageDiv);
  }
  
  // Attach the form submission event listener for registration form
  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', registerFormSubmit);
  
  // JavaScript code in script.js

// Function to handle the "Apply Now" button click
function handleApplyButtonClick() {
  alert('You are now being redirected to the application page.');
  // You can add additional code here for redirecting the user to the application page
}

// Function to initialize event listeners
function init() {
  // Get the "Apply Now" button
  const applyButton = document.querySelector('.btn-apply');

  // Add a click event listener to the "Apply Now" button
  applyButton.addEventListener('click', handleApplyButtonClick);
}

// Call the initialization function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', init);

// Function to generate a random 8-character alphanumeric string
function generateUniqueId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

// Function to display a success message after successful registration
function displaySuccessMessage() {
  // Hide the form
  document.getElementById('apply').style.display = 'none';
  
  // Display the success message
  const successMessage = document.getElementById('successMessage');
  successMessage.style.display = 'block';
}

// Add event listener to the form submission
document.getElementById('bursaryForm').addEventListener('submit', function(event) {
  // Prevent the default form submission
  event.preventDefault();

  // Generate a unique ID (For demonstration purposes, we're using a fixed value instead of generating it)
  const uniqueId = 'B1234567';
  
  // Set the unique ID to the hidden field
  document.getElementById('uniqueId').value = uniqueId;

  // Display a success message after a short delay to simulate form submission
  setTimeout(displaySuccessMessage, 2000);
});
