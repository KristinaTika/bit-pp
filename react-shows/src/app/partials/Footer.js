import React from 'react';
import './Footer.css';

const Footer = (props) => {

    return (
        <footer>
            {new Date().getFullYear()} &#169; copyright by Kristina Butkovic
        </footer>
    );
};

export default Footer;