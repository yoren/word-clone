import React from "react";
import Guess from '../Guess'
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({guessResults}) {
  const guessCount = guessResults.length;
  let blankGuesses = 0;

  if ( guessCount < NUM_OF_GUESSES_ALLOWED ) {
    blankGuesses = NUM_OF_GUESSES_ALLOWED - guessCount;
  }

  return (
    <div className="guess-results">
      {
        guessResults.map((guess, index) => {
          return (
            <Guess key={index} guessInex={index} guess={guess} />
          )
        })
      }
      {
        blankGuesses !== 0 ? (
          range( 0, blankGuesses ).map((count) => {
            const i = guessResults.length -1 + count;
            return (
              <Guess key={i} guessInex={i} />
            )
          })
        ) : null
      }
    </div>
  );
}

export default GuessResults;
