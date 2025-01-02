const express = require('express');
const app = express();

app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... await database interaction to fetch user data ...
    const user = await db.findUser(userId); // Replace with actual database interaction
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Server error');
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));