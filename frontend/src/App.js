import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC" className="src"/>

      <div className="content">
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para a sua empresa.
        </p>

        <from>
          <label htmlFor="email">E-mail *</label>
          <input 
            id="email"
            type="email" 
            placeholder="Seu melhor e-mail"
          />
        </from>
      </div>
    </div>
  );
}

export default App;