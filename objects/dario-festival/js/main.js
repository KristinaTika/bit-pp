
var mainModule = (function(data, ui){

    var createMovieButton = document.querySelector(".add-movie");
    createMovieButton.addEventListener("click", function(){
         // collect data
    var formData = uiModule.collectData();
    // create movie, add to list
    var createdMovie = data.createMovie(formData.title, formData.genre, formData.length);
    data.addMovieToList(createdMovie);
    //update movie list (ui)
    ui.updateMovieList(createdMovie);
    })

})(dataModule, uiModule) 