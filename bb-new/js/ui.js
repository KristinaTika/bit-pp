const container = document.querySelector(".container");

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

//                           POSTS RELATED                                      //

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

export const renderPosts = (posts) => {


    const postTitle = document.createElement("h1");
    postTitle.textContent = "POSTS";
    container.appendChild(postTitle);

    const postsList = document.createElement("ul");
    postsList.setAttribute("class", "post-list");
    container.appendChild(postsList);

    const postList = document.querySelector(".post-list");

    posts.forEach((post) => {
        let postLi = document.createElement("li");
        postLi.innerHTML = `
        <li id="post-li">
            <a href="#" data-id="${post.id}" data-userId="${post.userId}">
                <h3 data-id="${post.id}" class="single-post" >${post.title}</h3>
            </a>
            <p>${post.body}</p>
            <hr class="border-line">
         </li>`;

        postList.appendChild(postLi);
    });
}

export const renderSinglePost = (post, author) => {


    container.textContent = ("");


    const singlePostDiv = document.createElement("div");
    singlePostDiv.innerHTML = `
    <h1>${post.title}</h1>
    <h4>Author: 
        <a href="#" data-id="${post.userId}" class="author-name" > ${author.name}
        </a> 
    </h4>
    <p>${post.body}</p>
    <hr class="border-line" />
    <h5> All posts from the same author: </h5> 
    `;

    container.appendChild(singlePostDiv);
}

export const renderMorePostsFromASingleAuthor = (posts) => {

    const list = document.createElement("ul");
    container.appendChild(list);


    for (let i = 0; i < posts.length; i++) {

        let listLi = document.createElement("li");
        listLi.innerHTML = `
        <li>
            <a href="#" data-id="${posts[i].id}" class="more-posts" >
                ${posts[i].title.slice(0, 20)}"
            </a>
        </li>`;
        list.appendChild(listLi);
    }

   
}

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

//                           CREATE NEW POST                                    //

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

export const displayCreateNewPost = () => {

    container.textContent = ("");
    const newPost = document.createElement("div");
    newPost.innerHTML = `
    <h1>NEW POST</h1>
    <div class="row">
        <form  id="form-new-post" class="col s12">
            <div class="row">
                <div class="col s6">
                    <label for="post-title">Post Title</label>
                    <input type="text" id="post-title">
                </div>
            </div>
            <div class="row">
                <div class="col s12">
                    <label for="post-content">Post Content</label>
                    <textarea id="post-content"></textarea>
                </div>
            </div>
        </form>
    </div>
    <input type="reset" class="cancel-new-post" value="Cancel" />
    <input type="submit" class="create-post" value="Create" />
    `;
    container.appendChild(newPost);
}

export const collectNewPostData = () => {

    const postTitleInput = document.querySelector("#post-title");
    const postContentInput = document.querySelector("#post-content");

    const title = postTitleInput.value;
    const content = postContentInput.value;
   
    const postData = {
        title: title,
        body: content
    }
   
    return postData;
}



////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

//                           AUTHORS RELATED                                    //

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

export const renderAuthors = (authors) => {

    container.textContent = ("");

    const authorTitle = document.createElement("h1");
    authorTitle.textContent = `Authors (${authors.length})`;
    container.appendChild(authorTitle);

    const authorList = document.createElement("ul");
    container.appendChild(authorList);

    authors.forEach((author) => {
        let authorLi = document.createElement("li");
        authorLi.innerHTML = `
            <li>
                <a href="single-author.html" data-id="${author.id}">
                    <h3 class="author-title" data-id="${author.id}">${author.name}</h3>
                </a>
                <hr>
            </li>`;
        authorList.appendChild(authorLi);
    });
}

