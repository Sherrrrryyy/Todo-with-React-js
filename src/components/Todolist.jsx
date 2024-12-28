import React from 'react'

const Todolist = ({todo}) => {
    return (
        <div>
            {
                todo.map((todo, ind) => {
                    return (
                        <div className='rounded-lg my-10 bg-gray-500 text-white font-bold  flex justify-between p-5 w-96'
                            key={ind}>
                            <span className='h-4 w-4 border border-white rounded-full my-2'></span>
                            <p className='mr-16'>{todo.todo}</p>
                            <button className='rounded-md p-'>Delete</button>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Todolist