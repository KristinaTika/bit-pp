import React, { Fragment } from "react";
import {Link} from "react-router-dom";

export const MorePosts = (props) => {


    return(
        <Fragment>
            <li key={props.post.id}><Link to={"/posts/" + props.post.id}>{(props.post.title)}</Link></li>
        </Fragment>
    )
}