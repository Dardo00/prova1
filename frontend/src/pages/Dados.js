import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

export default function Dados() {
  const { id } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/dados/${id}`)
      .then(res => res.json())
      .then(data => setUsuario(data));
  }, [id]);

  if (!usuario) return <div>Carregando...</div>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{usuario.name}</Typography>
        <Typography>Email: {usuario.email}</Typography>
        <Typography>Idade: {usuario.idade}</Typography>
      </CardContent>
    </Card>
  );
}
