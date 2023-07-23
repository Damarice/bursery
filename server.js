const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;


// Connect to MongoDB (replace 'your_mongodb_url' with your MongoDB URL)
mongoose.connect('your_mongodb_url', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Define a user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Create a User model based on the user schema
const User = mongoose.model('User', userSchema);

// Middleware to parse JSON data
app.use(express.json());

// Route to handle user registration
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  // Check if the email is already registered
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ message: 'Email already registered' });
  }

  // Create a new user in the database
  const newUser = new User({ name, email, password });
  await newUser.save();

  // Return the user's unique ID
  res.json({ message: 'Registration successful', userId: newUser._id });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
