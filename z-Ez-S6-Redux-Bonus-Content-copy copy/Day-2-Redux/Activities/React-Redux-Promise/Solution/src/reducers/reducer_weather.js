import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
  if (action.error) {
    action.type = 'HANDLE_ERROR'; // change the type
  }
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
    case 'HANDLE_ERROR':
      console.log('ERROR OCCURRED IN PROMISE');
      return state;
    default:
      return state;
  }
};
