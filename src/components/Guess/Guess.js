import React from "react";
import { range } from "../../utils";

function Guess({guessIndex, guess}) {
  return (
    <p className="guess" key={guessIndex}>
      {
        range( 0, 5 ).map((i) => {
          return <span className="cell" key={`${guessIndex}-${i}`}>{guess === undefined ? '' : guess[i]}</span>
        })
      }
    </p>
  );
}

export default Guess;
