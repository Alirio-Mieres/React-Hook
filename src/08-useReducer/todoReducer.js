export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] add Todo":
      return [...initialState, action.payload];
    default:
      return initialState;
  }
};
