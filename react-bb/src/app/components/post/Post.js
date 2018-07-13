import React, { Fragment } from "react";

export const Post = (props) => {



    return (
        <Fragment>
            <div>
                <h1>{props.post.title}</h1>
                <p>{props.post.body}</p>
                <hr />
            </div>
        </Fragment>
    )
}