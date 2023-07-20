// Function to handle the registration form submission
function registerFormSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Get the registration form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Check if the passwords match
  if (password !== confirmPassword) {
    alert('Passwords do not match. Please try again.');
    return;
  }

  // Save the user registration details to the local database
  saveUserRegistration(name, email, password);

  // Clear the form after successful registration
  document.getElementById('registerForm').reset();

  // Display a success message (you can modify this as per your requirements)
  alert('Registration successful! You can now log in using your email and password.');

  // Redirect to the index page after successful registration
  window.location.href = 'index.html';
}

