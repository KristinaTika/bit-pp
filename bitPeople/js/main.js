import * as data from "./data/data.js";
import * as uiList from "./ui/uiList.js";
import * as uiGrid from "./ui/uiGrid.js";
import { renderAbout } from "./ui/uiAbout.js";
import { renderLoader, noUser } from "./ui/uiLoader.js";

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
            renderLoader();
            uiGrid.renderUserGrid(users);
        })
}

const switchViewHandler = (event) => {

    event.preventDefault();

    if (event.target.textContent === "view_module") {
        event.target.textContent = "view_list";
        loadUserGrid();
    } else if (event.target.textContent === "view_list") {
        event.target.textContent = "view_module";
        loadUserList();
    }
}

const refreshHandler = (event) => {

    const view = document.querySelector(".set-view");

    if (event.target.textContent === "refresh" && view.textContent === "view_module") {
        renderLoader();
        loadUserList();
    } else if (event.target.textContent === "refresh" && view.textContent === "view_list") {
        renderLoader();
        loadUserGrid();
    }
}

const aboutHandler = (event) => {

    event.preventDefault();

    if (event.target.className === "about") {
        renderAbout();
    }
}

const searchHandler = (event) => {

    const view = document.querySelector(".set-view");
    let searchValue = uiList.collectSearchData();

    let filterUsers = myUsers.filter((user) => {
        let userName = user.name.toLowerCase();
        return userName.includes(searchValue);
    });

    if (view.textContent === "view_module") {
        renderLoader();
        uiList.renderUserList(filterUsers);
    }
    else if (view.textContent === "view_list") {
        renderLoader();
        uiGrid.renderUserGrid(filterUsers);
    }
    noUser()
}

const closeSearchHandler = (event) => {

    event.preventDefault();
    const view = document.querySelector(".set-view");
    const noUser= document.querySelector(".no-user-message");

    if (event.target.textContent === "close" && view.textContent === "view_module") {
        uiList.clearSearchInput();
        noUser.classList.add("class", "hide");
        renderLoader();
        loadUserList();
    } else {
        uiList.clearSearchInput();
        noUser.classList.add("class", "hide");
        renderLoader();
        loadUserGrid();
    }
}

export const init = () => {

    renderLoader();
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

    const bitPeople = document.querySelector(".bit-people")
    bitPeople.addEventListener("click", loadUserList)
}
