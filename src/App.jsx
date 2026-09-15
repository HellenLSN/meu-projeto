import React from 'react';
import { Header } from './Header';
import { PokemonCard } from './PokemonCard'; // Importação do componente

function App() {
  return (
    <div className="app-container">
      <Header />
      <PokemonCard /> {/* Inserção da tag */}
    </div>
  );
}

export default App;

