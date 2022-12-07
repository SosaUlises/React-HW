import React from 'react';
import { TypeStyled } from './TypeStyled';

const Type = ({ typeName }) => {
  return <TypeStyled type={typeName}>{typeName}</TypeStyled>;
};

export default Type;
