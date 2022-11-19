import React, { useState, ChangeEvent, MouseEvent } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import styled from 'styled-components'

const InserFormStyled = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  display: flex;
  align-items: center;

  input {
    width: 250px;
    height: 45px;
    padding: 5px;
    font-size: 18px;
    border-radius: 4px;
    margin-right: 15px;
    border: 1px solid #333;
  }
`

const Button = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 4px;
  background: #3d7fe1;
  border: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  padding: 0;
  
`

function InsertForm({ onSubmit }: { onSubmit: (task: string) => void}) {
  const [task, setTask] = useState<string>('')
  
  function handleOnChange(e: ChangeEvent<HTMLInputElement>): void {
    setTask(e.target.value)
  }

  function handleOnChangeAndCleanField(e: MouseEvent<HTMLButtonElement>): void {
    console.log('task content: ', task)
    onSubmit(task)
    setTask('')
  }

  return (
    <InserFormStyled>
      <input type='text' placeholder='Add Task' value={task} onChange={handleOnChange}></input>
      <Button onClick={handleOnChangeAndCleanField}>
        <AiOutlinePlus />
      </Button>
    </InserFormStyled>
  )
}

export default InsertForm