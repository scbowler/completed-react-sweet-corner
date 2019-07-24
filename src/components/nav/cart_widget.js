import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartWidget extends Component {
    render(){
        return (
            <li className="cart-widget">
                <Link to="/cart">
                    <i className="material-icons">shopping_cart</i>
                    <span className="cart-item-count">20</span>
                </Link>
            </li>
        );
    }
}

export default CartWidget;
