var dataModule = (function () {

    var listOfMovies = [];

    function Movie(title, genre, length) {

        this.title = title;
        this.genre = genre;
        this.length = length;
    }
    Movie.prototype.getMovieData = function () {

        return this.title + ", " + this.genre + ", " + this.length;
    }

    function createMovie(title, genre, length) {

        return new Movie(title, genre, length);
    }

    function addMovieToList(movie) {

        listOfMovies.push(movie);
    }

    function calcTotalLength() {
        var totalLengthOfMovies = 0;
        listOfMovies.forEach(function (movie) {
            totalLengthOfMovies += parseInt(movie.length);
        });
        return "Total length: " + totalLengthOfMovies + "min";
    }

    return {
        createdMovie: createMovie,
        addMovieToList: addMovieToList,
        calcTotalLength: calcTotalLength
    }

})()