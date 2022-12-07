import styled from "styled-components";

export const ImageBoxStyled = styled.div`
  position: relative;
  width: 124px;
  height: 124px;
  text-align: center;

  & img {
    width: 162px;
    height: 162px;
    position: absolute;
    bottom: 10px;
    right: 0;
    left: -10px;
  }
`;

export const ImageShadowStyled = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 180px;
  height: 46px;

  background: radial-gradient(
    51.76% 37.2% at 39.17% 51.96%,
    rgba(0, 0, 0, 0.24) 0%,
    rgba(255, 255, 255, 0) 100%
  );

  transform: rotate(6.85deg);
`;
