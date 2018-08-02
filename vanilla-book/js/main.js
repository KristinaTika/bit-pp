import { createHeader } from "./ui/partials/Header.js";
import * as data from "./data/data.js";
import * as feedPage from "./ui/feedPage/FeedList.js";
import { createSinglePost, handlerComments } from "./ui/feedPage/SinglePost.js";
import { createUsersList, goToUserProfile } from "./ui/peoplePage/UsersList.js";
import { createFooter } from "./ui/partials/Footer.js";
import { createMyProfilePage, updProfileHandler } from "./ui/profilePage/MyProfile.js";

const myUsers = [];

const createFeedPage = (event) => {

    data.getPosts()
        .then((posts) => {
            localStorage.setItem("posts", JSON.stringify(posts));
            feedPage.createFeedList(posts);
        });
    setTimeout(initFilterMenu, 2000)
    setTimeout(initHandlerNewPost, 1000)
}

const initHandlerNewPost = () => {
    
    const postButton = document.querySelector("#create-new-post");
    postButton.addEventListener("click", handlerNewPost)
}

const handlerNewPost = (event) => {
   const dataToPost = feedPage.newPostHandler(event);

   data.createNewPost(dataToPost.type, dataToPost)
    .then((response) => {
        console.log(response); 
    })
   
}

const initFilterMenu = () => {

    const allPosts = document.querySelectorAll(".filter-posts");
    allPosts.forEach((post) => {
        post.addEventListener("change", filPostsHandler);
    })
}

const filPostsHandler = (event) => {

    feedPage.filterPostsHandler(event);
    initSinglePostPage();
}

const initFeedPage = (event) => {

    const feedPage = document.querySelectorAll(".feed-page");
    feedPage.forEach((feed) => {
        feed.addEventListener("click", feedPageHandler);
    });
}

const feedPageHandler = (event) => {
    const inputField = document.querySelector(".search-users");
    if (inputField) {
        inputField.setAttribute("class", "hide");
    }
    createFeedPage();
}

const displayUsersList = (users) => {

    createUsersList(users);
    const search = document.querySelector(".search-users");
    search.addEventListener("keyup", filterUsers);
    initGoToUserProfilePage();
}

const goToUserProfileHandler = (event) => {

    const inputField = document.querySelector(".search-users");
    if (inputField) {
        inputField.setAttribute("class", "hide");
    }

    event.preventDefault();
    const userId = event.target.getAttribute("user-id");

    data.getSingleUser(userId)
        .then((user) => {
            goToUserProfile(user);
        });
}

const initGoToUserProfilePage = () => {

    setTimeout(() => {
        const profiles = document.querySelectorAll(".user-name");
        profiles.forEach((profile) => {
            profile.addEventListener("click", goToUserProfileHandler);
        })
    }, 1000)
}

const filterUsers = (event) => {

    initGoToUserProfilePage();
    const myUsers = JSON.parse(localStorage.getItem("users"));

    let filterUsers = myUsers.filter((user) => {
        let userName = user.name.toLowerCase();
        return userName.includes(event.target.value);
    });

    createUsersList(filterUsers);
}

const createUserPage = (event) => {

    data.getUsers()
        .then((users) => {
            displayUsersList(users);
            users.forEach((user) => {
                myUsers.push(user);
                localStorage.setItem("users", JSON.stringify(users));
            });
        })
}

const initUsersPage = () => {

    const peoplePage = document.querySelectorAll(".people-page");
    peoplePage.forEach((user) => {
        user.addEventListener("click", createUserPage);
    });
}

const singlePostHandler = (event) => {

    event.preventDefault();

    const postId = event.target.getAttribute("post-id");
    const type = event.target.getAttribute("post-type");

    data.getSinglePost(type, postId)
        .then((post) => {
            localStorage.setItem("post", JSON.stringify(post));
            getCommentsHandler(post);
        });

    setTimeout(postNewSingleComment, 2000);
}

const getCommentsHandler = (post) => {

    data.getComments(post.id)
        .then((comments) => {
            if (comments) {
                createSinglePost(post);
            }
            localStorage.setItem("comments", JSON.stringify(comments));
            comments.forEach((comment) => {
                data.getSingleUser(comment.authorId)
                    .then((user) => {
                        localStorage.setItem("user", JSON.stringify(user));
                        createSinglePost(post);
                    });
            });
        });
}

const postCommentHandler = (event) => {

    const obj = handlerComments(event);

    data.postNewComment(obj.post)
        .then((response) => {
            newCommentHandler(obj.singlePost)
        });
}

const newCommentHandler = (postId) => {
    getCommentsHandler(postId);
}

const postNewSingleComment = () => {

    const inputValue = document.querySelector(".comment-button");
    inputValue.addEventListener("click", postCommentHandler);
}

const initSinglePostPage = (event) => {

    const feedPost = document.querySelectorAll(".post-event");
    feedPost.forEach((singlePost) => {
        singlePost.addEventListener("click", singlePostHandler);
    });
}

const profilePageHandler = (event) => {

    const inputField = document.querySelector(".search-users");
    if (inputField) {
        inputField.setAttribute("class", "hide");
    }

    data.getProfile()
        .then((profile) => {
            localStorage.setItem("profile", JSON.stringify(profile))
            createMyProfilePage(profile);
        });

    setTimeout(initProfileModal, 1000)
}

const initProfilePage = () => {
    const profilePage = document.querySelectorAll(".profile-page");
    profilePage.forEach((profile) => {
        profile.addEventListener("click", profilePageHandler);
    });
}

const updateProfileHandler = (event) => {
    const dataToUpdate = updProfileHandler(event);

    data.updateProfile(dataToUpdate)
        .then((response) => {
            profilePageHandler();
        })
}

const initProfileModal = () => {
    const update = document.querySelector("#update-profile");
    update.addEventListener("click", updateProfileHandler);
}

export const init = () => {

    createHeader();
    createFeedPage();
    createFooter();
    initUsersPage();
    initFeedPage();
    setTimeout(initSinglePostPage, 1000);
    initProfilePage();
}