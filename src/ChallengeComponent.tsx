import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'
import Wrapper from './components/Wrapper'
import Phase from './components/Phase'
import PhaseContainer from './components/PhaseContainer';
import Title from './components/Title';
import InsertForm from './components/InsertForm';
import { getTodos, addTodo } from './TodoRepository';
import TodoModel from './TodoModel'


export function ChallengeComponent() {
  const [loading, setLoading] = useState(true)
  const [todos, setTodos] = useState<TodoModel[]>([])

  useEffect(() => {
    async function fetchTodos() {
      const todosList = await getTodos()
      setTodos(todosList)
      setLoading(false)
    }
    fetchTodos()
  }, [todos])

  function handleBackButton(id: string): void {
    const todosList = todos.slice()
    todosList.some(item => {
      if (item.id === id) {
        if (item.phase === 'done') {
          item.phase = 'inprogress'
        } else {
          item.phase = 'todo'
        }
        return true
      }
      return false
    })
    setTodos([...todosList])
  }

  function handleForwardButton(id: string): void {
    const todosList = todos.slice()
    todosList.some(item => {
      if (item.id === id) {
        if (item.phase === 'todo') {
          item.phase = 'inprogress'
        } else {
          item.phase = 'done'
        }
        return true
      }
      return false
    })
    setTodos([...todosList])
  }

  async function onSubmit(task: string): Promise<void> {
    const newTodo = {
      id: uuid(),
      content: task,
      phase: 'todo'
    }
    console.log('task: ', newTodo)
    const updatedTodos = await addTodo(newTodo)
    console.log('updatedTodos: ', updatedTodos)
    setTodos(updatedTodos)
  }

  return (
    <Wrapper>
      <Title color={'black'}>Todos Application</Title>
      <PhaseContainer>
        <Phase
          title="To Do"
          loading={loading}
          todos={todos.filter(todo => todo.phase === 'todo')}
          handleBackButton={handleBackButton}
          handleForwardButton={handleForwardButton}
        />
        <Phase
          title="In Progress"
          loading={loading}
          todos={todos.filter(todo => todo.phase === 'inprogress')}
          handleBackButton={handleBackButton}
          handleForwardButton={handleForwardButton}
        />
        <Phase
          title="Done"
          loading={loading}
          todos={todos.filter(todo => todo.phase === 'done')}
          handleBackButton={handleBackButton}
          handleForwardButton={handleForwardButton}
        />
      </PhaseContainer>
      <InsertForm onSubmit={onSubmit} />
    </Wrapper>
  )
}
