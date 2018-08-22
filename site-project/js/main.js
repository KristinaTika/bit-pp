import * as ui from "./ui.js";

const contactPageHandler = (event) => {
    ui.renderContact();
    // addSendMailListener();
}

const addContactListener = () => {

    const contact = document.querySelector(".contact-page");
    contact.addEventListener("click", contactPageHandler)
}

const addSendMailListener = () => {
    
    const sendButton = document.querySelector(".contact-button");
    console.log(sendButton);
    sendButton.addEventListener("click", sendMailHandler);
}

const sendMailHandler = (event) => {

    event.preventDefault();
    const name = document.querySelector(".full-name");
    const email = document.querySelector(".email");
    const message = document.querySelector(".message");
   
    const messageToSend = {
        imePrezime: name.value,
        mail: email.value,
        poruka: message.value
    }
    console.log(messageToSend)
}

const displayMainPage = () => {
    ui.renderHomePage();
}

const homePageHandler = (event) => {
    ui.renderHomePage();
}

const addHomePageListener = () => {

    const home = document.querySelector(".home-page");
    home.addEventListener("click", homePageHandler);
}

const renderActionPhotoHandler = (event) => {

    ui.renderActionPhoto(event);

    const backToAction = document.querySelector(".back-to-action");
    backToAction.addEventListener("click", actionPageHandler)
}

const actionPageHandler = (event) => {

    ui.renderAction();
    const photos = document.querySelectorAll(".sale-photo");
    photos.forEach((photo) => {
        photo.addEventListener("click", renderActionPhotoHandler);
    })
}

const addActionListener = () => {

    const action = document.querySelector(".action-page");
    action.addEventListener("click", actionPageHandler);
}

const aboutPageHandler = (event) => {
    ui.renderAbout();
}

const addAboutListener = () => {

    const about = document.querySelector(".about-page");
    about.addEventListener("click", aboutPageHandler);
}







export const init = () => {

    displayMainPage();
    addHomePageListener();
    addActionListener();
    addAboutListener();
    addContactListener();

}