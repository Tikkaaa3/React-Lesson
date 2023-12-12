import { useState } from 'react';
import './App.css';
import {Task} from './Task.js'

function App() {
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([])

    const changeHandler = (event) => {
        setTodo({
            name: event.target.value,
            id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1
        })
    }

    const addTodo = () => {
        setTodos([...todos, todo])
        setTodo({name: ''})
    }
    const deleteTodo = (todoID) => {
        setTodos(todos.filter((task) => {
            return task.id === todoID ? false : true
        }))
    }
  return (
    <div className="App">
      <div className='addTodo'>
        <input type='text' value={todo.name} onChange={changeHandler}/>
        <button type='button' onClick={addTodo}>add</button>
      </div>
      <div className='todoList'>{todo.name}
      {todos.map((todo) => {
            return  <Task id = {todo.id} name = {todo.name} deleteTodo = {deleteTodo}/>
      })}
      </div>
    </div>
  );
}

export default App;
