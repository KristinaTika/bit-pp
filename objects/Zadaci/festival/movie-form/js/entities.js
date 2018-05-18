// console.log("hi");

var movieList = [];

function Movie(title, length, genre) {

    this.title = title;
    this.length = length;
    this.genre = genre;
}

Movie.prototype.getData = function () {

    var firstLetter = this.genre[0].toUpperCase();
    var lastLetter = this.genre[this.genre.length - 1].toUpperCase();
    var movieInfo = this.title + ", " + this.length + ", " + firstLetter + lastLetter + "</br>";
    return movieInfo;
}

function CreateMovie() {

    var title1 = document.querySelector(".input-title");
    var length1 = document.querySelector(".input-length");
    var genreSelect1 = document.querySelector(".drop-down");
    var genreOption1 = genreSelect1[genreSelect1.selectedIndex];


    var title = title1.value;
    var length = length1.value;
    var genre = genreOption1.value;

    if (!title || !length || !genre) {
        document.querySelector(".error").innerHTML = "Please add movie info!";
    } else {
        movieList.push(title, length, genre);
    }

    var movie = new Movie(title, length, genre);
    var movieListItem = document.querySelector(".movie-list-items");
    movieListItem.innerHTML += movie.getData();

    var lengthOfAllMovies = document.querySelector(".all-movies-length");
    lengthOfAllMovies.innerHTML += length;
}


function Program(Date) {

    var inputDate = new Date(date);
    this.date = inputDate.getDate() + "." + inputDate.getMonth() + 1 + "." + inputDate.getFullYear();
    this.totalNumberOfMovies = this.movieList.length;
    this.totalDuration += lengthOfAllMovies;

    //date, list of movies, duration




    this.addProgram = function (movie) {
        if (!program && !(program instanceof Program)) {
            console.log("Insert a valid movie");
            return
        }
        else {
            this.listOfMovies.push(movie);
        }
    }
}