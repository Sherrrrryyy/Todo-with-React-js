import React from 'react'

const Todolist = ({todo}) => {
    return (
        <div>
            {
                todo.map((todo, ind) => {
                    return (
                        <div
                            className='py-5 flex justify-center'
                            key={ind}>
                            <p className='mr-16'>{todo.todo}</p>
                            <button className='rounded-md p-1 bg-red-400'>Delete</button>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Todolist