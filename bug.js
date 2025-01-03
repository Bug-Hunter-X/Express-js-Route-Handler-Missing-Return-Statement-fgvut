const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database interaction to get user data
  if (!userData) {
    return res.status(404).send('User not found'); // Missing return statement
  }
  res.send(userData); //This line was not reachable because of missing return statement
});

app.listen(3000, () => console.log('Server listening on port 3000'));