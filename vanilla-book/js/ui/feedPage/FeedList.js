const root = document.querySelector(".root");
const postList = document.createElement("ul");
postList.setAttribute("class", "container main-post-list");

const createTextPost = (post) => {

    const postLi = document.createElement("li");
    postLi.setAttribute("class", "feed-post text-post");
    postLi.innerHTML = `
    <div class="container" post-id=${post.id}>    
        <div class="row" user-id=${post.userId}>
            <div class="post-content">
                ${post.text}
            </div>
        </div>
        <div>
            <span class="post-type"> 
                ${post.type} post 
            </span>
           <a href="#" class="post-event" post-id=${post.id} post-type=${post.type} user-id=${post.userId}> 
                ${post.commentsNum} comments 
            </a>
        </div>
    </div>
    `;
    postList.appendChild(postLi);
}

const createVideoPost = (post) => {

    const postLi = document.createElement("li");
    postLi.setAttribute("class", "feed-post video-post");
    postLi.innerHTML = `
        <div class="container" post-id=${post.id}>
            <div class="row" user-id=${post.userId}>
                <div class="video-content">
                    <iframe width='100%' height='300' src=${post.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
            </div>
            <div class="col-12">
                <span class="post-type">
                    ${post.type} post 
                </span>
                <a href="#" class="post-event" post-id=${post.id} post-type=${post.type} user-id=${post.userId}> 
                    ${post.commentsNum} comments
                </a>
            </div>
        </div>
     `;
    postList.appendChild(postLi);
}

const createImagePost = (post) => {

    const postLi = document.createElement("li");
    postLi.setAttribute("class", "feed-post image-post");
    postLi.innerHTML = `
    <div class="container feed-image-post" post-id=${post.id}>
        <div class="post-content" user-id=${post.userId}>
            <img src=${post.imageUrl} alt=${post.type} class="feed-img" />
        </div>
        <div class="post-event">
            <span class="post-type">
                ${post.type} post 
            </span>
            <a href="#" class="post-event" post-id=${post.id} post-type=${post.type} user-id=${post.userId}> 
                ${post.commentsNum} comments 
            </a>
        </div>
    </div>
    `;
    postList.appendChild(postLi);
}

const createFilterMenu = () => {

    const div = document.createElement("div");
    div.setAttribute("id", "filter-container");
    root.insertBefore(div, root.firstChild);

    const filterButton = document.createElement("select");
    filterButton.setAttribute("class", "filter-posts");
    filterButton.innerHTML = `
        <option value="-">Filter Posts</option>
        <option value="all" id="all-posts">All Posts</option>
        <option value="image" id="image-posts">Image Posts</option>
        <option value="text" id="text-posts">Text Posts</option>
        <option value="video" id="video-posts">Video Posts</option>
    `;
    div.appendChild(filterButton);
    filterButton.addEventListener("change", filterPostsHandler);
}

const noFeed = () => {

    const noFeed = document.createElement("div");
    noFeed.setAttribute("class", "no-feed");
    noFeed.textContent = "No posts to show.";
    root.appendChild(noFeed);
}

const loadingContent = () => {

    const noFeed = document.createElement("div");
    noFeed.setAttribute("class", "loading");
    noFeed.textContent = "Loading...";
    root.appendChild(noFeed);
}

const openTypesHandler = (event) => {

    const image = document.querySelector(".new-image-post");
    image.setAttribute("class", "show");
    const text = document.querySelector(".new-text-post");
    text.setAttribute("class", "show");
    const video = document.querySelector(".new-video-post");
    video.setAttribute("class", "show");

    createModal();
}

const createModal = (event) => {

    const modal = document.querySelector('#myModal');
    const btns = document.querySelectorAll(".myBtn");
    const span = document.getElementsByClassName("close")[0];
    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            modal.style.display = "block";
        });
    });

    span.addEventListener("click", () => {
        modal.style.display = "none";
    });

    initNewPostHandler();
}

const createNewPostButton = () => {

    const createButton = document.createElement("div");
    createButton.setAttribute("id", "create-post-button");

    createButton.innerHTML = `
        <img src="https://png.icons8.com/ios/2x/plus.png" alt="create new post" class="img-post-button" />
    `;
    root.prepend(createButton);

    const imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "hide new-image-post");
    imgDiv.innerHTML = `
    <button class="myBtn create-image">Image</button>
     `;

    createButton.prepend(imgDiv);

    const videoDiv = document.createElement("div");
    videoDiv.setAttribute("class", "hide new-video-post");
    videoDiv.innerHTML = `
    <button class="myBtn create-video">Video</button>
     `;

    createButton.prepend(videoDiv);

    const textDiv = document.createElement("div");
    textDiv.setAttribute("class", "hide new-text-post");
    textDiv.innerHTML = `
    <button class="myBtn create-text">Text</button>
    <div id="myModal" class="modal">
    
    <div class="modal-content">
    <span class="close">&times;</span>
                <div class="modal-header">
                <h2>New Post</h2>
            </div>
            <div class="modal-body">
               <input type="text" placeholder="What's on your mind?" id="post-value" />  
            </div>
             <div class="modal-footer">
               <input type="submit" value="Post" id="create-new-post" />
            </div>
    </div>
     `;

    createButton.prepend(textDiv);
}

