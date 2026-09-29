// src/App.jsx
import React from 'react';
import { Header } from './Header';
import { PokemonGrid } from './PokemonGrid'; // Novo componente importado aqui
import Footer from './Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      
      {/* A grade automática agora substitui os cards manuais */}
      <PokemonGrid />

      <Footer />
    </div>
  );
}

export default App;
