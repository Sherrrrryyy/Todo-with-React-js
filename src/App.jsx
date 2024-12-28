import React, { useState } from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Todolist from './components/Todolist';

const App = () => {
  const [todoList, setTodoList] = useState('');
  const [todo, setTodo] = useState([]);
  const [showInput, setShowInput] = useState(false);

  
    const handleAddTodo = () => {
      setShowInput(true);
    }

  const handleSaveTodo = () => {
    setTodo([
      ...todo,
      {
        todo: todoList,
        id: Date.now(),
        completed: false,
      },
    ]);
    setTodoList('');
    setShowInput(false);
  };

  return (
    <>
      <Header />
      <div className="pl-5 py-5">
        <h1 className="text-2xl font-bold mb-4 ">Add your To-do</h1>
        <div className="flex items-center mb-4">
          {showInput && (
            <input type="text"
              value={todoList}
              onChange={(e) => setTodoList(e.target.value)}
              className="border p-2 rounded mr-2 w-96"
              placeholder="Enter your todo"
            />
          )}
           {showInput ? (
            <button
            disabled={!todoList}
              onClick={handleSaveTodo}
              className={`ml-2 bg-green-500 text-white p-2 rounded hover:bg-green-600 focus:outline-none ${!todoList && 'opacity-50 cursor-not-allowed'}`}>
              Save
            </button>
          ) : (
            <button
              onClick={handleAddTodo}
              className="absolute bottom-10 right-20 ml-2 bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              +
            </button>
          )}
        </div>
        <Todolist todo={todo} />
      </div>
    </>
  );
};

export default App;