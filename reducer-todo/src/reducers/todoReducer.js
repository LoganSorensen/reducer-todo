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
            return [
                console.log(state),
                state.map(todo => {
                    console.log(todo)
                    if(action.payload === todo.key) {
                        return (
                            // ...todo,
                            // completed: !todo.completed
                            console.log("hello")
                        )
                    } else {
                        return todo;
                    }
                })
            ]
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