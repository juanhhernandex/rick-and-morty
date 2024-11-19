import React from 'react';

const CharacterCard = ({ character }) => (
  <div className="container-card">
    <img
      src={character.image}
      alt={character.name}
      className="w-full h-48 object-cover rounded-lg"
    />
    <h2 className="text-xl font-bold mt-2">{character.name}</h2>
    <p>Species: {character.species}</p>
    <p>Status: {character.status}</p>
  </div>
);

export default CharacterCard;