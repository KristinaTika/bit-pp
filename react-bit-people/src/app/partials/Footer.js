import React, { Fragment } from 'react';
import { UpdateTime } from '../components/UpdateTime';


export const Footer = () => {








    return (
        <Fragment>
            <footer>
                <div className="container">
                    <div className="row footer">
                       <span className="col-s5"> {new Date().getFullYear()} &#169; copyright Kristina Butkovic </span>
                        <UpdateTime />
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};

