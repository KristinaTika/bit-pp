
(function () {

    function Genre(name) {
        this.name = name;
    }
    Genre.prototype.getData = function () {
        const firstLetter = this.name[0].toUpperCase();
        const lastLetter = this.name[this.name.length - 1].toUpperCase();
        const output = firstLetter + lastLetter;
        
        return output;
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length + "min";
    }
    Movie.prototype.getMovieData = function () {
        var output = "";

        return output = (`${this.title}, ${this.length}, ${this.genre.getData()}`)
    }

    function Program(date) {
        const inputDate = new Date(date);
        this.date = (`${inputDate.getMonth() + 1}, ${inputDate.getDate()}, ${inputDate.getFullYear()}`)
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
        let totalLengthOfMovies = 0;

        this.listOfMovies.forEach(function (movie) {
            totalLengthOfMovies += parseInt(movie.length);
        });

        return totalLengthOfMovies;
    }
    Program.prototype.getProgramData = function () {
        let output = "";
        let programData = "";

        this.listOfMovies.forEach(function (movie) {
            programData += (`${"\t" + movie.getMovieData() + "\n" + "\t"}`)
        });
        return output = (`${this.date}, ${"program duration:" + this.calcTotalLength()}, ${"\n" +"\t" + programData}`)
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
        let output = "";
        let festivalData = "";

        this.listOfPrograms.forEach(function (program) {
            festivalData += program.getProgramData() + "\n" + "\t";
        })
        output = (`${this.name} ${" has " + this.listOfPrograms.length + " movie titles " + "\n" + "\t"} ${festivalData}`)

        return output;
    }

    function createMovie(title, genre, length) {
        const objectGenre = new Genre(genre);
        const createdMovie = new Movie(title, objectGenre, length);

        return createdMovie;
    }

    function createProgram(date) {
        const createdProgram = new Program(date);

        return createdProgram;
    }

    const action = new Genre ("action")
    const drama = new Genre ("drama");
    
    const walkingDead = createMovie("The Walking Dead", "drama", "50");
    const fear = createMovie("Fear The Walking Dead", "drama", "60");
    const grey = createMovie("Grey's Anatomy", "drama", "45");
    const station = createMovie("Station 19", "action", "45");

    const dayOne = createProgram("10/10/2018");
    const dayTwo = createProgram("11/10/2018");
    
    const tikijada = new Festival("Tikijada");

    dayTwo.addMovie(grey);
    dayTwo.addMovie(station);
    dayOne.addMovie(walkingDead);
    dayOne.addMovie(fear);

    tikijada.addProgram(dayTwo);
    tikijada.addProgram(dayOne);


    console.log(tikijada.getFestivalData());
})()