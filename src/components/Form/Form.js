import React from "react";

function Form({guess, setGuess, setGuessResults}) {
  const [ guessInput, setGuessInput ] = React.useState( "" );

  const onSubmitHandler = ( event ) => {
    event.preventDefault();

    console.info({ guessInput });

    setGuess( guessInput );
    setGuessResults( (currentResults) => { return [...currentResults, guessInput] } );
    setGuessInput('');
  };

  return <form className="guess-input-wrapper" onSubmit={ onSubmitHandler }>
    <label htmlFor="guess-input">Enter guess:</label>
    <input id="guess-input" type="text" pattern="[A-Za-z]{5}" value={ guessInput } onChange={ ( e ) => { setGuessInput( e.target.value.toUpperCase() ); } } />
  </form>;
}

export default Form;
