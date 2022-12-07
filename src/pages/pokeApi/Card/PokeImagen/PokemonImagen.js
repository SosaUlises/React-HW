import React from 'react'
import ImageContainerStyled from './ImagenContainerStyled'
import { ImageShadowStyled ,ImageBoxStyled} from './ImagenBox'

const PokemonImagen = ({image, alt}) => {
  return (
    <ImageContainerStyled>
      <ImageBoxStyled>
        <img src={image} alt={alt} />
        <ImageShadowStyled />
      </ImageBoxStyled>
    </ImageContainerStyled>
  )
}

export default PokemonImagen