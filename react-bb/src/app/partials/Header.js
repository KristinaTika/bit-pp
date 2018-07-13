import React, { Fragment } from "react";

export const Header = () => {



    return (
        <Fragment>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Bit Blog</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>Sass</li>
                        <li>Components</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}