import { postService } from "./services/postService.js";

export const getPosts = () => {

    return postService.fetchPosts();
}