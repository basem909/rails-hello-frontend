import showGreeting from './action-types';
import greetingsShow from './api';

const Greetings = () => async (dispatch) => {
  const greetings = await greetingsShow();
  console.log('actionload', greetings);
  dispatch({ type: showGreeting, payload: greetings });
};

export default Greetings;
