import React, { Component, Fragment } from "react";
import { postService } from "../../services/postService";
import { Post } from "../../entities/Post";


export class PostPage extends Component {
    constructor() {
        super()

        this.state = {
            posts: [],
        }
    }

    componentDidMount() {
        this.getPosts()
    }

    getPosts = () => {
        postService.fetchPosts()
            .then((response) => {
                console.log(response);
                
                this.setState({
                    posts: response
                })
            })
            // console.log(this.state.posts);
            
    }

    renderPosts = (posts) => {
        posts.map((post, i) => {
            return <Post post={post} key={i} />
        })
    }

    render() {

        return (
            <Fragment>
                <h1>POSTS </h1>
                <div>{this.renderPosts(this.state.posts)}</div>
            </Fragment>
        )
    }
}