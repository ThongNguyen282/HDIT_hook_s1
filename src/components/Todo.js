import React from 'react'

const Todo = (props) => {
    const { todos } = props;
    return (
        <div className="todos-container">
            {todos.map((item, index) => <ul>
                <li key={index}>{item.id} - {item.title}</li>
            </ul>)}
        </div>
    )
}

export default Todo