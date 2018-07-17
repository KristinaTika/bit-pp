import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { list } from 'postcss';

export const Header = (props) => {




    return (
        <Fragment>
            <header>
                <nav>
                    <div className="container">
                        <div className="row">
                            <span className="col-s6">React People</span>
                            <ul className="col-s6 ">
                                <li className="col-s3">
                                    <Link to="/home" className="link ">Home</Link>
                                </li>
                                <li className="nav-item col-s3">
                                    <Link to="/about" className="link">About</Link>
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