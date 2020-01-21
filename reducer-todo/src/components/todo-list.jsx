import React from 'react';
import Todo from './todo';

const TodoList = props => {
    return(
        <div>
            {props.todo.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodoList;