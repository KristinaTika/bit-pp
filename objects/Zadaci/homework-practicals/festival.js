"use  strict";
/*

(function () {

    function Genre(name) {
        this.name = name;
    }
    Genre.prototype.getData = function () {
        var firstLetter = this.name[0].toUpperCase();
        var lastLetter = this.name[this.name.length - 1].toUpperCase();
        var output = "";

        return output = firstLetter + lastLetter;
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length + " min";
    }
    Movie.prototype.getMovieData = function () {
        var output = this.title + ", " + this.length + ", " + this.genre.getData();

        return output;
    }


    function Program(date) {
        var inputDate = new Date(date)
        this.date = inputDate.getMonth() + 1 + "." + inputDate.getDate() + "." + inputDate.getFullYear();
        this.listOfMovies = [];
        this.totalNumberOfMovies = this.listOfMovies.length;
    }
    Program.prototype.addMovie = function (movie) {

        if (!movie && !(movie instanceof Movie)) {
            console.log("Insert a valid movie");
            return;
        } else {
            this.listOfMovies.push(movie);
        }
    }
    Program.prototype.calcTotalLength = function () {
        var totalLengthOfMovies = 0;

        this.listOfMovies.forEach(function (movie) {
            totalLengthOfMovies += parseInt(movie.length);
        });
        return totalLengthOfMovies;
    }
    Program.prototype.getProgramData = function () {
        var output = "";
        var programData = "";
        this.listOfMovies.forEach(function (movie) {
            programData += "\t" + movie.getMovieData() + "\n" + "\t";
        });

        return output = this.date + ", " + " program duration: " + this.calcTotalLength() + ", " + "\n" + "\t" + programData;
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
    }
    Festival.prototype.addProgram = function (program) {
        if (!program && !(program instanceof Program)) {
            console.log("Insert a valid movie");
            return;
        } else {
            this.listOfPrograms.push(program);
        }
    }
    Festival.prototype.getFestivalData = function () {
        var output = "";
        var festivalData = "";

        this.listOfPrograms.forEach(function (program) {
            festivalData += program.getProgramData() + "\n" + "\t";
        });
        return output = this.name + " has " + this.listOfPrograms.length + " movie titles " + "\n" + "\t" + festivalData;
    }

    function createMovie(title, genre, length) {
        var objectGenre = new Genre(genre);
        var createdMovie = new Movie(title, objectGenre, length);

        return createdMovie;
    }

    function createProgram(date) {
        var createdProgram = new Program(date);

        return createdProgram;
    }

    // Genres:
    var action = new Genre("action");
    var drama = new Genre("drama");

    // Movies:
    var thor2 = createMovie("Thor 2", "action", "120");
    var loveActually = createMovie("Love Actually", "romance", "100");
    var psycho = createMovie("Psycho", "horror", "120");
    var mrBean = createMovie("Mr. Bean", "comedy", "90");
    var avengers = createMovie("Avengers", "action", "120");
    var blackPanther = createMovie("Black Panther", "action", "120");

    // Programs:
    var dayOne = createProgram("01.05.2018");
    var dayTwo = createProgram("11.05.2018");

    // Festivals:
    var comicConByKristina = new Festival("Smotra by Kristina!");

    dayOne.addMovie(thor2);
    dayOne.addMovie(loveActually);
    dayOne.addMovie(psycho);
    dayTwo.addMovie(mrBean);
    dayTwo.addMovie(avengers);
    dayTwo.addMovie(blackPanther);

    comicConByKristina.addProgram(dayOne);
    comicConByKristina.addProgram(dayTwo);

    console.log(comicConByKristina.getFestivalData());

})()


(function () {

    function Genre(name) {
        this.name = name;
    }
    Genre.prototype.getData = function () {
        var firstLetter = this.name[0].toUpperCase();
        var lastLetter = this.name[this.name.length - 1].toUpperCase();

        return firstLetter + lastLetter;
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length + "min";
    }
    Movie.prototype.getMovieData = function () {
        var output = this.title + ", " + this.length + ", " + this.genre.getData();

        return output;
    }

    function Program(date) {
        var inputDate = new Date(date);
        this.date = inputDate.getMonth() + 1 + "." + inputDate.getDate() + "." + inputDate.getFullYear();
        this.listOfMovies = [];
        this.totalNumberOfMoviesInProgram = this.listOfMovies.length;
    }
    Program.prototype.addMovie = function (movie) {
        if (!movie && (!movie instanceof Movie)) {
            return "Error, invalid movie!"
        } else {
            this.listOfMovies.push(movie);
        }
    }
    Program.prototype.calcTotalLength = function () {
        var totalLengthOfMovies = 0;

        this.listOfMovies.forEach(function (movie) {
            totalLengthOfMovies += parseInt(movie.length);
        })
        return totalLengthOfMovies;
    }
    Program.prototype.getProgramData = function () {
        output = "";
        programData = "";

        this.listOfMovies.forEach(function (movie) {
            programData += "\t" + movie.getMovieData() + "\n" + "\t";
        });
        output = this.date + ", " + " program duration: " + this.calcTotalLength() + ", " + "\n" + "\t" + programData;
        return output;
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
    }
    Festival.prototype.addProgram = function (program) {
        if (!program && (!program instanceof Program)) {
            return "Error, please enter valid program!";
        } else {
            this.listOfPrograms.push(program);
        }
    }
    Festival.prototype.getFestivalData = function () {
        var output = "";
        var festivalData = "";

        this.listOfPrograms.forEach(function (program) {
            festivalData += program.getProgramData() + "\n" + "\t";
        });
        output = this.name + " has " + this.listOfPrograms.length + " movie titles " + "\n" + "\t" + festivalData;

        return output;
    }

    function createMovie(title, genre, length) {
        var objectGenre = new Genre(genre);
        var createdMovie = new Movie(title, objectGenre, length);

        return createdMovie;
    }

    function createProgram(date) {
        var createdProgram = new Program(date);

        return createdProgram;
    }


    // Genres:
    var action = new Genre("action");
    var drama = new Genre("drama");

    // Movies:
    var thor2 = createMovie("Thor 2", "action", "120");
    var loveActually = createMovie("Love Actually", "romance", "100");
    var psycho = createMovie("Psycho", "horror", "120");
    var mrBean = createMovie("Mr. Bean", "comedy", "90");
    var avengers = createMovie("Avengers", "action", "120");
    var blackPanther = createMovie("Black Panther", "action", "120");

    // Programs:
    var dayOne = createProgram("01.05.2018");
    var dayTwo = createProgram("11.05.2018");

    // Festivals:
    var comicConByKristina = new Festival("Smotra by Kristina!");

    dayOne.addMovie(thor2);
    dayOne.addMovie(loveActually);
    dayOne.addMovie(psycho);
    dayTwo.addMovie(mrBean);
    dayTwo.addMovie(avengers);
    dayTwo.addMovie(blackPanther);

    comicConByKristina.addProgram(dayOne);
    comicConByKristina.addProgram(dayTwo);

    console.log(comicConByKristina.getFestivalData());

})();
*/

