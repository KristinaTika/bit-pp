import { postsEndpoint, singlePostEndpoint, postsFromASingleAuthorEndpoint } from '../constants/constants.js';
import { get, post } from './APIService.js';


class PostService {

    fetchPosts() {
        return get(postsEndpoint)
    }

    fetchSinglePost(id) {
        return get(`${singlePostEndpoint}${id}`)
    }

    fetchPostsFromASingleAuthor(userId, post, fn) {
        return get(`${postsFromASingleAuthorEndpoint}${userId}`)
    }

    createNewPost( data) {
        return post(postsEndpoint, data)
    }

}

export const postService = new PostService;