import TodoModel from './TodoModel'
import { v4 as uuid } from 'uuid'

let todos: TodoModel[] = [
  {
    id: uuid(),
    content: 'Study React',
    phase: 'todo',
  },
  {
    id: uuid(),
    content: 'Clean the house',
    phase: 'todo',
  },
  {
    id: uuid(),
    content: 'Study Math',
    phase: 'done'
  },
  {
    id: uuid(),
    content: 'Watch movies',
    phase: 'inprogress'
  }
]

export const getTodos = (): Promise<TodoModel[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(todos)
    }, 2000)
  })
}

export const addTodo = (todo: TodoModel): Promise<TodoModel[]> => {
  todos = [...todos, todo]
  return Promise.resolve(todos)
}