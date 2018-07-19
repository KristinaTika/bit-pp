import React, { Fragment } from 'react';

export const NoResults = () => {

    return (
        <Fragment>
            <div className="container no-results">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXNgT547vujQikg1Dd0QwsjWwsQA47QcjXwUPLvzONJYOip7Ru" alt="no users" />
                <br />
                <p className="sorry">
                    Sorry, we couldn't find any users matching your search.
                </p>
            </div>
        </Fragment>
    );
};

