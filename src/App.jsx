import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Todolist from './components/Todolist'

function App() {


  const [todoList, setTodoList] = useState('')
  const [todo, setTodo] = useState([
    {
      todo: "Playing Cricket",
      id: Date.now(),
      completed: false
    }
  ])

  const handleAddTdod = () => {
    setTodo([...todo,
    {
      todo: todoList, id: Date.now(), completed: false
    }
    ])
  }

  return (
    <>
      <div className='py-5'>
        <h1>Add your To-do</h1>
        <Todo
          value={todoList}
          inputValue={(e) => setTodoList(e.target.value)}
          addTodo={handleAddTdod}
        />

        <Todolist todo={todo} />

      </div>
    </>
  )
}


export default App
