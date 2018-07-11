const container = document.querySelector(".root");

export const renderUserList = (users) => {

    const userList = document.createElement("ul");
    userList.setAttribute("class", "collection user-list");
    container.appendChild(userList);

    users.forEach((user) => {
        let userLi = document.createElement("li");
        userLi.setAttribute("class", "collection-item avatar li-post");
        userLi.innerHTML = `
            
            <img src="${user.picture}" alt="${user.name}" class="circle" />
            <span class="title">${user.name}</span>
            <p>
                <b> <i class="tiny material-icons ">email</i>email: </b> ${user.email}
            </p>
            </p>
            <b> <i class="tiny material-icons">cake</i></b> ${user.dob}
            </p>
        `;
        userList.appendChild(userLi);
    });
}