// logout.js

// Function to handle logout
function logout() {
    // Perform logout logic here
    
    // Redirect to the logout page after successful logout
    window.location.href = 'logout.html';
  }
  
  // Get the logout button element
  const logoutButton = document.getElementById('logoutButton');
  
  // Add an event listener to the logout button click event
  logoutButton.addEventListener('click', logout);
  