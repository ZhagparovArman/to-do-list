import React from 'react'
import Context from './context'
import AddTodo from './Todo/AddTodo'
import TodoList from './Todo/TodoList'

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, title: 'The first one', completed: false },
    { id: 2, title: 'The second one', completed: false },
    { id: 3, title: 'The third one', completed: false }
  ])

  function toggleShow(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{ title, id: Date.now(), completed: false }]))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper'>
        <h1>To-do list</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? (
          <TodoList todos={todos} toggleTodo={toggleShow} />
        ) : (
          <p>No todos found</p>
        )}
      </div>
    </Context.Provider>
  )
}

export default App
