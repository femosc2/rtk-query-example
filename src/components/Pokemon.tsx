import React, { useEffect } from 'react';

import { useGetPokemonByNameQuery } from '../services/api';

const Pokemon = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      {isLoading && <h2>Det laddar!</h2>}
      {error && <h2>Det blev fel!!</h2>}
      {data && (
        <section>
          <h2>Name: {data.species.name}</h2>
          <h3>Weight: {data.weight}</h3>
        </section>
      )}
    </>
  );
};

export default Pokemon;
