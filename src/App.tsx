import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import Greetings from "./components/Greetings";

function App() {
  const onClick = (name: string) => {
      alert(`${name} say hello`)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Greetings name={'태훈'} onClick={onClick}/>
    </div>
  );
}

export default App;
