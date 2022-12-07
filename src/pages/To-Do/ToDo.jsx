import React from 'react'
import { useState, useEffect } from 'react'
import TodoContainer, { Form } from "./ContainerStyled"
import Tasks from "./Tasks/Tasks"
import ControladorContainer from './ContainerBtnInp'
import InputStyled from './Input/InputStyled'
import ButtonStyled from './Button/ButtonStyled'
import { ButtonStyledReset } from './Button/ButtonStyled'
import { TaskCardStyled } from './Tasks/TasksContainer'
import { BiReset } from 'react-icons/bi';

/* Set Local Storage */
export const getLocalStorage = () => {
  let tareas = localStorage.getItem('tareas');
  if (tareas) {
    return JSON.parse(localStorage.getItem('tareas'));
  } else {
    return [];
  }
};


/* Funcion inicializadora */
const ToDo = () => {

  const [inputTask, setInputTask] = useState("");
  const [task, setTask] = useState(getLocalStorage());

  /* useEffect para localStorage */
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(task));
  }, [task]);


  /* Function addTask */
  const addTask = () => {
    if (!inputTask) {
    } else {
      setTask([...task, inputTask]);
      setInputTask("");
    }
  }

  /* Function removeAllTask */
  const removeAllTask = () => {
    setTask([]);
  }


  return (
    <>
      <TodoContainer onSubmit={addTask}>
        <h1>To Do List</h1>
        <Form>
          <ControladorContainer>
            <InputStyled value={inputTask} onChange={(e) => setInputTask(e.target.value)} />
            <ButtonStyled>Add</ButtonStyled>
            <ButtonStyledReset><BiReset size={"25px"} onClick={removeAllTask} /></ButtonStyledReset>
          </ControladorContainer>
          <Tasks>
            {task.map((task, id) => {
              return (<TaskCardStyled key={id}>{task}</TaskCardStyled>)
            })}
          </Tasks>
        </Form>
      </TodoContainer>
    </>)}


export default ToDo;