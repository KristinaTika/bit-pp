import React, { Component } from 'react';
import { showService } from '../../services/showService';
import Cast from '../components/singleshow/Cast';
import Seasons from '../components/singleshow/Seasons';
import './SingleShow.css';

class SingleShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: {},
        }
    }

    componentDidMount() {
        return showService.fetchSingleShow(this.props.match.params.id)
            .then(res => this.setState({ show: res }))
    }

    render() {

        const { cast, image, name, seasons, summary, site } = this.state.show;

        let crew = 
        <div className="loader">
            <div className="stick1"></div>
            <div className="stick2"></div>
            <div className="stick3"></div>
            <div className="stick4"></div>
        </div>;

        if (cast && cast.length > 0) {
            crew = cast.map((s, i) => <Cast actor={s.person.name} character={s.character.name} key={i} />
        )};
    
        let ses = 
        <div className="loader">
            <div className="stick1"></div>
            <div className="stick2"></div>
            <div className="stick3"></div>
            <div className="stick4"></div>
        </div>
        
        if (seasons && seasons.length > 0) {
            ses = seasons.map((s, i) => 
            <Seasons
                key={i}
                numEpisodes={s.episodeOrder}
                season={s.number}
                premDate={s.premiereDate}
                endDate={s.endDate}
            />
        )};

        return (
            <div className="single-show-container">
                <h1>{name} </h1>
                <div className="img">
                    <img src={image} alt={name} />
                </div>
                <h2>
                    Official site: <a href={site}>{site}</a>
                </h2>
                <div className="cast-seasons-container">
                    <ol>
                        <h2>Cast:</h2> 
                        {crew}
                    </ol>
                    <div>
                        {ses}
                    </div>
                </div>
                <div id="sum">
                    <h2>Summary:</h2> 
                    {summary}
                </div>
            </div>
        );
    }
}

export default SingleShow;