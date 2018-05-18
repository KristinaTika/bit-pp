// NAVIGATION
function navigacija() {

    return window.navigator.platform + "\n" + "version" + window.navigator.appVersion + "\n" + "owner: " + window.navigator.vendor;
}

function isOnline() {

    if (window.navigator.onLine === true) {
        return "online";
    } else {
        return "offline";
    }
}

console.log(isOnline());

// SCREEN

function screenInfo() {

    return window.screen.height + "\n" + window.screen.width;
}

console.log(screenInfo());

function maxScreen() {

    return window.screen.availHeight + "\n" + window.screen.availWidth;
}

console.log(maxScreen());

// LOCATION

function locationInfo() {

    return window.location.href + "\n" + window.location.origin + "\n" + window.location.protocol + "\n" + window.location.pathname;
}

console.log(locationInfo());

function reloadPage() {
    return window.location.reload;
}

console.log(reloadPage());

function redirectPage() {

    return window.location.href = "https://www.google.com";
}

//LOCAL STORAGE

function storeData() {

    return window.localStorage.setItem("tv show", "The Walking Dead");
}

function storeData() {

    return window.localStorage.setItem("tv show", "The Walking Dead");
}

function getData() {
    if (window.localStorage.storage === "") {
        console.log("There is NO data");
    } else {
        return window.localStorage.getItem("tv show");
    }
}

function removeData() {

    return window.localStorage.removeItem("tv show");
}

// WINDOW METHODS

function greetings() {

    return alert("Hello Walking Dead Fan!");
}

function question() {
    if (typeof prompt === "undefined")
        return alert("Successful message");
}

// GLOBAAL JS OBJECTS HOMEWORK

function randomArray() {
    var min = Math.ceil(1);
    var max = Math.floor(50);
    var show;
    var output = [];
    for (var i = 0; i < 10; i++) {
        output.push(Math.floor(Math.random() * (max - min) + min));
    }
    return output;
}

function roundNumbers() {
    var inputArr = [];
    var outputArr = [];
    for (var i = 0; i < 10; i++) {
        inputArr.push(Math.floor(Math.random() * (50 - 1) + 1));
        outputArr.push(inputArr[i]);
        Math.round(outputArr, 2);
       
    }
    return outputArr;
}

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var result = day + "."+ month +"." + year;

console.log(result);



