export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                // todo: [...state, action.payload]
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
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