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
  