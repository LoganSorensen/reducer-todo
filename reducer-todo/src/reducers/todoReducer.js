export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ]
        case 'TOGGLE_TODO':
            return (
                console.log(state, 'at reducer line 14'),
                state.map(todo => {
                    console.log(todo, 'at reducer line 16')
                    if(todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    } else {
                        return todo;
                    }
                })
            )
        case 'REMOVE_TODO':
            return (
                state.filter(todo => !todo.completed)
            )
        default: return state;
    }
}

export const todo = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]