import * as data from "./data/data.js";
import * as uiList from "./ui/uiList.js";
import * as uiGrid from "./ui/uiGrid.js";
import * as uiAbout from "./ui/uiAbout.js";


const container = document.querySelector(".root");

const loadUserList = () => {

    data.getUsers()
        .then((users) => {
            uiList.renderUserList(users)
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

    if(event.target.className === "about") {
        uiAbout.renderAbout();
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

}
