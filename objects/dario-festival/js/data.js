var dataModule = (function(){

    var listOfMovies = [];

    function Movie(title, genre, length){

        this.title = title;
        this.genre = genre;
        this.length = length;
    }
    Movie.prototype.getMovieData = function (){

        return this.name + ", " + this.genre + ", " + this.length;
    }

    function createMovie(title, genre, length) {


        return new Movie(title, genre, length);
    }

    function addMovieToList(movie) {

        listOfMovies.push(movie);


    }

    return {
        createMovie: createMovie,
        addMovieToList: addMovieToList
    }


})()