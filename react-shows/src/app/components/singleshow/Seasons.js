import React, { Fragment } from 'react';
import '../../pages/SingleShow.css';

const Seasons = (props) => {
    
    let prem = props.premDate;
    let end = props.endDate;
    let episodes = props.numEpisodes;
    let season = props.season;

    return (
        <Fragment>
            <div>
                <h2> Season {season}:</h2>
                <ul>
                    <li>Premiere Date: {prem} </li>
                    <li>end Date: {end} </li>
                    <li>Number of episodes: {episodes}</li>
                </ul>
            </div>
        </Fragment>
    );
};

export default Seasons;