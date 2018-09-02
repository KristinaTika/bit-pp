import React, { Component } from 'react';
import { showService } from '../../services/showService';
import ShowItem from '../components/tvshows/ShowItem';
import './TVShows.css';


class TVShows extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shows: [],
        }
    }

    componentDidMount() {
        return showService.fecthShows()
            .then((res) => {
                this.setState({shows: res})
            })
            .catch(message => {
                console.log(message)
                alert("Failed to load posts.")
            });
    }

    render() {
        const { shows } = this.state;

        let displayShows = 
            <div className="loader">
                <div className="stick1"></div>
                <div className="stick2"></div>
                <div className="stick3"></div>
                <div className="stick4"></div>
            </div>;
            
        if (shows && shows.length > 0) {
            displayShows = shows.map((s, i) => <ShowItem key={i} show={s} />)
        }

        return [
            <h1 key="popular-shows"> Popular shows </h1>,
            <ul key="list-of-shows">
                {displayShows}
            </ul>
        ];
    }
}

export default TVShows;