import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const AboutHeader = () => {


    return (
        <Fragment>
            <header>
                <nav>
                    <div className="container">
                        <div className="row">
                            <span className="col-s1 offset-5 about-react-people">
                                <Link to="/" className="link-to">React People</Link></span>
                        </div>
                    </div>
                </nav>
            </header>
        </Fragment>
    );
};

