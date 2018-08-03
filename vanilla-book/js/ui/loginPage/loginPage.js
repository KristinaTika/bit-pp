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
            <input type="text" placeholder="username" id="username" required />
            <p>Password</p>
            <input type="password" placeholder="password" id="login-password" required />
            <input type="button" class="login-button" value="login" />
        </div>

        <div class="register-form">
            <span id="login-title">Login</span>
            <span class="register-title">Register</span>
            <p>Full Name</p>
            <input type="text" placeholder="Full Name" id="full-name" required/>
            <p>Username</p>
            <input type="text" placeholder="Username" id="nickname" required/>
            <p>Email</p>
            <input type="email" placeholder="Email Address" id="email-address" required/>
            <p>Password </p>
            <input type="password" placeholder="password" id="register-password" required/>
            <input type="button" class="register-button" value="register" />
        </div>
    `;
    root.appendChild(login);

    const register = document.querySelector(".register-form");
    register.style.display = "none";

    const reg = document.querySelector(".register-title");
    reg.addEventListener("click", changeToRegisterHandler);

}

export const loginHandler = (event) => {

    event.preventDefault();

    const usernameInput = document.querySelector("#username");
    const username = usernameInput.value;
    const passwordInput = document.querySelector("#login-password");
    const password = passwordInput.value;

    return {
        username,
        password
    }
}

export const changeToRegisterHandler = (event) => {

    const login = document.querySelector(".login-form");
    login.style.display = "none";

    const register = document.querySelector(".register-form");
    register.style.display = "block";

    // const registerButton = document.querySelector(".register-button");
    // registerButton.addEventListener("click", registerHandler);

    const loginSpan = document.querySelector("#login-title");
    console.log(loginSpan);

    loginSpan.addEventListener("click", handler);
}

const handler = (event) => {
    console.log(event);
    const loginSpan = document.querySelector(".login-title");

    const register = document.querySelector(".register-form");
    register.style.display = "none";
    loginSpan.style.display = "block";
}

export const registerHandler = (event) => {

    event.preventDefault();

    const fullNameInput = document.querySelector("#full-name");
    const fullName = fullNameInput.value;

    const usernameInput = document.querySelector("#nickname");
    const username = usernameInput.value;

    const emailInput = document.querySelector("#email-address");
    const email = emailInput.value;

    const passwordInput = document.querySelector("#register-password");
    const password = passwordInput.value;

    return {
        username,
        password,
        fullName,
        email
    }
}










