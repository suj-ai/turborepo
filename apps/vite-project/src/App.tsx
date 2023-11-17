import { useState } from 'react';
import { Button } from 'library';
import reactLogo from './assets/react.svg';
import viteLogo from '../../../../../../../../vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((counts) => counts + 1)}>
          count is
          {count}
        </button>
      </div>
      <Button />
      <p className="read-the-docs">more ijdksjd</p>
    </>
  );
}

export default App;
