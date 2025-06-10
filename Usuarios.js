import { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/usuarios')
      .then(res => res.json())
      .then(data => setUsuarios(data));
  }, []);

  const handleClick = (id) => {
    window.open(`/dados/${id}`, '_blank');
  };

  return (
    <List>
      {usuarios.map(user => (
        <ListItem button key={user.id} onClick={() => handleClick(user.id)}>
          <ListItemText primary={user.name} secondary={user.email} />
        </ListItem>
      ))}
    </List>
  );
}
