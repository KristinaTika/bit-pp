import * as data from "./data/data.js";
import * as ui from "./ui.js";


const loadPosts = () => {

    data.getPosts()
        .then((postList) => {
            ui.renderPosts(postList);
        });
}

const authorsListPage = () => {
    data.getAuthors()
        .then((authorsList) => {
            ui.renderAuthors(authorsList);
        });
};

// const form = document.querySelector("#form-new-post");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
// })

const singlePostHandler = (event) => {
    event.preventDefault();
    const postId = event.target.getAttribute("data-id");

    data.getSinglePost(postId, (singlePost) => {
        const authorId = singlePost.userId;

        data.getSingleAuthor(authorId, (singleAuthor) => {
            data.getMorePostsFromAuthor(authorId, singlePost, (morePosts) => {
                ui.renderSinglePost(singlePost, singleAuthor)
                ui.renderMorePostsFromASingleAuthor(morePosts, singlePost)
            })
        })
    });
}

const singleAuthorPage = (event) => {
    event.preventDefault();
    const authorId = event.target.getAttribute("data-id")

    data.getSingleAuthor(authorId, (singleAuthor) => {
        ui.renderSingleAuthor(singleAuthor);
    })
}


const body = document.querySelector("body");
// body.addEventListener("click", "#all-authors", singlePostHandler);


export const init = () => {

    loadPosts();
    
   

}