import React, { useState, useEffect } from 'react';
import api from './services/api';
import './global.css';
import './app.css';
import './sideBar.css';
import './main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
//Propriedade: Informações que um componten PAI passa para o componete FILHO
//Estado:Informações matidas pelo componete(Imutabilidade = nunca é alterado um dado e sim sempre sera um dado
//novo a partir do valor que tinha anterior )
/**
 * const [counter, setCounter] = useState(0);
  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
 */
function App() {
  const [github_username, setGithubusername] = useState('');
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const res = await api.get('devs');
      setDevs(res.data);
    }
    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const res = await api.post('./devs', data);
    setDevs([...devs, res.data]);
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
