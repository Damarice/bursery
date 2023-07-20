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
  }
  
  // Function to save user registration details to the local database
  function saveUserRegistration(name, email, password) {
    // Retrieve existing user registrations from the local database (if any)
    let registrations = JSON.parse(localStorage.getItem('userRegistrations')) || [];
  
    // Check if the email is already registered
    if (registrations.some((user) => user.email === email)) {
      alert('This email is already registered. Please use a different email or log in.');
      return;
    }
  
    // Create a new user object
    const user = { name, email, password };
  
    // Add the new user object to the existing registrations array
    registrations.push(user);
  
    // Save the updated registrations array back to the local database
    localStorage.setItem('userRegistrations', JSON.stringify(registrations));
  }
  
  // Attach the form submission event listener for registration form
  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', registerFormSubmit);
  
  // Function to handle the login form submission
  function loginFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the email and password values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Perform login authentication
    if (authenticateUser(email, password)) {
      // Redirect to the home page after successful login
      window.location.href = 'index.html';
  
      // Call the callback function for successful login
      onLoginSuccess(email);
    } else {
      // Display an error message if authentication fails
      alert('Invalid email or password. Please try again.');
    }
  }
  
  // Function to simulate user authentication
  function authenticateUser(email, password) {
    // Retrieve the user registration details from the local database
    const userRegistrations = JSON.parse(localStorage.getItem('userRegistrations')) || [];
  
    // Find the user's details by email and check if the password matches
    const user = userRegistrations.find((user) => user.email === email);
    return user && user.password === password;
  }
  
  // Add an event listener to the login form submit event
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', loginFormSubmit);
  
  // Function to handle the application status form submission
  function statusFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the application ID value from the form
    const applicationId = document.getElementById('applicationId').value;
  
    // Retrieve application status from the local database
    const applicationStatus = getApplicationStatus(applicationId);
  
    // Display the application status result
    const statusResultDiv = document.getElementById('statusResult');
    statusResultDiv.innerHTML = `Application ID: ${applicationId}<br>Application Status: ${applicationStatus}`;
  }
  
  // Function to retrieve application status from the local database
  function getApplicationStatus(applicationId) {
    // Retrieve application statuses from the local database (if any)
    const applicationStatuses = JSON.parse(localStorage.getItem('applicationStatuses')) || {};
  
    // Get the status for the given application ID
    return applicationStatuses[applicationId] || 'Application not found';
  }
  
  // Add an event listener to the application status form submit event
  const statusForm = document.getElementById('statusForm');
  statusForm.addEventListener('submit', statusFormSubmit);
  