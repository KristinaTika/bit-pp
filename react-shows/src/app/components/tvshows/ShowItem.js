import React from 'react';
import { Link } from "react-router-dom";
import './ShowItem.css';

const ShowItem = (props) => {

    const {id, image, name} = props.show;

    return (
        <li className="container" key={id}>
            <div>
                <img src={image} alt={name} />
            </div>
            <p><Link to={"/shows/" + props.show.id} className="title">{name}</Link></p>
        </li>
    );
};

export default ShowItem;

