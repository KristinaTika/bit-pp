import { Show } from './Show';

export class SingleShow extends Show {
    constructor(id, image, name, cast, seasons, summary, site) {
        super(id, image, name);

        this.cast = cast;
        this.seasons = seasons;
        this.summary = summary;
        this.site = site;
    }
}