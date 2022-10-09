import showGreeting from './action-types';

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case showGreeting:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default reducer;
