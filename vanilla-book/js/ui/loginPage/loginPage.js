const root = document.querySelector(".root");

export const loginPage = () => {

    root.innerHTML = "";

    const feed = document.querySelectorAll(".feed-page");
    feed.forEach((f) => {
        f.setAttribute("class", "hide")
    })
    const people = document.querySelectorAll(".people-page");
    people.forEach((p) => {
        p.setAttribute("class", "hide")
    })
    const profile = document.querySelectorAll(".profile-page");
    profile.forEach((pr) => {
        pr.setAttribute("class", "hide")
    })
    const login = document.createElement("div");
    login.setAttribute("class", "login-page");
    login.innerHTML = `
        <h1 class="welcome-title"> Virtual life Login </h1>
        <p class="welcome-text"> Welcome to Virtual life. Create an account or log in to our social network. Connect with friends, family and other people you know. Share photos and videos and get updates.</p>
        <div class="login-form">
            <span class="login-title">Login</span>
            <span class="register-title">Register</span>
            <p>Username</p>
            <input type="text" placeholder="username" />
            <p>Password</p>
            <input type="password" placeholder="password" />
            <input type="button" class="login-button" value="login" />
        </div>

    `;
    root.appendChild(login);
}