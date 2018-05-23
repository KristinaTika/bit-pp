'use strict';


function Genre(genreName) {
 
    this.name = genreName;
}

Genre.prototype.getData = function () {
    var name = this.name;
    var firstIndex = 0;
    var lastIndex = name.length - 1
    var output = name.charAt(firstIndex) + name.charAt(lastIndex);

    return output.toUpperCase();
};

function Movie(title, genreObj, length) {

    this.title = title;
    this.genre = genreObj; 
    this.length = length;

}

Movie.prototype.getData = function () {
    return this.title + ", " + this.length + "min, " + this.genre.getData();
};

function Program(date) {
   
    this.date = date;
    this.listOfMovies = [];
}

Program.prototype.getProgramDuration = function () {
    var programLength = 0;

  
    this.listOfMovies.forEach(function (movie) {
        programLength += movie.length;
    }, this);

    return parseInt(programLength);
};

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
};

Program.prototype.getData = function () {
    var date = new Date(this.date);
    var movies = this.listOfMovies;
    var programDuration = this.getProgramDuration();
    var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

    if (!programDuration) {
        return dateStr + ", program duration: TBA";
    }

    return dateStr + ", " + movies.length + " movies, duration: " + programDuration + "min";
};

Program.prototype.getAllData = function () {
    var date = new Date(this.date);
    var movies = this.listOfMovies;
    var programDuration = this.getProgramDuration();
    var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

    var outputStr = dateStr + ", program duration " + programDuration + "min\n";

    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        outputStr += "\t\t" + movie.getData() + "\n";
    }

    return outputStr;
};

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
};


Festival.prototype.addProgram = function (program) {
    this.listOfPrograms.push(program);
};

Festival.prototype.getMoviesCount = function () {
    var programs = this.listOfPrograms;
    var moviesCount = 0;

    for (var i = 0; i < programs.length; i++) {
        var program = programs[i];
        moviesCount += program.listOfMovies.length;
    }

    return moviesCount;
};

Festival.prototype.getData = function () {
    var festivalName = this.name;
    var programs = this.listOfPrograms;
    var totalMovieCount = this.getMoviesCount();

    var outputStr = festivalName + " has " + totalMovieCount + " movie titles\n"

    for (var i = 0; i < programs.length; i++) {
        var program = programs[i];
        outputStr += "\t" + program.getData();
    }

    return outputStr;
};

function runInConsole() {

    function createMovie(mTitle, mLength, genreName) {
        var genreObj = new Genre(genreName);
  
        var movie = new Movie(mTitle, genreObj, mLength);

        return movie;
    }
  
    function createProgram(dateStr) {
        var date = new Date(dateStr);
        var program = new Program(date)
        return program;
    }


    var spiderman = createMovie("Spider-Man: Homecoming", 133, "Action");
    var planetApes = createMovie("War for the Planet of the Apes", 140, "Drama");
    var darkTower = createMovie("The Dark Towe", 95, "Western");
    var deadpool = createMovie("Deadpool", 108, "Comedy");


    var actionProgram = createProgram("Oct 28 2017");
    var comedyProgram = createProgram("Oct 29 2017");

 
    actionProgram.addMovie(spiderman);
    actionProgram.addMovie(planetApes);
    actionProgram.addMovie(darkTower);

 
    comedyProgram.addMovie(deadpool);

    var weekendFestival = new Festival("Weekend festival");

    weekendFestival.addProgram(actionProgram);
    weekendFestival.addProgram(comedyProgram);

    console.log(weekendFestival.getData());

};
