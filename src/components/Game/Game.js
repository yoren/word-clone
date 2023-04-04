import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form';
import GuessResults from '../GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [ guess, setGuess ] = React.useState( "" );
  const [ guessResults, setGuessResults ] = React.useState( [] );

  // React.useEffect(() => {
  //   if ( guess ) {
  //     // console.info({ guess });
  //
  //
  //   }
  // }, [guess]);

  return (
    <>
      <GuessResults guessResults={guessResults} />
      <Form guess={guess} setGuess={setGuess} setGuessResults={setGuessResults} disabled={ guessResults.length>=NUM_OF_GUESSES_ALLOWED } />
    </>
  );
}

export default Game;
