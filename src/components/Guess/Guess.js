import React from "react";
import { range } from "../../utils";
import {checkGuess} from "../../game-helpers"

function Guess({guessIndex, guess, answer}) {
  let results = [];
  if ( guess !== undefined ) {
    results = checkGuess( guess, answer );
  }

  return (
    <p className="guess" key={guessIndex}>
      {
        range( 0, 5 ).map((i) => {
          const status = ! results.length ? '' : results[i].status;

          return <span className={ `cell ${status}` } key={`${guessIndex}-${i}`}>{guess === undefined ? '' : guess[i]}</span>
        })
      }
    </p>
  );
}

export default Guess;