export const renderSingleAuthor = (author) => {

    container.textContent = ("");

    const singleAuthor = document.createElement("div");
    singleAuthor.innerHTML = `
    <span id="all-authors"><a href="#" class="back-to-authors"> &#8592; All authors </a></span>
    <h1>${author.name}</h1>
    <div class="row">
        <div class="col s6">
        <img src="http://via.placeholder.com/200x200" alt="">
        </div>
            <div class="col s6">
                <p><b>username:</b> ${author.username}</p>
                <p><b>email:</b> ${author.email}</p>
                <p><b>phone:</b> ${author.phone}</p>
            </div>
        </div>
        <hr class="border-line"/>
        <div class="row">
            <div class="col s6">
                <h3>Address</h3>
                <p><b>street:</b> ${author.address.street}</p>
                <p><b>city:</b> ${author.address.city}</p>
                <p><b>zipcode:</b> ${author.address.zipcode}</p>
            </div>
            <div class="col s6">
                <iframe width="500" height="300" layout="responsive"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.744977118772!2d20.455167015956487!3d44.806385679098696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa9c08b61e5%3A0x3ee3e8a176a39372!2sNemanjina+4%2C+Beograd!5e0!3m2!1sen!2srs!4v1530877048117" frameborder="0" style="border:0" allowfullscreen></iframe>
            </div>
        </div>
        <hr class="border-line" />
        <div class="row">
            <div class="col s6">
                <h3>Company</h3>
                <p><b>name:</b> ${author.company.name}</p>
                <p><b>slogan:</b> ${author.company.catchPhrase}</p>
        </div>
    </div>
    `;
    container.appendChild(singleAuthor);
}

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

//                           ABOUT PAGE                                         //

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


export const renderAboutPage = () => {

    container.textContent = ("");

    const about = document.createElement("div");
    about.innerHTML = `
    <div>
        <h1> ABOUT </h1>
        <p>
            A blog (a truncation of the expression "weblog") is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries ("posts"). Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" (MABs) have developed, with posts written by large numbers of authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. The rise of Twitter and other "microblogging" systems helps integrate MABs and single-author blogs into the news media. Blog can also be used as a verb, meaning to maintain or add content to a blog.

            The emergence and growth of blogs in the late 1990s coincided with the advent of web publishing tools that facilitated the posting of content by non-technical users who did not have much experience with HTML or computer programming. Previously, a knowledge of such technologies as HTML and File Transfer Protocol had been required to publish content on the Web, and as such, early Web users tended to be hackers and computer enthusiasts. In the 2010s, the majority are interactive Web 2.0 websites, allowing visitors to leave online comments, and it is this interactivity that distinguishes them from other static websites. In that sense, blogging can be seen as a form of social networking service. Indeed, bloggers do not only produce content to post on their blogs, but also often build social relations with their readers and other bloggers. However, there are high-readership blogs which do not allow comments.

        </p>
    </div>
    <div>
        <h1> OUR STORY </h1>
        <p>
            Before blogging became popular, digital communities took many forms, including Usenet, commercial online services such as GEnie, Byte Information Exchange (BIX) and the early CompuServe, e-mail lists, and Bulletin Board Systems (BBS). In the 1990s, Internet forum software, created running conversations with "threads". Threads are topical connections between messages on a virtual "corkboard". From 14 June 1993, Mosaic Communications Corporation maintained their "What’s New" list of new websites, updated daily and archived monthly. The page was accessible by a special "What's New" button in the Mosaic web browser.

            The modern blog evolved from the online diary, where people would keep a running account of the events in their personal lives. Most such writers called themselves diarists, journalists, or journalers. Justin Hall, who began personal blogging in 1994 while a student at Swarthmore College, is generally recognized as one of the earlier bloggers, as is Jerry Pournelle. Dave Winer's Scripting News is also credited with being one of the older and longer running weblogs. The Australian Netguide magazine maintained the Daily Net News on their web site from 1996. Daily Net News ran links and daily reviews of new websites, mostly in Australia.
        
            Another early blog was Wearable Wireless Webcam, an online shared diary of a person's personal life combining text, digital video, and digital pictures transmitted live from a wearable computer and EyeTap device to a web site in 1994. This practice of semi-automated blogging with live video together with text was referred to as sousveillance, and such journals were also used as evidence in legal matters. Early blogs were simply manually updated components of common Websites. However, the evolution of electronic and software tools to facilitate the production and maintenance of Web articles posted in reverse chronological order made the publishing process feasible to a much larger, less technical, population.
        </p>
    </div>
    `;
    container.appendChild(about);
}