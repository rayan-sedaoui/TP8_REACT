import InterceptionFetch from './InterceptionFetch';
import CiblesAxios from './CiblesAxios';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>👁️‍🗨️ AGENT DASHBOARD v1.0</h1>
      <p>Bienvenue Agent. Voici votre rapport de mission :</p>

      <InterceptionFetch />
      <CiblesAxios />
    </div>
  );
}

export default App;