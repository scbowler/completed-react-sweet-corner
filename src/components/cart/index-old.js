import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart } from '../../actions';
import './cart.scss';

class Cart extends Component {
    componentDidMount(){
        this.props.getCart();
    }

    render(){
        return (
            <div className="center">
                <h1>Cart</h1>
            </div>
        );
    }
}

export default connect(null, {
    getCart: getCart
})(Cart);
