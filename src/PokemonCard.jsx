// src/PokemonCard.jsx
import './PokemonCard.css';

export function PokemonCard({ pokemon }) {

  const { id, name, type, image } = pokemon;

  return (
    <div className="pokemon-card">
      <span className="pokemon-id">{id}</span>
      <h2 className="pokemon-name">{name}</h2>
      
      <img src={image} alt={`Ilustração do ${name}`} />
      
      <ul>

        <li className={`type-badge type-${type.toLowerCase()}`}>
          {type}
        </li>
      </ul>
    </div>
  );
}
