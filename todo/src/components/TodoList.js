import React from 'react'
import Todo from './Todo'

export default ({todos}) => 
  <div>
    {todos.map(todo =>
      <Todo key={todo} children={todo} />
    )}
  </div>
