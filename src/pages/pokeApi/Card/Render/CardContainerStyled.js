import styled from "styled-components";

export const CardContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  margin: 0 auto;
  padding: 30px 25px;
  padding-bottom: 15px;
  border-radius: 50px;
  background: rgb(100,0,144);
background: linear-gradient(90deg, rgba(100,0,144,1) 0%, rgba(172,0,167,1) 39%, rgba(145,0,175,1) 67%, rgba(209,0,242,1) 90%, rgba(173,0,255,1) 100%);
`;

export const CardTextStyled = styled.div`
  text-align: center;

  & h2 {
    margin: 0;
    font-weight: 700;
    font-size: 35px;
    line-height: 36px;
  }

  & h3 {
    margin: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-top: 3px;
  }
`;

export const CardTypeContainerStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & p {
    font-weight: 800;
    font-size: 18px;
    line-height: 17px;
    color: white;
  }
`;

export const CardStatusContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`