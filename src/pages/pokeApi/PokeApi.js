import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import Search from './Input/Search';
import RenderCard from './Card/Render/RenderCard';
import MyAppStyled from "./PokeApiStyle"


const PokeApi = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e, pokemon) => {
    e.preventDefault();

    setData(null);
    setError(false);
    setIsLoading(true);

    try {
      let selectedPokemon = pokemon.toLowerCase().trim();
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
      setData(data)
      console.log(data)
    } catch (error) {
      setError("!Pokemon no encontrado!")
    }
    setIsLoading(false);

  }

  return (
    <>
      <MyAppStyled>
        <Search handleSubmit={handleSubmit} />
        {error && <h2 style={{ color: '#d100f2' }}>{error}</h2>}
        {data && <RenderCard {...data} />}
      </MyAppStyled>
    </>
  )
}

export default PokeApi