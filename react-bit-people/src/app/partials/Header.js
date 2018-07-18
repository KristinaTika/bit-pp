import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {




    return (
        <Fragment>
            <header>
                <nav>
                    <div className="container">
                        <div className="row">
                            <span className="col-s1 offset-5 react-people">React People</span>
                            <ul className="col-s6 ">
                                <li className="nav-item col-s3">
                                    About
                                </li>
                                <li className="col-s3">
                                    <i className="fas fa-sync" onClick={() => props.getUsers()}></i>
                                </li>
                                <li className="col-s3">
                                    {
                                        props.listView
                                            ? <i className="fas fa-th-list" onClick={() => props.layout(props.listView)}></i> 
                                            : <i className="fas fa-th" onClick={() => props.layout(props.listView)}></i>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </Fragment>
    )
}