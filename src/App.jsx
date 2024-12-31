import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Todolist from './components/Todolist';

const App = () => {
  const [todoList, setTodoList] = useState('');
  const [todo, setTodo] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [delteTodo, setDeleteTodo] = useState(false);

  const handleAddTodo = () => {
    setShowInput(true);
  };

  const handleSaveTodo = () => {
    const updatedTodos = [
      ...todo,
      {
        todo: todoList,
        id: Date.now(),
        completed: false,
      },
    ];
    setTodo(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodoList('');
    setShowInput(false);
  };

  const handleUpdateTodo = () => {
    const updatedTodos = todo.map((item) => {
      if (item.id === currentTodo) {
        return { ...item, todo: todoList };
      }
      return item;
    });
    setTodo(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodoList('');
    setEditMode(false);
    setCurrentTodo(null);
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodo(savedTodos);
    }
  }, []);

  const editTodo = (id) => {
    const todoToEdit = todo.find((item) => item.id === id);
    setTodoList(todoToEdit.todo);
    setEditMode(true);
    setShowInput(true);
    setCurrentTodo(id);
  };

const handleDeleteTodo = (id) =>{
  const updatedTodos = todo.filter((item) => item.id !== id);
  setTodo(updatedTodos)
localStorage.setItem('todos', JSON.stringify(updatedTodos));
}

  return (
    <>
      <Header />
      <div className="pl-5 py-5">
        <h1 className="text-2xl font-bold mb-4 ">Add your To-do</h1>
        <div className="flex items-center mb-4">
          {showInput && (
            <input
              type="text"
              value={todoList}
              onChange={(e) => setTodoList(e.target.value)}
              className="border p-2 rounded mr-2 w-96"
              placeholder="Enter your todo"
            />
          )}
          {showInput ? (
            editMode ? (
              <button
                disabled={!todoList}
                onClick={handleUpdateTodo}
                className={`ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none ${!todoList && 'opacity-50 cursor-not-allowed'}`}
              >
                Update
              </button>
            ) : (
              <button
                disabled={!todoList}
                onClick={handleSaveTodo}
                className={`ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none ${!todoList && 'opacity-50 cursor-not-allowed'}`}
              >
                Add
              </button>
            )
          ) : (
            <button
              onClick={handleAddTodo}
              className="absolute right-20 ml-2 bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              +
            </button>
          )}
        </div>
        <Todolist todo={todo} editTodo={editTodo} handleDeleteTodo={handleDeleteTodo} />
      </div>
    </>
  );
};

export default App;