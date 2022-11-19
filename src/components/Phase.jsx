import React from 'react';
import styled from 'styled-components';
import Title from './Title';
import Todo from './Todo'
import TodoModel from '../TodoModel'

const PhaseStyled = styled.div`
  width: 100%;
  min-height: 400px;
  background: white;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.3);
`

const TodosListStyled = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0;

  li+li {
    margin-top: 20px;
  }
`

type PhaseProps = {
  title: string;
  loading: boolean;
  todos: TodoModel[];
  handleBackButton: (id: string) => void;
  handleForwardButton: (id: string) => void;
}

function Phase({ title, loading, todos, handleBackButton, handleForwardButton }: PhaseProps) {
  return (
    <PhaseStyled>
      <Title>{title}</Title>
      {
        loading ? (
          <span>Loading...</span>
        ) : (
          <TodosListStyled>
            {
              todos.map(item =>
                <li key={item.id}>
                  <Todo
                    id={item.id}
                    content={item.content}
                    phase={item.phase}
                    handleBackButton={handleBackButton}
                    handleForwardButton={handleForwardButton}
                  />
                </li>)
            }
          </TodosListStyled>
        )
      }
    </PhaseStyled>
  )
}

export default Phase