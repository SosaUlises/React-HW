import React from 'react'
import { StatusBarContainerStyled, StatusBarTitleStyled, StatusBarHabilityStyled } from './StatusStyle';

const Status = props => {
    const {
        base_stat,
        stat: { name },
      } = props;

  return (
    <StatusBarContainerStyled>
      <StatusBarTitleStyled>{name}:</StatusBarTitleStyled>
      <StatusBarHabilityStyled>{base_stat}%</StatusBarHabilityStyled>
    </StatusBarContainerStyled>
  )
}

export default Status;