import React from 'react'

const Todo = ({ addTodo, inputValue, value }) => {
    return (
        <div>
            <input
                onChange={inputValue}
                className='border border-gray-500 rounded-full p-1 m-2'
                placeholder='Add your todo'
                value={value} />
        </div>
    )
}

export default Todo