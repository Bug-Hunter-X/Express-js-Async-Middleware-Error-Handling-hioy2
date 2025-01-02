const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database interaction to fetch user data ...
  if (!user) {
    return res.status(404).send('User not found'); // Correct handling for missing user
  }
  // ... more code ...
  res.send(user);
});

app.listen(3000, () => console.log('Server listening on port 3000'));