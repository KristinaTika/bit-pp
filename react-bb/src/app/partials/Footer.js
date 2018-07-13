import React, { Fragment } from "react";

export const Footer = () => {




    return (

        <Fragment>
            <footer className="page-footer">
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright Kristina Butkovic
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}