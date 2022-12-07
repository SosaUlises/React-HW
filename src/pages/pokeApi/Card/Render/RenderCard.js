import React from 'react'
import { CardContainerStyled, CardTypeContainerStyled } from './CardContainerStyled';
import Type from '../Type/Type';
import PokemonImagen from '../PokeImagen/PokemonImagen';
import { CardTextStyled, CardStatusContainerStyled } from './CardContainerStyled';
import Status from '../Status/Status';

const RenderCard = props => {
  const { name, order, sprites, types, stats } = props;

  return (
    <CardContainerStyled>
      <PokemonImagen image={sprites?.other.home.front_default} alt={name}/>
      <CardTextStyled>
        <h2>{name}</h2>
        <h3>{order}</h3>
      </CardTextStyled>

      <CardTypeContainerStyled>
        <p>Tipo: </p>
        {types?.map(type => (
          <Type key={type.slot} typeName={type.type.name} />
        ))}
      </CardTypeContainerStyled>

      <CardStatusContainerStyled>
      {stats?.slice(0, 3).map(stat => (
          <Status
            key={stat.stat.name}
            {...stat}
          />
        ))}
      </CardStatusContainerStyled>

    </CardContainerStyled>
  )
}

export default RenderCard