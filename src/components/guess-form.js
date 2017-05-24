import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form>
            <label htmlFor="userGuess">Enter your Guess</label>
            <input type="number" min="1" max="100" maxLength="3" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder={Math.round(Math.random() * 100)} required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};
