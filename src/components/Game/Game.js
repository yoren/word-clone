import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [ guess, setGuess ] = React.useState( "" );

  React.useEffect(() => {
    if ( guess ) {
      console.info({ guess });
    }
  }, [guess]);

  return <Form guess={guess} setGuess={setGuess} />;
}

export default Game;
