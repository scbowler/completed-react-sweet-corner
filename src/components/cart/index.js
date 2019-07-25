import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getActiveCart } from '../../actions';
import Money from '../general/money';
import './cart.scss';

class Cart extends Component {
    componentDidMount(){
        this.props.getActiveCart();
    }

    goToProduct(productId){
        this.props.history.push(`/products/${productId}`);
    }

    renderItem = ({each, itemId, name, productId, quantity, thumbnail, total}) => {
        return (
            <tr className="cart-item" key={itemId} onClick={() => this.goToProduct(productId)}>
                <td className="product-image">
                    <img src={thumbnail.url} alt={thumbnail.altText}/>
                </td>
                <td className="product-name">{name}</td>
                <td className="product-cost">
                    <Money>{each}</Money>
                </td>
                <td className="product-quantity">{quantity}</td>
                <td className="product-total">
                    <Money>{total}</Money>
                </td>
            </tr>
        );
    }

    renderMessageRow(message){
        return (
            <tr>
                <td className="center" colSpan="5">{message}</td>
            </tr>
        );
    }

    render(){
        const { cartItems, totals } = this.props;
        const totalCost = totals?.cost || 0;
        const totalItems = totals?.items || 0;
        let itemElements = this.renderMessageRow('Loading Cart items');

        if(cartItems){
            if(cartItems.length){
                itemElements = cartItems.map(this.renderItem);
            } else {
                itemElements = this.renderMessageRow('Cart Empty')
            }
        }

        return (
            <div className="cart">
                <h1 className="center">Cart</h1>

                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th className="header-product">Product</th>
                            <th>Each</th>
                            <th>quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemElements}
                        <tr className="cart-totals">
                            <td colSpan="3">Cart Totals:</td>
                            <td>{totalItems}</td>
                            <td>
                                <Money>{totalCost}</Money>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        cartItems: state.cart.items,
        totals: state.cart.total
    }
}

export default connect(mapStateToProps, {
    getActiveCart: getActiveCart
})(Cart);
