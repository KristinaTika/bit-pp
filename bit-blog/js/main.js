import * as data from "./data/data.js";
import * as ui from "./ui/ui.js";


export const initHomepage = () => {

    data.getPosts()
        .then((postList) => {
            ui.renderPosts(postList);
        });
}

export const initAuthorsPage = () => {

    data.getAuthors()
        .then((authors) => {
            ui.renderAuthors(authors);
        })
}

export const initSingleAuthorPage = () => {
    data.getSingleAuthor()
        .then((author) => {
            console.log(author)
            ui.renderSingleAuthor(author);
        });
}


const singlePostHandler = (event) => {

    // event.preventDefault();
    if (event.target.className == "proradi") {
        const postId = event.target.getAttribute("data-id");
        // location.href = "single-post.html";
        console.log(postId);
        data.getSinglePost(postId)
            .then((response) => {
                ui.renderSinglePost(response);
            })
        }
        return postId;
    
}

export const initSinglePost = () => {

    let postId = singlePostHandler();
    console.log(postId);
    data.getSinglePost(postId)
        .then((response) => {
            ui.renderSinglePost(response);
        })

}



export const initSinglePostPage = () => {

    const singlePostLink = document.querySelector("body");
    singlePostLink.addEventListener("click", singlePostHandler);
}