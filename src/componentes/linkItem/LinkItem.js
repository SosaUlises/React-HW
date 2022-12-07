import React from 'react'
import { LinkItemStyle } from './LinkItemStyled'

const LinkItem = ({to, children}) => {
  return (
    <LinkItemStyle className={({isActive}) => isActive ? "active" : ""}
    to={to}
    >
    {children}
    </LinkItemStyle>
  )
}

export default LinkItem