(function () {

    function Genre(name) {
        this.name = name;
    }
    Genre.prototype.getData = function () {
        var firstLetter = this.name[0].toUpperCase();
        var lastLetter = this.name[this.name.length - 1].toUpperCase();
        var output = firstLetter + lastLetter;
        
        return output;
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length + "min";
    }
    Movie.prototype.getMovieData = function () {
        var output = "";

        return output = this.title + ", " + this.length + ", " + this.genre.getData();
    }

    function Program(date) {
        var inputDate = new Date(date);
        this.date = inputDate.getMonth() + 1 + "." + inputDate.getDate() + "." + inputDate.getFullYear();
        this.listOfMovies = [];
        this.totalNumberOfMovies = this.listOfMovies.length;
    }
    Program.prototype.addMovie = function (movie) {
        if (!movie && (!movie instanceof Movie)) {
            return "Error, please enter valid movie!";
        } else {
            this.listOfMovies.push(movie);
        }
    }
    Program.prototype.calcTotalLength = function () {
        var totalLengthOfMovies = 0;

        this.listOfMovies.forEach(function (movie) {
            totalLengthOfMovies += parseInt(movie.length);
        });

        return totalLengthOfMovies;
    }
    Program.prototype.getProgramData = function () {
        var output = "";
        var programData = "";

        this.listOfMovies.forEach(function (movie) {
            programData += "\t" + movie.getMovieData() + "\n" + "\t";
        });
        return output = this.date + " program duration: " + this.calcTotalLength() + ", " + "\n" +"\t" + programData;
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
    }
    Festival.prototype.addProgram = function (program) {
        if (!program && (!program instanceof Program)) {
            return "Error, please enter valid program!";
        } else {
            this.listOfPrograms.push(program);
        }
    }
    Festival.prototype.getFestivalData = function () {
        var output = "";
        var festivalData = "";

        this.listOfPrograms.forEach(function (program) {
            festivalData += program.getProgramData() + "\n" + "\t";
        })
        output = this.name + " has " + this.listOfPrograms.length + " movie titles " + "\n" + "\t" + festivalData;

        return output;
    }

    function createMovie(title, genre, length) {
        var objectGenre = new Genre(genre);
        var createdMovie = new Movie(title, objectGenre, length);

        return createdMovie;
    }

    function createProgram(date) {
        var createdProgram = new Program(date);

        return createdProgram;
    }

    var action = new Genre ("action")
    var drama = new Genre ("drama");
    
    var walkingDead = createMovie("The Walking Dead", "drama", "50");
    var fear = createMovie("Fear The Walking Dead", "drama", "60");
    var grey = createMovie("Grey's Anatomy", "drama", "45");
    var station = createMovie("Station 19", "action", "45");

    var dayOne = createProgram("10/10/2018");
    var dayTwo = createProgram("11/10/2018");
    
    var tikijada = new Festival("Tikijada");

    dayTwo.addMovie(grey);
    dayTwo.addMovie(station);
    dayOne.addMovie(walkingDead);
    dayOne.addMovie(fear);

    tikijada.addProgram(dayTwo);
    tikijada.addProgram(dayOne);


    console.log(tikijada.getFestivalData());
})()