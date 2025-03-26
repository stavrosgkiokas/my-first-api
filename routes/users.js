const express = require('express');
const router = express.Router();

const users = [];

router.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Όλα τα πεδία είναι υποχρεωτικά.' });
  }

  const newUser = { username, email, password };
  users.push(newUser);

  console.log('🆕 User Registered:', newUser);
  return res.status(201).json({ message: '✅ Επιτυχής εγγραφή' });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "❌ Λάθος email ή κωδικός!" });
  }

  res.json({ message: "✅ Επιτυχής σύνδεση!", user });
});

module.exports = router;
