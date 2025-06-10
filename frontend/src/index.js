const express = require('express');
const app = express();
const PORT = 3001;

app.get('/api', (req, res) => {
  res.json({ message: "API funcionando com sucesso!" });
});

app.listen(PORT, () => {
  console.log(`Backend rodando na porta ${PORT}`);
});
