"use strict";

var programPosition = 0;
var movieNumber = 0;
var programList = [];
var movieListOfMovies = []


function Movie(title, length, genre) {

    this.title = title;
    this.length = length;
    this.genre = genre;
}
Movie.prototype.getData = function () {
    var firstLetter = this.genre[0].toUpperCase();
    var lastLetter = this.genre[this.genre.length - 1].toUpperCase();
    var movieInfo = this.title + ", " + this.length + "min, " + firstLetter + lastLetter;
    return movieInfo;
}


function createMovie() {

    var titleInput = document.querySelector("#title");
    var lengthInput = document.querySelector("#length");
    var genreInput = document.querySelector("#genre");

    var title = titleInput.value;
    var length = parseInt(lengthInput.value);
    var genre = genreInput.value;

    var alertMsg = document.querySelector(".alert-msg");
    var alert = document.createElement("p");
    alert.textContent="*All fields are required";

    var createdMovie = new Movie(title, length, genre);
    if (!title || !length || !genre) {
        alertMsg.appendChild(alert);
        return;

    } else {
        alertMsg.textContent= "";
        movieListOfMovies.push(createdMovie);

    }

    alertMsg = "";
    titleInput.value = "";
    lengthInput.value = "";
    genreInput.value = "";

    var chooseMovieInput = document.querySelector("#choose-movie");
    var optionMovie = document.createElement("option");
    optionMovie.textContent = movieListOfMovies[movieNumber].title;
    optionMovie.value = movieNumber;
    chooseMovieInput.appendChild(optionMovie);
    movieNumber++;

    var movieList = document.querySelector(".movie-list");
    var paragraph = document.createElement("li");
    paragraph.textContent = createdMovie.getData();
    movieList.appendChild(paragraph);
    // paragraphLength.textContent = myProgram.calculateTotalLength();
    // totalLength.appendChild(paragraphLength);
}


function Program(date) {

    this.date = new Date(date);
    this.listOfTheMovies = [];
}
Program.prototype.addMovie = function (movie) {
    this.listOfTheMovies.push(movie);
}
Program.prototype.calcTotalLength = function () {
    var totalDurationOfMovies = 0;
    this.listOfTheMovies.forEach(function (movie) {
        totalDurationOfMovies += movie.length;
    })
    return totalDurationOfMovies;
}
Program.prototype.getInfo = function () {

    var day = this.date.getDate();
    var month = this.date.getMonth() + 1;
    var year = this.date.getFullYear();
    var fullDate = day + "." + month + "" + year;

    if (this.date.getTime() < Date.now()){
        alert ("Please put the correct date");
        return;
    }
    return fullDate + ", program duration: TBA";
   
}

var totalLength = document.querySelector(".total-length");
var paragraphLength = document.createElement("li");


function createProgram() {

    var dateInput = document.querySelector("#date");
    var date = dateInput.value;
    var myProgram = new Program(date);
    programList.push(myProgram);

    dateInput.value = "";

    var chooseProgramInput = document.querySelector("#choose-program");
    var optionProgram = document.createElement("option");
    optionProgram.textContent = programList[programPosition].date;
    optionProgram.value = programPosition;
    chooseProgramInput.appendChild(optionProgram);
    programPosition++;

    var programInfo = document.querySelector("#program-info");
    var pProgramInfo = document.createElement("li");
    pProgramInfo.textContent = myProgram.getInfo();
    programInfo.appendChild(pProgramInfo);
}


function addMovie() {

    var chooseMovieInput = document.querySelector("#choose-movie");
    var chosenMovieIndex = chooseMovieInput.value;
    var chooseProgramInput = document.querySelector("#choose-program");
    var chosenProgramIndex = chooseProgramInput.value;
    var chosenProgram = programList[chosenProgramIndex];
    var chosenMovie = movieListOfMovies[chosenMovieIndex];

    chosenProgram.addMovie(chosenMovie);

    var programInfo = document.querySelector("#program-info");
    var final = document.querySelector("#final");
    var final2 = document.createElement("li");
    final2.textContent = chosenProgram.date + " " + chosenMovie.title;
    programInfo.appendChild(final2);
}