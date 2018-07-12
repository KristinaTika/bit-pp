const container = document.querySelector(".root");


const pinkColor = (user) => {
    if (user.gender === "female") {
        return "card gender-color";
    } else {
        return "card";
    }
}

export const renderUserList = (users) => {

    const userList = document.createElement("ul");
    userList.setAttribute("class", "collection user-list");
    container.appendChild(userList);

    users.forEach((user) => {
        let userLi = document.createElement("li");
        userLi.setAttribute("class", `user-li ${pinkColor(user)}`);
        userLi.setAttribute("id", `${user.name}`)
        userLi.innerHTML = `
            <img src="${user.picture}" alt="${user.name}" class="circle" />
            <span class="title">${user.name}</span>
            <p>
                <b> <i class="tiny material-icons ">email</i>email: </b> ${user.email}
            </p>
            <p>
            <b> <i class="tiny material-icons">cake</i></b> ${user.dob}
            </p>
        `;
        userList.appendChild(userLi);
    });
}


export const collectSearchData = () => {

    const searchInput = document.querySelector("#search");
    const search = searchInput.value;
    return search;
    searchInput.value = "";
}

export const clearSearchInput = () => {

    const searchInput = document.querySelector("#search");
    searchInput.value = "";

}

export const renderSearchUsers = (user) => {

    // container.textContent = "";

    const searchedUser = document.createElement("div");
    searchedUser.innerHTML = `
        <li className="collection-item avatar">
            <img src=${user.picture} alt="${user.name}" className="circle" />
            <p>
                <b> <i class="tiny material-icons">email</i>email: </b>${user.email}
            <p>
                <b> <i class="tiny material-icons">cake</i> </b>${user.dob}
            </p>
        </li>`
        ;
    container.textContent = "";
    container.appendChild(searchedUser);

}



