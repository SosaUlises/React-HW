import React from 'react'
import TaskContainerStyled from './TasksContainer'
import { TaskCardStyled } from './TasksContainer'


const Tasks = ({children}) => {
  return (
    <TaskContainerStyled>
      <TaskCardStyled>{children}</TaskCardStyled>
    </TaskContainerStyled>
  )
}

export default Tasks