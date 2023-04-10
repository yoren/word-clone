import React from "react";

function Message({resultType, answer, guessResults}) {
  if ( ! resultType ) return null;

  return (
    resultType === 'win' ? (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{guessResults.length} guesses</strong>.
        </p>
      </div>
    ) : (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
    )
  );
}

export default Message;
