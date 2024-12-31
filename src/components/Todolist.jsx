import React from 'react';

const Todolist = ({ todo, editTodo,handleDeleteTodo }) => {
  return (
    <div>
      {todo.map((item) => (
        <div
          className='rounded-lg my-10 bg-blue-500 text-white font-bold flex justify-between p-5 w-96'
          key={item.id}
        >
          <span className='h-4 w-4 border border-white rounded-full my-2'></span>
          <p className='mr-16'>{item.todo}</p>
          <button
            onClick={() => editTodo(item.id)}
            className='rounded-md p-2 text-white'
          >
            Edit
          </button>
          <button
          onClick={() => handleDeleteTodo(item.id)}
          className='rounded-md p-2 bg-red-500 hover:bg-red-600'>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todolist;