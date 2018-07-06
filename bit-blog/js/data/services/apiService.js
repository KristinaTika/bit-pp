export const get = (url) => {

    return fetch(url, {
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: headers,
        method: 'GET',
        mode: 'cors'
    })
        .then(response => {
            return response.json();
        })
}

export const post = (url, newContent) => {

    const postData = {
        method: 'POST',
        body: JSON.stringify(newContent),
        headers: headers,
        mode: 'cors'
    }
    return fetch(url, postData);
}