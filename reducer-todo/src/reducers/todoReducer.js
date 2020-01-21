export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                item: this.state.todoText,
                completed: false,
                id: Date.now()
            }
    }
}

export const todo = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]