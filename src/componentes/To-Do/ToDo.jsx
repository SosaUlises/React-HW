import React from 'react'
import Input from '../Input/Input'
import TodoContainer from "./ContainerStyled"
import Button from '../Button/Button'
import Tasks from '../Tasks/Tasks'
import AnotarContainer from './ContainerBtnInp'

const ToDo = () => {
  return (
    <>
    <TodoContainer>
        <h1>To Do List</h1>
    <AnotarContainer>
        <Input/>
        <Button/>
    </AnotarContainer>
       <Tasks></Tasks>
    </TodoContainer> 
    </>
  )
}

export default ToDo