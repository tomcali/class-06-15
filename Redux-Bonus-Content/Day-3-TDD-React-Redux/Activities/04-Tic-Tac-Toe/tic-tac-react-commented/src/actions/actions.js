//remember, when creating an object where the keys and values are the same, you can shorthand it to a single word. symbol:symbol can just be symbol.
export const addSymbol = (row, position, symbol) => ({
  type: 'ADD_SYMBOL',
  symbol,
  row,
  position
});

export const startAgain = () => ({
  type: 'START_AGAIN'
});
