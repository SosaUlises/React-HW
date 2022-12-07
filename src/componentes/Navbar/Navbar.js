import React from 'react'
import LinkItem from '../linkItem/LinkItem'
import { LogoContainer, NavbarStyledContainer,LinkContainerStyled } from './NavbarStyle'

const Navbar = () => {
  return (
    <NavbarStyledContainer>
        <LogoContainer><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="logo" /></LogoContainer>
        <LinkContainerStyled>
        <LinkItem to="/">Home</LinkItem>
        <LinkItem to="Todo">ToDo</LinkItem>
        <LinkItem to="Poke">PokeApi</LinkItem>
        </LinkContainerStyled>
    </NavbarStyledContainer>
  )
}

export default Navbar