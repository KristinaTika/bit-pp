import React from 'react';
import { Link } from 'react-router-dom';
import '../partials/Header.css';

const Search = (props) => {

    let show = props.results.name;

    return (
        <li >
            <Link to={"/shows/" + props.results.id} className="search-results">{show}</Link>
        </li>
    );
};

export default Search;