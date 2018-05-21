var uiModule = (function () {

    function collectData() {

        var titleElement = document.querySelector(".movie-title");
        var genreElement = document.querySelector(".movie-genre");
        var lengthElement = document.querySelector(".movie-length");

        var titleValue = titleElement.value;
        var genreValue = genreElement.value;
        var lengthValue = lengthElement.value;

        return {
            title: titleValue,
            genre: genreValue,
            length: lengthValue
        }
    }

    function updateMovieList(movie) {

        var listOfMovies = document.querySelector(".movie-list");
        listOfMovies.innerHTML += movie.getMovieData() + "<br>";
    }


    return {
        collectData: collectData,
        updateMovieList: updateMovieList,
    }




})()