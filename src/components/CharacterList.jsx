import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = ({ characters }) => {
  if (!characters.length) {
    return <p className="text-center">No characters found</p>;
  }

  return (
    <div className="container-box">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;