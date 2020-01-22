import React from 'react';

const Todo = props => {
    const toggleTodo = () => {
        props.dispatch({type: 'TOGGLE_TODO', payload: props.todo.key})
    }

    return (   
        <div onClick={toggleTodo}>{props.todo.item}</div>
    )
}

export default Todo;