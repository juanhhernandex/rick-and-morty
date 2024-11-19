import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className='container-filter'>
      <select
        name="status"
        value={filters.status}
        onChange={handleChange}
      >
        <option value="">Todos los estados</option>
        <option value="alive">Vivo</option>
        <option value="dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>
      <select
        name="gender"
        value={filters.gender}
        onChange={handleChange}
      >
        <option value="">Todos los generos</option>
        <option value="male">Hombre</option>
        <option value="female">Mujer</option>
        <option value="genderless">Sin genero</option>
        <option value="unknown">Desconoido</option>
      </select>
      <input
        type="text"
        name="species"
        placeholder="Buscar por especies"
        value={filters.species}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filters;