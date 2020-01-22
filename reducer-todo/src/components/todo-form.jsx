import React, { useState } from 'react';

const TodoForm = props => {
    
    const [state, setState] = useState('')

    const handleChanges = e => {
        setState(e.target.value);
    };

    const addTodo = e => {
        e.preventDefault();
        props.dispatch({type: 'ADD_TODO', payload: state})
        setState('')
    }

    const removeTodo = e => {
        e.preventDefault();
        props.dispatch({type: 'REMOVE_TODO', payload: state})
    }
    
        return (
            <form>
                <input
                    type='text'
                    name='todo'
                    value={state}
                    onChange={handleChanges}
                />
                <button 
                onClick={addTodo}
                >Add Task</button>
                <button onClick={removeTodo}>Remove Completed</button>
            </form>
        )
}

export default TodoForm;



// class TodoForm extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             todoText: ''
//         }
//     }

//     handleChanges = e => {
//         this.setState({todoText: e.target.value});
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.dispatch({type: 'ADD_TODO', payload: this.state.todoText})
//         this.setState({todoText: ''})
//     }

//     render() {
//         return (
//             <form>
//                 <input
//                     type='text'
//                     name='todo'
//                     value={this.state.todoText}
//                     onChange={this.handleChanges}
//                 />
//                 <button 
//                 onClick={this.handleSubmit}
//                 >Add Task</button>
//             </form>
//         )
//     }
// }

// export default TodoForm;