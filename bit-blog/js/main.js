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

    event.preventDefault();
    if (event.target.className == "proradi") {
        const postId = event.target.getAttribute("data-id");
        location.href = "single-post.html";
        // data.getSinglePost(postId)
        //     .then((response) => {
        //         ui.renderSinglePost(response);
        //     })
        // }
        return postId;
}

const singlePostLink = document.querySelector("body");
singlePostLink.addEventListener("click", singlePostHandler);

 const initSinglePost = (event) => {

    let postId = singlePostHandler();
    data.getSinglePost(postId)
        .then((response) => {
            ui.renderSinglePost(response);
        })
}



 const initSinglePostPage = () => {
     // location.href = "single-post.html";
     const postId = singlePostHandler();
     data.getSinglePost(postId)
     .then((response) => {
         ui.renderSinglePost(response);
     })
 }
 return postId;
}