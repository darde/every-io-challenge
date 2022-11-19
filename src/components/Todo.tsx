import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import styled from 'styled-components';
import TodoModel from '../TodoModel';

const TodoStyled = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 5px;
  border-radius: 9px;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const IconButton = styled.button`
  width: 30px;
  height: 40px;
  background: ${({ color }) => color};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  outline: none;
  border: none;
  color: white;
`

const TodoText = styled.p`
  text-align: center;
`

type TodoProps = TodoModel & {
  handleBackButton: (id: string) => void;
  handleForwardButton: (id: string) => void;
}

function Todo({ id, content, phase, handleBackButton, handleForwardButton }: TodoProps) {
  return (
    <TodoStyled>
      <IconButton
        disabled={phase === 'todo'}
        color={'#f4aeae'}
        onClick={() => handleBackButton(id)}
      >
        <BsArrowLeft />
      </IconButton>
      <TodoText>
        {content}
      </TodoText>
      <IconButton
        disabled={phase === 'done'}
        color={'#4d8e49'}
        onClick={() => handleForwardButton(id)}
      >
        <BsArrowRight />
      </IconButton>
    </TodoStyled>
  )
}

export default Todo