import React, { Fragment } from 'react';


export const Footer = () => {



    return (
        <Fragment>
            <footer>
                <div className="container">
                    <div className="row footer">
                        {new Date().getFullYear()} &#169; copyright Kristina Butkovic
                </div>
                </div>
            </footer>
        </Fragment>
    );
};

