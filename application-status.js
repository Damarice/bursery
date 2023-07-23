// application-status.js

// Function to generate a random alphanumeric string (message ID)
function generateRandomMessageId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let messageId = '';
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    messageId += characters.charAt(randomIndex);
  }
  return messageId;
}

// Function to generate a random message based on the message ID
function generateRandomMessage(messageId) {
  // Replace this with your own logic to generate different messages based on the message ID.
  // For now, we'll use a simple example with hardcoded messages.
  const messages = [
    'Congratulations! Your application is approved.',
    'We are still reviewing your application. Please wait for further updates.',
    'Unfortunately, your application has been rejected.',
    'Your application is under consideration. We will notify you soon.'
    // Add more messages as needed.
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

// Function to display the popup message
function displayPopupMessage(message) {
  // Create the popup message container
  const popupMessage = document.createElement('div');
  popupMessage.className = 'popup-message';
  popupMessage.textContent = message;

  // Add the popup message container to the body
  document.body.appendChild(popupMessage);

  // Remove the popup after a short delay (e.g., 3 seconds)
  setTimeout(function() {
    popupMessage.remove();
  }, 3000);
}

// Function to handle the application status form submission
function statusFormSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Get the application ID value from the form
  const applicationId = document.getElementById('applicationId').value;

  // Generate a random message ID
  const messageId = generateRandomMessageId();

  // Generate a random message based on the message ID
  const message = generateRandomMessage(messageId);

  // Display the random message as a popup
  displayPopupMessage(message);
}

// Add an event listener to the application status form submit event
const statusForm = document.getElementById('statusForm');
statusForm.addEventListener('submit', statusFormSubmit);
