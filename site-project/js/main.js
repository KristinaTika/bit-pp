import * as ui from "./ui.js";

const contactPageHandler = (event) => {
    ui.renderContact();
    // addSendMailListener();
}

const addContactListener = () => {

    const contact = document.querySelector(".contact-page");
    contact.addEventListener("click", contactPageHandler);
}

const addSendMailListener = () => {
    
    const sendButton = document.querySelector(".contact-button");
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
    console.log(messageToSend);
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
    backToAction.addEventListener("click", actionPageHandler);
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

const furnitureHandler = (event) => {

    ui.renderFurnitureMenu();
    const furniture = document.querySelector(".furniture-menu");
    addKidsRoomListener();
}

const addFurnitureListener = () => {

    const furniture = document.querySelector(".furniture-page");
    furniture.addEventListener("click", furnitureHandler);
}

const addKidsRoomListener = () => {
    
    const furnitures = document.querySelectorAll(".furniture");
    furnitures.forEach((furniture) => {
        furniture.addEventListener("click", chosenFurnitureHandler);
    })
}

const chosenFurnitureHandler = (event) => {
    event.preventDefault();
    const target = event.target.className;
    
    if(target.includes("decije-sobe")) {
        ui.renderKidsRoom();
    } else if(target === "dnevne-sobe" || target ==="dnevne-sobe furniture-photo") {
        ui.renderLivingRoom();
    } else if(target === "klub-stolovi" || target === "klub-stolovi furniture-photo") {
        ui.renderClubTables();
    } else if(target === "kreveti-masiv" || target === "kreveti-masiv furniture-photo") {
        ui.renderBed();
    } else if(target === "kuhinje" || target === "kuhinje furniture-photo") {
        ui.renderKitchen();
    } else if(target === "ormari" || target === "ormari furniture-photo") {
        ui.renderCloset();
    } else if(target ==="police" || target === "police furniture-photo") {
        ui.renderShelves();
    } else if(target ==="predsoblja" || target === "predsoblja furniture-photo") {
        ui.renderHallway();
    }
}

export const init = () => {

    displayMainPage();
    addHomePageListener();
    addFurnitureListener();
    addActionListener();
    addAboutListener();
    addContactListener();


}