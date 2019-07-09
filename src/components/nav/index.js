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
                <Link to="/products">Products</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            {/* <li>
                <Link to="/cart">
                    <i className="material-icons">shopping_cart</i>
                </Link>
            </li> */}
        </ul>
    );
}
