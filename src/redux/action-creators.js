import showGreeting from './action-types';
import greetingsShow from './api';

const Greetings = () => async (dispatch) => {
  const greetings = await greetingsShow();
  dispatch({ type: showGreeting, payload: greetings });
};

export default Greetings;
