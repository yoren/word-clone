import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Form from '../Form';
import GuessResults from '../GuessResults';
import Message from "../Message";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [ guess, setGuess ] = React.useState( "" );
  const [ guessResults, setGuessResults ] = React.useState( [] );
  const [ resultType, setResultType ] = React.useState( null );

  // React.useEffect(() => {
  //   if ( guess === answer ) {
  //     setResultType( 'win' );
  //   } else if ( guessResults.length >= NUM_OF_GUESSES_ALLOWED ) {
  //     setResultType( 'lose' );
  //   }
  // }, [guess, guessResults]);

  return (
    <>
      <Message resultType={resultType} answer={answer} guessResults={guessResults}></Message>
      <GuessResults guessResults={guessResults} answer={answer} />
      <Form setGuess={setGuess} guessResults={guessResults} setGuessResults={setGuessResults} disabled={ resultType } setResultType={setResultType} answer={answer} />
    </>
  );
}

export default Game;