export const newPostHandler = (event) => {

    event.preventDefault();

    const inputValue = document.querySelector("#post-value");
    const value = inputValue.value;
    const dataToPost = validatePost(value)

    return dataToPost;
}



const validatePost = (value) => {

    const user = JSON.parse(localStorage.getItem("profile"));
    let dataToPost = {};

    if (value.includes("https://www.youtube.com/")) {
        return dataToPost = {
            "videoUrl": value,
            id: user.id,
            dateCreated: "123",
            userDisplayName: user.name,
            type: "video",
            commentsNum: user.commentsCount
        }

    } else if (value.includes("http://www.") && value.includes(".jpeg") || value.includes(".jpg") || value.includes(".png") || value.includes(".svg") || value.includes(".gif")) {
        return dataToPost = {
            "imageUrl": value,
            id: user.id,
            dateCreated: "123",
            userDisplayName: user.name,
            type: "image",
            commentsNum: user.commentsCount
        }
    } else {
        return dataToPost = {
            "text": value,
            id: user.id,
            dateCreated: "123",
            userDisplayName: user.name,
            type: "text",
            commentsNum: user.commentsCount
        }
    }
}

export const initNewPostHandler = () => {

    const postButton = document.querySelector("#create-new-post");
    postButton.addEventListener("click", newPostHandler)
}

export const createFeedList = (posts) => {

    root.innerHTML = "";
    root.appendChild(postList);

    createNewPostButton();

    if (posts.length === 0) {
        return loadingContent();
    }

    posts.forEach((post) => {

        switch (post.type) {
            case "text":
                return createTextPost(post);
            case "image":
                return createImagePost(post);
            case "video":
                return createVideoPost(post);
            default:
                return noFeed();
        }
    });

    createFilterMenu();

    const createButton = document.querySelector("#create-post-button");
    createButton.addEventListener("mouseover", openTypesHandler);
}

export const filterTextPost = () => {

    createFilterMenu()

    const posts = JSON.parse(localStorage.getItem("posts"));
    let filteredPosts = [];

    posts.filter((post) => {
        post.type == event.target.value ? filteredPosts.push(post) : "";
    })
    filteredPosts.forEach((post) => {
        const postLi = document.createElement("li");
        postLi.setAttribute("class", "container feed-post text-post");
        postLi.innerHTML = `
            <div class="container" post-id=${post.id}>    
                <div class="row" user-id=${post.userId}>
                    <div class="post-content">
                        ${post.text}
                    </div>
                </div>
                <div>
                    <span class="post-type"> 
                        ${post.type} post 
                    </span>
                   <a href="#" class="post-event" post-id=${post.id} post-type=${post.type} user-id=${post.userId}> 
                        ${post.commentsNum} comments 
                    </a>
                </div>
            </div>
            `;
        root.appendChild(postLi);
    })
}

export const filterVideoPost = () => {

    createFilterMenu();

    const posts = JSON.parse(localStorage.getItem("posts"));
    let filteredPosts = [];

    posts.filter((post) => {
        post.type == event.target.value ? filteredPosts.push(post) : "";
    })
    filteredPosts.forEach((post) => {

        const postLi = document.createElement("li");
        postLi.setAttribute("class", "container feed-post video-post");
        postLi.innerHTML = `
        <div class="container" post-id=${post.id}>
            <div class="row" user-id=${post.userId}>
                <div class="video-content">
                    <iframe width='100%' height='300' src=${post.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
            </div>
            <div class="col-12">
                <span class="post-type">
                    ${post.type} post 
                </span>
                <a href="#" class="post-event" post-id=${post.id} post-type=${post.type} user-id=${post.userId}> 
                    ${post.commentsNum} comments
                </a>
            </div>
        </div>
    `;
        root.appendChild(postLi);
    });
}

export const filterImagePost = () => {

    createFilterMenu()

    const posts = JSON.parse(localStorage.getItem("posts"));
    let filteredPosts = [];

    posts.filter((post) => {
        post.type == event.target.value ? filteredPosts.push(post) : "";
    })
    filteredPosts.forEach((post) => {

        const postLi = document.createElement("li");
        postLi.setAttribute("class", "container feed-post image-post");
        postLi.innerHTML = `
    <div class="container feed-image-post" post-id=${post.id}>
        <div class="post-content" user-id=${post.userId}>
            <img src=${post.imageUrl} alt=${post.type} class="feed-img" />
        </div>
        <div class="post-event">
            <span class="post-type">
                ${post.type} post 
            </span>
            <a href="#" class="post-event" post-id=${post.id} post-type=${post.type} user-id=${post.userId}> 
                ${post.commentsNum} comments 
            </a>
        </div>
    </div>
    `;
        root.appendChild(postLi);
    });
}

export const filterPostsHandler = (event) => {

    const posts = JSON.parse(localStorage.getItem("posts"));
    root.innerHTML = "";

    if (event.target.value === "text") {
        return filterTextPost();
    }
    else if (event.target.value === "video") {
        return filterVideoPost();
    }
    else if (event.target.value === "image") {
        return filterImagePost();
    }

    else if (event.target.value === "all") {
        return createFeedList(posts);
    }
}

