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

    render() {
        return (
            <form>
                <input
                    type='text'
                    name='todo'
                    value={this.state.todoText}
                    onChange={this.handleChanges}
                />
                <button>Add Task</button>
            </form>
        )
    }
}

export default TodoForm;