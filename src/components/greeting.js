import { useSelector } from 'react-redux';
import React from 'react';

function ShowGreeting() {
  const greetings = useSelector((state) => state.Greeting);

  return (
    <div>
      {greetings.map((greeting) => <h1 key={greetings.indexOf(greeting)}>{greeting.greet}</h1>)}
    </div>
  );
}
export default ShowGreeting;
