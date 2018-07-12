import * as data from "./data/data.js";
import * as uiList from "./ui/uiList.js";
import * as uiGrid from "./ui/uiGrid.js";
import * as uiAbout from "./ui/uiAbout.js";


const container = document.querySelector(".root");

const myUsers = [];
const filteredUsers = [];

const loadUserList = () => {

    data.getUsers()
        .then((users) => {
            users.forEach((user) => {
                myUsers.push(user);
                filteredUsers.push(user)
            });
            uiList.renderUserList(users);
        })
}

const loadUserGrid = () => {

    data.getUsers()
        .then((users) => {
            uiGrid.renderUserGrid(users);
        })
}

const switchViewHandler = (event) => {

    event.preventDefault();

    if (event.target.textContent === "view_module") {
        container.textContent = "";
        event.target.textContent = "view_list";
        loadUserGrid();
    } else if (event.target.textContent === "view_list") {
        container.textContent = "";
        event.target.textContent = "view_module";
        loadUserList();
    }
}

const refreshHandler = (event) => {

    const view = document.querySelector(".set-view");

    if (event.target.textContent === "refresh" && view.textContent === "view_module") {
        container.textContent = "";
        loadUserList();
    } else if (event.target.textContent === "refresh" && view.textContent === "view_list") {
        container.textContent = "";
        loadUserGrid();
    }
}

const aboutHandler = (event) => {

    event.preventDefault();

    if (event.target.className === "about") {
        uiAbout.renderAbout();
    }
}

const searchHandler = (event) => {

    let searchValue = uiList.collectSearchData();
    console.log(searchValue);
    
    let filterUsers = myUsers.filter((user) => {
        let userName = user.name.toLowerCase();
        for (let i = 0; i < userName.length; i++) {

            if (user.name == searchValue) {
               uiList.renderSearchUsers(user);   
            }
        }
    });
}

const closeSearchHandler = (event) => {

    event.preventDefault();

    if (event.target.textContent === "close") {
        container.textContent = "";
        uiList.clearSearchInput();
        loadUserList();
    }
}


export const init = () => {

    loadUserList();

    const body = document.querySelector("body");
    body.addEventListener("click", switchViewHandler);

    const refresh = document.querySelector(".refresh");
    refresh.addEventListener("click", refreshHandler);

    const about = document.querySelector(".about");
    about.addEventListener("click", aboutHandler);

    const search = document.querySelector("#search");
    search.addEventListener("keyup", searchHandler);

    const close = document.querySelector(".close");
    close.addEventListener("click", closeSearchHandler);
}
