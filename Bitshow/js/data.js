var dataModule = (function () {

    class Show {
        constructor(name, image) {

            this.name = name;
            this.image = image
        }
    }

    function createShow(name, image) {
        return new Show(name, image);
    }

    function fetchShows(successHandler) {
        const request = $.ajax("http://api.tvmaze.com/shows");

        request.done(function(response){
            response.sort(function(curr, next){
                curr = curr.rating.average;
                next = next.rating.average;
                return next - curr;
            } );

            const top50 = response.slice(0, 50);
            var showList=[];
            top50.forEach(function(element){
                showList.push(element);
            })
                


            successHandler([]);
        });
        
    }


    return {
        fetchShows: fetchShows

    }

})()

