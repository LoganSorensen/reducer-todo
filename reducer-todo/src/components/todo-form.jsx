import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoText: ''
        }
    }

    handleChanges = e => {
        this.setState({todoText: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.dispatch({type: 'ADD_TODO', payload: this.state.todoText})
        this.setState({todoText: ''})
    }

    render() {
        return (
            <form>
                <input
                    type='text'
                    name='todo'
                    value={this.state.todoText}
                    onChange={this.handleChanges}
                />
                <button 
                onClick={this.handleSubmit}
                >Add Task</button>
            </form>
        )
    }
}

export default TodoForm;