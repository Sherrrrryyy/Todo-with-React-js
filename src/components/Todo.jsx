import React from 'react'

const Todo = ({ addTodo, inputValue, value }) => {
    return (
        <div>
            <input
                onChange={inputValue}
                className='border border-gray-500 rounded-md p-1 m-2'
                placeholder='Add your todo'
                value={value} />
            <button
            onClick={addTodo}
            disabled ={value === ""}
            style={{backgroundColor : value === "" && "gray"}}
            className='rounded-md p-1 bg-green-400'>Add</button>
        </div>
    )
}

export default Todo