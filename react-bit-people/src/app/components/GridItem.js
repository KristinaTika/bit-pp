import React, { Fragment } from 'react';

export const GridItem = (props) => {


    return (
        <Fragment>   
            <div className="card grid-card col-12 col-md-6 col-lg-4">
                <img className="card-img-top" src={props.user.picture} alt={props.user.name} />
                <div className="card-body">
                    <h5 className="card-title"><i className="fas fa-user"></i>  {props.user.name}</h5>
                    <p className="card-text"><i className="fas fa-envelope"></i> {props.user.email}</p>
                    <p><i className="fas fa-birthday-cake"></i> {props.user.dob}</p>
                </div>
            </div>
        </Fragment>
    );
};

