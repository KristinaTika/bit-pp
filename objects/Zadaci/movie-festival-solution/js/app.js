const movies = [];
let festival = new Festival();

const createMovie1 = $(".create-movie");
$(createMovie1).on("click", function () {
    createMovie1()
});

const createProgram1 = $(".create-program");
$(createProgram1).to("click", function () {
    createProgram1();
});
const addMovie = $(".add-movie");
$(addMovie).to("click", function () {
    addMovieToProgram();
});

function createMovie() {
    const titleElement = $('.movie-title');
   const lengthElement = $('.movie-length');
    const genreSelectElement = $('.genre-select');
    let genreOptionElement = genreSelectElement.options[genreSelectElement.selectedIndex]
    const errorElement = $('.movie-error');
    const moviesElement = $('.movie-list');
    const moviesSelectElement = $('.movie-select');

    let title = titleElement.value.trim();
    let length = parseInt(lengthElement.value.trim());
    const genre = genreOptionElement.value.trim();

    const isValid = title && length && genre;

   
    if (!isValid) {
       
        errorElement.textContent = "All fields are required";

        return;
    }
    
    const genreObj = new Genre(genre);
    const movie = new Movie(title, genreObj, length);

    if (movies.hasElement(movie)) {
        errorElement.textContent = "Movie already exists in a movie list!";
        return;
    }

    errorElement.textContent = "";

    movies.push(movie);

    let movieListHTML = "<ul>";
    let moviesSelectOptionsHTML = '<option value="none">-</option>'

    for (let i = 0; i < movies.length; i++) {
        let movie = movies[i];
        movieListHTML += "<li>" + movie.getData() + "</li>"
        moviesSelectOptionsHTML += '<option value="' + i + '">' + movie.title + '</option>'
    }

    movieListHTML += "</ul>"

    moviesElement.innerHTML = movieListHTML;
    moviesSelectElement.innerHTML = moviesSelectOptionsHTML;

    titleElement.value = "";
    lengthElement.value = "";
    genreSelectElement.selectedIndex = 0;
}

function createProgram() {
    const dateElement = $('.program-date');
    const errorElement = $('.program-error');
    const programDate = dateElement.value;

    if (!programDate) {
        errorElement.textContent = "Please select date";
        return;
    }

    errorElement.textContent = "";

    const program = new Program(programDate);

    if (festival.listOfPrograms.hasElement(program)) {
        errorElement.textContent = "Program for date already exists!";
        return;
    }

    errorElement.textContent = "";

    festival.addProgram(program);

    refreshMoviesAndProgramList()

    dateElement.value = "";
}

function addMovieToProgram() {
    const movieSelectElement = $('.movie-select');
    let movieOptionElement = movieSelectElement.options[movieSelectElement.selectedIndex];

    let programSelectElement = $('.program-select');
    let programOptionElement = programSelectElement.options[programSelectElement.selectedIndex];

    const errorElement = $('.assign-error');    

    const movieIndex = movieOptionElement.value;
    const programIndex = programOptionElement.value;

    if (!movieIndex && !programIndex) {
        errorElement.textContent = "Select program and movie";
        return;        
    }

    errorElement.textContent = "";

    const selectedMovie = movies[movieIndex];
    const selectedProgram = festival.listOfPrograms[programIndex];

    selectedProgram.addMovie(selectedMovie);

    refreshMoviesAndProgramList();

  
    movieSelectElement.selectedIndex = 0;
    programSelectElement.selectedIndex = 0;
}

function refreshMoviesAndProgramList() {
    const programListElement = $('.program-list');
    const programSelectElement = $('.program-select');

    const programListHTML = "<ul>"
    const programSelectOptionsHTML = '<option value="">-</option>'

    const programList = festival.listOfPrograms;
    for (let i = 0; i < programList.length; i++) {
        let program = programList[i];
        programListHTML += "<li>" + program.getData() + "</li>";
        programSelectOptionsHTML += '<option value="' + i + '">' + program.getData() + '</option>'
    }

    programListHTML += "</ul>";

    programListElement.innerHTML = programListHTML;
    programSelectElement.innerHTML = programSelectOptionsHTML;
}
