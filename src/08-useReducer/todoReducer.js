export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] add Todo":
      return [...initialState, action.payload];

    case '[TODO] remove Todo':
      return initialState.filter(todo => todo.id !== action.payload);
    
    default:
      return initialState;
  }
};
