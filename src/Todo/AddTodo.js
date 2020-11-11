import React, { useState } from 'react'

function useInputValue(defaultValue = '') {
  const [value, setValue] = useState('')
  return {
    value: () => value,
    bind: {
      value,
      onChange: (event) => setValue(event.target.value)
    },
    clear: () => setValue('')
  }
}

function AddTodo(props) {
  const input = useInputValue('')

  function submitHandler(e) {
    e.preventDefault()
    if (input.value().trim()) {
      props.onCreate(input.value())
    }
    input.clear()
  }

  return (
    <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default AddTodo
