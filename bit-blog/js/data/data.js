import { postService } from "./services/postService.js";
import { Post } from "./entities/post.js";
import { authorService } from "./services/authorService.js";
import { Author } from "./entities/author.js";


export const getPosts = () => {

    return postService.fetchPosts()
        .then((postList) => {
            return postList.map(post => {
                const userId = post.userId;
                const id = post.id;
                const title = post.title;
                const body = post.body;

                const myPost = new Post(userId, id, title, body);
                return myPost;
            })
        })
}

export const getSinglePost = (id) => {
    return postService.fetchSinglePost(id);
    console.log(id)
}



export const getAuthors = () => {

    return authorService.fetchAuthors()
        .then((authors) => {
            return authors.map(author => {
                const id = author.id;
                const name = author.name;
                const username = author.username;
                const email = author.email;
                const phone = author.phone;
                const street = author.address.street;
                const city = author.address.city;
                const zipcode = author.address.zipcode;
                const companyName = author.company.name;
                const slogan = author.company.catchPhrase;
                const address = {
                    street,
                    city,
                    zipcode
                }
                const company = {
                    companyName,
                    slogan
                }

                const myAuthor = new Author(id, name, username, email, phone, address, company);
                return myAuthor;
            })
        })
}




export const getSingleAuthor = () => {

    return authorService.fetchSingleAuthor()
        .then((authors) => {
            return authors.map(author => {
                const id = author.id;
                const name = author.name;
                const username = author.username;
                const email = author.email;
                const phone = author.phone;
                const street = author.address.street;
                const city = author.address.city;
                const zipcode = author.address.zipcode;
                const companyName = author.company.name;
                const slogan = author.company.catchPhrase;
                const address = {
                    street,
                    city,
                    zipcode
                }
                const company = {
                    companyName,
                    slogan
                }

                const myAuthor = new Author(id, name, username, email, phone, address, company);

                return myAuthor;
            })
        })
    }