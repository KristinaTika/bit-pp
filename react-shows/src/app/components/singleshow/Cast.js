import React from 'react';

const Cast = (props) => {

    const actor = props.actor;
    const character = props.character;

    return (
        <li>
            <p>Character: <b> {character}</b></p>
            <p>Played by: <b> {actor}</b></p>
        </li>
    );
};

export default Cast;