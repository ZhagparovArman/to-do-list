import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

function TodoItem(props) {
  const classes = []
  if (props.list.completed) {
    classes.push('ln')
  }

  const { removeTodo } = useContext(Context)

  return (
    <li>
      <span className={classes.join(' ')}>
        <input type='checkbox' onChange={() => props.onToggle(props.list.id)} />
        {props.list.title}
      </span>
      <button
        onClick={() => {
          removeTodo(props.list.id)
        }}
      >
        &times;
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  list: PropTypes.object.isRequired
}

export default TodoItem
