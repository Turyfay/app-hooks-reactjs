export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case 'add':
            return [...initialState, action.payload];   
        case 'remove':
            return initialState.filter(todo => todo.id !== action.payload);
        default:
            return initialState;
    }
};