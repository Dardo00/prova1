import React, { useEffect, useState } from 'react';

function App() {
  const [mensagem, setMensagem] = useState('Carregando...');

  useEffect(() => {
    fetch('http://localhost:3001/api')
      .then(res => res.json())
      .then(data => setMensagem(data.message))
      .catch(() => setMensagem('Erro ao conectar com a API'));
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Frontend + Backend</h1>
      <p>{mensagem}</p>
    </div>
  );
}

export default App;
