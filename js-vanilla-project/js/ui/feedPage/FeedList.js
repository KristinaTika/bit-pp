const root = document.querySelector(".root");

const postList = document.createElement("ul");

const createVideoPost = (post) => {

    const postLi = document.createElement("li");
    postLi.classList.add("video-post");
    postLi.innerHTML = `
        <div class="container" data-id=${post.id}>
            <div class="row" user-id=${post.userId}>
                <div>
                    <iframe width='100%' height='300' src=${post.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div>
            </div>
            <div>
            <span>${post.type} post </span>${post.commentsNum} comments
            </div>
        </div>
        <hr/>
     `;
    
    postList.appendChild(postLi);
}

const createTextPost = (post) => {

    const postLi = document.createElement("li");
    postLi.classList.add("text-post");
    postLi.innerHTML = `
    <div class="container" data-id=${post.id}>
        <div class="" user-id=${post.userId}>
            ${post.text}
        </div>
        <div>
            <span>${post.type} post </span>${post.commentsNum} comments
        </div>
    </div>
    <hr/>
    `;
    postList.appendChild(postLi);
}

const createImagePost = (post) => {

    const postLi = document.createElement("li");
    postLi.classList.add("image-post");
    postLi.innerHTML = `
    <div class="container" data-id=${post.id}>
        <div class="" user-id=${post.userId}>
            <img src=${post.imageUrl} alt=${post.type} class="img" />
        </div>
        <div>
        <span>${post.type} post </span>${post.commentsNum} comments
        </div>
    </div>
    <hr/>
    `;
    postList.appendChild(postLi);
}

export const createFeedList = (posts) => {

    root.appendChild(postList);

    posts.forEach((post) => {
        switch (post.type) {
            case "text":
                return createTextPost(post);
            case "video":
                return createVideoPost(post);
            case "image":
                return createImagePost(post)
            default:
                console.log("no posts to show");
        }
    })
}