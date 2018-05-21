var uiModule = (function () {

    function collectData() {

        var titleInput = document.querySelector(".movie-title");
        var genreInput = document.querySelector(".movie-genre");
        var lengthInput = document.querySelector(".movie-length");

        var title = titleInput.value;
        var genre = genreInput.value;
        var length = lengthInput.value;
        
        return {
            title: title,
            genre: genre,
            length: length
        }
    }

    function updateMovieList(movie) {

        var listOfMovies = document.querySelector(".movie-list");
        var newElement = document.createElement("li");
        newElement.className="list-of-movies";
        newElement.textContent = movie.getMovieData();
        listOfMovies.appendChild(newElement);
        var totalLength = document.createElement("div");
        totalLength.className="length-of-all-movies";
        totalLength.textContent += dataModule.calcTotalLength();
        newElement.appendChild(totalLength);
    }

    return {
        collectData: collectData,
        updateMovieList: updateMovieList
    }

})()