export const renderPosts = (posts) => {

    const postList = document.querySelector(".post-list");

    posts.forEach((post) => {
        let postLi = document.createElement("li");
        postLi.innerHTML = `
        <li id="post-li">
           
                <h3 data-id="${post.id}" class="proradi" >${post.title}</h3>
            
            <p>${post.body}</p>
            <hr>
         </li>`;
        postList.appendChild(postLi);
    });
}

export const renderSinglePost = (post) => {

    const singlePost = document.querySelector(".single-post");
    let singlePostLi = document.createElement("li");
    singlePostLi.innerHTML = `
    <h1>${post.title}</h1>
    <a href="single-author.html" id="author-name">${post.userId}</a>
    <p>${post.body}</p>
    <hr>
    `;
    singlePost.appendChild(singlePostLi);
}

export const renderAuthors = (authors) => {

    const authorTitle = document.querySelector(".authors-title");
    authorTitle.textContent = `Authors (${authors.length})`;

    const authorList = document.querySelector(".authors-list");

    authors.forEach((author) => {
        let authorLi = document.createElement("li");
        authorLi.innerHTML = `
        <li>
            <a href="single-author.html" id="author-title" data-id="${author.id}">
                <h3>${author.name}</h3>
            </a>
            <hr>
        </li>`;
        authorList.appendChild(authorLi);
    });
}

export const renderSingleAuthor = (author) => {

    const singleAuthor = document.querySelector("#single-author");
    const authorLi = document.createElement("li");
    authorLi.innerHTML = `
    <img src="http://www.iglax.org/wp-content/uploads/2014/12/placeholder-Copy-2-1.png" class="col-4">
    <div class="row">
        <h2 class="col-8">${author.name}</h2>
        <div class="col-8">username: ${author.username}</div>
        <div class="col-8">email: ${author.email}</div>
        <div class="col-8">phone: ${author.phone}</div>
    </div>
     <div class="col-12 line"></div>
    <div class="row">
        <h2 class="col-12">Address</h2>
        <div class="col-12">Street: ${author.address.street}</div>
        <div class="col-12">City: ${author.address.city}</div>
        <div class="col-12">Zipcode: ${author.address.zipcode}</div>
    </div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.744977118772!2d20.455167015956487!3d44.806385679098696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa9c08b61e5%3A0x3ee3e8a176a39372!2sNemanjina+4%2C+Beograd!5e0!3m2!1sen!2srs!4v1530877048117" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
    <div class="col-12 line"></div>
    <div class="row">
        <h2 class="col-12">Company</h2>
        <div class="col-12">Name: ${author.company.companyName}</div>
        <div class="col-12">Slogan: ${author.company.slogan}</div>
    </div>`;
    singleAuthor.appendChild(authorLi);
}