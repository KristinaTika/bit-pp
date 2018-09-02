import { showsEndpoint, searchEndpoint } from '../shared/constants.js';
import { Show } from '../entities/Show.js';
import { SingleShow } from '../entities/SingleShow.js';


class ShowService {

    fecthShows() {
        return fetch(showsEndpoint)
            .then(res => res.json())
            .then((shows) => {
                return shows.map((s) => {
                    const myShow = new Show(s.id, s.image.medium, s.name, s.rating);
                    return myShow;
                })
            })
    }

    fetchSingleShow(id) {
        let url = `${showsEndpoint}/${id}?embed[]=seasons&embed[]=cast`;
        return fetch(url)
        .then(res => res.json())
            .then(show => {
                let summary = this.sliceSummary(show.summary);
                const mySingleShow = new SingleShow(show.id, show.image.original, show.name, show._embedded.cast, show._embedded.seasons, summary, show.officialSite);
                return mySingleShow;
            }); 
    }

    fetchSearchedShows(input) {
        return fetch(`${searchEndpoint}${input}`)
            .then(res => res.json())
    }

    sliceSummary(sum) {        
        let modifiedSummary = sum.slice(3, sum.length - 4)
        return modifiedSummary; 
    }
}

export const showService = new ShowService();