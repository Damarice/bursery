// login.js

// Function to handle the login form submission
function loginFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the email and password values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Perform login authentication (you can replace this with your own authentication logic)
    if (authenticateUser(email, password)) {
      // Redirect to the home page after successful login
      window.location.href = 'index.html';
    } else {
      // Display an error message if authentication fails
      alert('Invalid email or password. Please try again.');
    }
  }
  
  // Function to simulate user authentication (replace this with your own authentication logic)
  function authenticateUser(email, password) {
    // Perform authentication logic here
    // Return true if authentication is successful, false otherwise
    
    // Example: Simulating authentication with hardcoded values
    const validEmail = 'user@example.com';
    const validPassword = 'password';
    
    return email === validEmail && password === validPassword;
  }
  
  // Add an event listener to the login form submit event
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', loginFormSubmit);
