// src/PokemonGrid.jsx
import React from 'react';
import { PokemonCard } from './PokemonCard'; // Mantendo a importação original por chaves
import { pokemonsIniciais } from './pokemons';
import './PokemonGrid.css';

export function PokemonGrid() { // Exportando como Named para seguir o padrão do seu projeto
  return (
    <main className="pokemon-grid">
      {pokemonsIniciais.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </main>
  );
}
