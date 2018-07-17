import React, { Fragment } from 'react';

export const ListItem = (props) => {


    return (
        <Fragment>
            <div className="container list-item">
                <div className="row">
                    <div className="row">
                        <div className="col-s2">
                            <img src={props.user.picture} alt={props.user.name} className="list-image" />
                        </div>
                    </div>
                    <div className="col-s6 offset-3 list-info">
                        <p><i className="fas fa-user"></i> <b>{props.user.name}</b></p>
                        <p><i className="fas fa-envelope"></i> <b>{props.user.email}</b></p>
                        <p><i className="fas fa-birthday-cake"></i> <b>{props.user.dob}</b></p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

