import { useState, useEffect } from 'react';
import axios from 'axios';

function CiblesAxios() {
  const [cibles, setCibles] = useState([]);
  const [scanActif, setScanActif] = useState(true);
  const [alerte, setAlerte] = useState(null);

  useEffect(() => {
    // Axios gère le .json() tout seul !
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((reponse) => setCibles(reponse.data))
      .catch((erreur) => setAlerte(erreur.message))
      .finally(() => setScanActif(false));
  }, []);

  if (scanActif) return <p>📡 Scan biométrique en cours...</p>;
  if (alerte) return <p>🛑 Échec du scan : {alerte}</p>;

  return (
    <div style={{ border: '1px solid red', padding: '15px' }}>
      <h2 style={{ color: 'red' }}>🎯 Cibles Identifiées (via Axios)</h2>
      <ul>
        {cibles.slice(0, 5).map((cible) => (
          <li key={cible.id}>
            Nom de code : <strong>{cible.username}</strong> | Couverture : {cible.name} | Contact : {cible.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CiblesAxios;