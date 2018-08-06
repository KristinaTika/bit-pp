import { createHeader } from "./ui/partials/Header.js";
import * as data from "./data/data.js";
import * as feedPage from "./ui/feedPage/FeedList.js";
import { createSinglePost, handlerComments } from "./ui/feedPage/SinglePost.js";
import { createUsersList, goToUserProfile } from "./ui/peoplePage/UsersList.js";
import { createFooter } from "./ui/partials/Footer.js";
import { createMyProfilePage, updProfileHandler } from "./ui/profilePage/MyProfile.js";
import * as log from "./ui/loginPage/loginPage.js";

const myUsers = [];
const myPosts = [];

const filterMyPosts = (posts, postId) => {
    let filteredPost = posts.filter((post) => {
        return post.id == postId;
    });

    return filteredPost[0];
}

const initLoginPage = () => {

    log.createLoginHeader();
    log.loginPage();
    setTimeout(initLoginForm, 1000);
}

const initLoginForm = () => {

    const enterLoginButton = document.querySelector("#login-password");
    enterLoginButton.addEventListener("keyup", enterLoginHandler);

    const loginButton = document.querySelector(".login-button");
    loginButton.addEventListener("click", loginHandler);


    const registerButton = document.querySelector(".register-button");
    registerButton.addEventListener("click", registerHandler);

    const enterRegisterButton = document.querySelector("#register-password");
    enterRegisterButton.addEventListener("keyup", enterRegisterHandler);
}

const enterRegisterHandler = (event) => {

    if (event.keyCode === 13) {
        registerHandler(event);
    }
}

const registerHandler = (event) => {

    const registerData = log.registerHandler(event);

    data.registerUser(registerData)
        .then((response) => {
            return response.json();
        })
        .then(response => {
            if (response.error) {
                alert(response.error.message);
            } else {
                const header = document.querySelector("#welcome-header");
                if (header === null) {
                    log.createLoginHeader();
                    initAfterRegister();
                } else {
                    initAfterRegister();
                }
            }
        })
}

const initAfterRegister = () => {
    log.loginPage();
    setTimeout(initLoginForm, 1000);
}

const enterLoginHandler = (event) => {

    if (event.keyCode === 13) {
        loginHandler(event);
    }
}

const loginHandler = (event) => {

    const loginData = log.loginHandler(event);

    data.loginUser(loginData)
        .then((response) => {
            return response.json()
            log.createLoginHeader();
        })
        .then(response => {
            if (response.error) {
                alert(response.error.message);
            }
            else if (!response.error) {
                localStorage.setItem('sessionId', response.sessionId);
                initPage();
            }
        })
}

const initPage = () => {

    data.getProfile()
        .then((profile) => {
            localStorage.setItem("user-profile", JSON.stringify(profile));
        })

    createHeader();
    createFeedPage();
    initUsersPage();
    initFeedPage();
    setTimeout(initSinglePostPage, 1000);
    initProfilePage();
}

const createFeedPage = () => {

    data.getPosts()
        .then((posts) => {
            feedPage.createFeedList(posts);
            addLikeListener();
            posts.forEach((post) => {
                myPosts.push(post);
            })
            localStorage.setItem("posts", JSON.stringify(posts));
            initDeleteOption();
        });
    setTimeout(initSinglePostPage, 1000);
    setTimeout(initFilterMenu, 1000);
    setTimeout(initHandlerNewPost, 1000);

    const logouts = document.querySelectorAll(".logout");
    logouts.forEach((logout) => {
        logout.addEventListener("click", logoutHandler);
    })
}

const likesHandler = (event) => {
    console.log(event);

    const clickedPost = event.target.getAttribute("post-id");
    const parentId = event.target.parentElement.getAttribute("post-id");

    let result = filterMyPosts(myPosts, clickedPost);
    clickedPost == parentId ? data.AddLikes(result) : "";

    infiniteAddLikes();
}

const infiniteAddLikes = () => {
    feedPage.createFeedList(myPosts);
    // createFeedPage();
    addLikeListener();
    itSinglePostPage();
    initHandlerNewPost();
}

const addLikeListener = () => {
    const likes = document.querySelectorAll(".like-button");
    likes.forEach((like) => {
        like.addEventListener("click", likesHandler);
    })
}

const logoutHandler = (event) => {

    const header = document.querySelector(".header");
    header.style.display = "none";

    const search = document.querySelector(".search-users");
    if (search) {
        search.style.display = "none";
    }

    initLoginPage();
}

const initHandlerNewPost = () => {

    const postButton = document.querySelector("#create-new-post");
    postButton.addEventListener("click", handlerNewPost);
}

const handlerNewPost = (event) => {

    const dataToPost = feedPage.newPostHandler(event);

    data.createNewPost(dataToPost.type, dataToPost)
        .then((response) => {
            bla();
        });
}

const bla = () => {
    createFeedPage();
    initUsersPage();
    initFeedPage();
    setTimeout(initSinglePostPage, 1000);
    initProfilePage();
}

const deleteHandler = (event) => {

    const postId = feedPage.deleteHandler(event);

    data.deletePost(postId)
        .then((response) => {
            bla();
        });
}

const initDeleteOption = () => {

    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", deleteHandler);
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
    initDeleteOption();
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

    setTimeout(postNewSingleComment, 1000);
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
                        postNewSingleComment();
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
            localStorage.setItem("user-id", profile.id);
            localStorage.setItem("user-profile", JSON.stringify(profile));
            createMyProfilePage(profile);
            setTimeout(initProfileModal, 1000)
        })
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

    initLoginPage();
    createFooter();
}