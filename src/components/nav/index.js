import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

export default props => {
    return (
        <ul className="main-nav">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
}
