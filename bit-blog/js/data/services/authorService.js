import {authorsEndpoint, singleAuthorEndpoint } from "../constants/constants.js";

class AuthorService {

    fetchAuthors() {
        return fetch(authorsEndpoint)
        .then((response) => {
            return response.json();
        })
    }

    fetchSingleAuthor() {
        return fetch(`https://jsonplaceholder.typicode.com/users?userId=1`)
        .then((response) => {
            return response.json();
        })
    }
}

export const authorService = new AuthorService;