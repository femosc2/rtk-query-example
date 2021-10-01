import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useGetPokemonByNameQuery } from '../services/api';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState("bulbasaur");
  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemon);
  const pokemonData = useSelector<any, any>(
    (state) => state.pokemonApi.queries
  );
  useEffect(() => {
    console.log(pokemonData[`getPokemonByName("${pokemon}")`]);
  }, [pokemonData, pokemon]);
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
      <input onChange={(e) => setPokemon(e.target.value)} />
    </>
  );
};

export default Pokemon;
