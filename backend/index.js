const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3001;

app.use(cors());

app.get('/usuarios', (req, res) => {
  const users = JSON.parse(fs.readFileSync('./data/users.json'));
  res.json(users);
});

app.get('/dados/:id', (req, res) => {
  const users = JSON.parse(fs.readFileSync('./data/users.json'));
  const user = users.find(u => u.id === parseInt(req.params.id));
  user ? res.json(user) : res.status(404).send('Usuário não encontrado');
});

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});
