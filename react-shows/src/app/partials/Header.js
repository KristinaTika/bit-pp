import React, { Component, Fragment } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { showService } from '../../services/showService';
import Search from '../components/Search';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
        }

        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
        showService.fetchSearchedShows(e.target.value)
            .then(response => this.setState({ results: response }))
    }

    render() {

        let res = <div></div>

        let { results } = this.state;
        if (results && results.length > 0) {

            res = results.map(searchedShow => <Search results={searchedShow.show} key={searchedShow.show.id} />)
        }
        return (
            <Fragment>
                <header>
                    <h2><Link to="/shows" className="app-title">React Shows </Link></h2>
                    <nav>
                        <input type="search" placeholder="Search the shows..." onChange={this.handleSearch} />
                    </nav>
                </header >
                <ol>
                    {res}
                </ol>
            </Fragment>
        );
    }
}

export default Header;