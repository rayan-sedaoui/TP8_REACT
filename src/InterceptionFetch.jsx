import { useState, useEffect } from 'react';

function InterceptionFetch() {
  const [transmissions, setTransmissions] = useState([]);
  const [piratageEnCours, setPiratageEnCours] = useState(true);
  const [faille, setFaille] = useState(null);

  useEffect(() => {
    // Lancement de l'interception
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((reponse) => {
        if (!reponse.ok) {
          throw new Error('Signal ennemi brouillé !');
        }
        return reponse.json();
      })
      .then((donnees) => setTransmissions(donnees))
      .catch((erreur) => setFaille(erreur.message))
      .finally(() => setPiratageEnCours(false));
  }, []); // Le tableau vide = on lance le piratage une seule fois au démarrage

  if (piratageEnCours) return <p>⏳ Décryptage des ondes radio en cours...</p>;
  if (faille) return <p>🚨 ALERTE ROUGE : {faille}</p>;

  return (
    <div style={{ border: '1px solid black', padding: '15px', marginBottom: '20px' }}>
      <h2>📻 Transmissions Interceptées (via Fetch)</h2>
      <ul>
        {transmissions.slice(0, 4).map((msg) => (
          <li key={msg.id}><strong>Code {msg.id}:</strong> {msg.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default InterceptionFetch;