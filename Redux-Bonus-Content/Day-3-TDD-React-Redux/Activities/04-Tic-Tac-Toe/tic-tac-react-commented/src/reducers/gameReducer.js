import { X, O } from '../symbols/symbols';
import { resultForSymbol } from '../logic/logic';
import * as _ from 'lodash';

//Initial state is an empty board, other game logic is also in the blank state. There is more than one way to do this, so your solution may be different.

//exporting initial state so we can import it in our root-level index.js. Notice we're not using 'export default', because that would only allow us to export one value our of this file, and we're exporting multiple values. Hence direct named exports.
export const initialState = {
  board: {
    0: ['', '', ''],
    1: ['', '', ''],
    2: ['', '', '']
  },
  won: undefined,
  wonLine: undefined,
  draw: false,
  turn: O
};

//Same as earlier concerning the export. Here is our reducer responsible for translating actions to state. Following standard convention, we're using a switch statement with cases and a default. 
export const gameReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SYMBOL':
      //We're destructuring our object to make variables out of our action object given to us. 
      const {symbol, row, position} = action;
      //Using '_' aka lodash to deeply clone an object. There are other ways to accomplish this as well. See https://stackoverflow.com/questions/39736397/is-this-a-good-way-to-clone-an-object-in-es6 
      const newState = _.cloneDeep(state);
      //This double bracket may look wierd, but look at what initialState.board is. It'll make sense.
      newState.board[row][position] = symbol;

      const xResult = resultForSymbol(X, newState.board);
      const oResult = resultForSymbol(O, newState.board);

      if (xResult.won) {
        newState.won = X;
        newState.wonLine = xResult.line;
      }

      if (oResult.won) {
        newState.won = O;
        newState.wonLine = oResult.line;
      }

      if (!newState.won) {
        newState.turn = newState.turn === O ? X : O;
      }

      //We're making this array of all row arrays, filtering it to see if symbol is not empty string, and then expecting the array of all non-empty strings to be of 9 length total.
      const boardIsFull = [
        ...newState.board[0],
        ...newState.board[1],
        ...newState.board[2]
      ]
        .filter(symbol => symbol !== '')
        .length === 9;

      if (boardIsFull && !newState.won) {
        newState.draw = true;
      }

      return newState;
    case 'START_AGAIN':
      return initialState;
    default:
      return state;
  }
};
