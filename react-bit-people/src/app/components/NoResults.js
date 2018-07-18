import React, { Fragment } from 'react';

export const NoResults = () => {

    return (
        <Fragment>
            <div className="container no-results">
                <img src="https://i.pinimg.com/474x/69/69/c7/6969c745cf8fc06715f28011be9d1f0f--sad-faces-smiley-faces.jpg" alt="no users" />
                <p>
                    Sorry, we couldn't find any users matching your search.
                </p>
            </div>
        </Fragment>
    );
};

