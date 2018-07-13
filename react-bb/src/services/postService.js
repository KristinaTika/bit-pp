import { postsEndpoint } from "../shared/constants";
import { get } from "./APIService";
import { Post } from "../entities/Post";


class PostService {

    fetchPosts() {
        return get(postsEndpoint)
            .then((response) => {
                return response.map(post => {
                    const userId = post.userId;
                    const id = post.id;
                    const title = post.title;
                    const body = post.body;

                    const myPost = new Post(userId, id, title, body);
                    return myPost;
                })
            })
    }
}

export const postService = new PostService;