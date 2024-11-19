import React, { useState, useEffect } from 'react';
import CharacterList from './components/CharacterList';
import Filters from './components/Filters';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filters, setFilters] = useState({ status: '', gender: '', species: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?status=${filters.status}&gender=${filters.gender}&species=${filters.species}`
        );
        const data = await response.json();
        setCharacters(data.results || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [filters]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center">Rick and Morty Characters</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;