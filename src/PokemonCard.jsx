import React from 'react';
import './PokemonCard.css';

export function PokemonCard() {
  return (
    <article className="pokemon-card">
      <header className="card-header">
        <span className="pokemon-id">#004</span>
        <h2 className="pokemon-name">Charmander</h2>
      </header>
      
      <figure className="pokemon-image-container">
        <img 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" 
          alt="Ilustração do Charmander" 
        />
      </figure>
      
      <ul className="pokemon-types">
        <li className="type-badge type-fire">Fogo</li>
      </ul>
    </article>
  );
}
