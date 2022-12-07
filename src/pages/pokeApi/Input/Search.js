import React from 'react'
import InputSearch from "./InputStyled"
import SearchFormContainer from './SearchFormStyled';
import { useState } from 'react';

const Search = ({ handleSubmit }) => {
    const [pokemon, setPokemon] = useState("");

    return (
        <SearchFormContainer
            onSubmit={e => {
                handleSubmit(e, pokemon);
                setPokemon("");
            }}>
            <InputSearch
                placeholder='Escribe un número'
                value={pokemon}
                onChange={e => { setPokemon(e.target.value) }}
            />
        </SearchFormContainer>
    )
}

export default Search