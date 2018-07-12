const container = document.querySelector(".root");

export const renderLoader = () => {

    const loader = document.createElement("div");
    loader.innerHTML = `
    <div class="sk-circle">
        <div class="sk-circle1 sk-child"></div>
        <div class="sk-circle2 sk-child"></div>
        <div class="sk-circle3 sk-child"></div>
        <div class="sk-circle4 sk-child"></div>
        <div class="sk-circle5 sk-child"></div>
        <div class="sk-circle6 sk-child"></div>
        <div class="sk-circle7 sk-child"></div>
        <div class="sk-circle8 sk-child"></div>
        <div class="sk-circle9 sk-child"></div>
        <div class="sk-circle10 sk-child"></div>
        <div class="sk-circle11 sk-child"></div>
        <div class="sk-circle12 sk-child"></div>
    </div>
    `;
    container.appendChild(loader);

    const searchBar = document.querySelector(".search-bar");
    searchBar.classList.add("class", "hide")
}

export const noUser = () => {

    const message = document.createElement("div");
    message.innerHTML = `
        <img class="irc_mi" src="https://i.pinimg.com/736x/1d/b8/9e/1db89e01a6d7bb7d8834fe778fbc5c4b--charter-communications-sick-of-people.jpg" alt="We couldn't find any people matching your search" id="no-user-photo" />
        <p class="center"> Sorry, we couldn't find any people matching your search.</p>
    `;
    container.appendChild(message);
}