import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Form({setGuess, setGuessResults, disabled, guessResults, answer, setResultType}) {
  const [ guessInput, setGuessInput ] = React.useState( "" );

  const onSubmitHandler = ( event ) => {
    event.preventDefault();

    console.info({ guessInput });

    setGuess( guessInput );
    setGuessResults( (currentResults) => { return [...currentResults, guessInput] } );

    if ( guessInput === answer ) {
      setResultType( 'win' );
    } else if ( guessResults.length + 1 >= NUM_OF_GUESSES_ALLOWED ) {
      setResultType( 'lose' );
    }

    setGuessInput('');
  };

  return <form className="guess-input-wrapper" onSubmit={ onSubmitHandler }>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" pattern="[A-Za-z]{5}" value={ guessInput } onChange={ ( e ) => { setGuessInput( e.target.value.toUpperCase() ); } } disabled={disabled} />
  </form>;
}

export default Form;
