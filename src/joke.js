// Joke.js

import React from "react";
 
import './Button.css'
import './joke.css';

const Joke = () => {
    const [Joke, setJoke] = React.useState("");

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    };
    const Button = (props) => {
        return <button onClick={props.callApi}>
            Click to generate a joke.
        </button>;
    }
    return (
        <div className="joke">
            <Button callApi={fetchApi} /> 
            <p>{Joke}</p>    
        </div>
    );
}

export default Joke;