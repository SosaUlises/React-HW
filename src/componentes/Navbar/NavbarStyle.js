import styled from "styled-components";

export const NavbarStyledContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
gap: 10px;

margin: 0 auto;
padding: 22px 20px;

width: 92%;
height: 50px;

` 

export const LogoContainer = styled.div`
display: flex;
align-items: center;
cursor: pointer;

& img{
height: 40px;
}
`

export const LinkContainerStyled = styled.div`
display: flex;
gap: 40px;
`