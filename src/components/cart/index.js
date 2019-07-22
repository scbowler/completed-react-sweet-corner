import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getActiveCart } from '../../actions';
import './cart.scss';

class Cart extends Component {
    componentDidMount(){
        this.props.getActiveCart();
    }
    
    render(){
        return (
            <div>
                <h1 className="center">Cart</h1>
            </div>
        );
    }
}

export default connect(null, {
    getActiveCart: getActiveCart
})(Cart);
