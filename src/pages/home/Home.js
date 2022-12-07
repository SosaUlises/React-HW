import React from 'react'
import HomeContainerStyled from './HomeContainer'
import {ButtonStyled} from './Button'
import { useNavigate } from 'react-router-dom'
/* import { useContext } from 'react'
import { Contexto } from '../To-Do/context/MiContext' */

const Home = () => {
  
  const navigate = useNavigate();

  const HandleNavigateToDo = () => {
    navigate("/Todo")
  };
  const HandleNavigatePoke = () => {
    navigate("/Poke")
};

/* const {color} = useContext(Contexto); */

  return (
    <HomeContainerStyled>
      <ButtonStyled onClick={HandleNavigateToDo}>Pokemones</ButtonStyled>
      <ButtonStyled onClick={HandleNavigatePoke} /* style={{color:(color)}} */>Lista de Tareas</ButtonStyled>
    </HomeContainerStyled>
  )
}

export default Home;