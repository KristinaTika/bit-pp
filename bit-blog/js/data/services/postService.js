import { postsEndpoint } from "../constants/constants.js";
import { get, post } from "./apiService.js";



class PostService {

    fetchPosts() {
        return fetch(postsEndpoint)
            .then(postList => {
                return postList.json();
            })
    }

    fetchSinglePost(id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((post) => {
            return post.json();
        })
    }
}

export const postService = new PostService;

