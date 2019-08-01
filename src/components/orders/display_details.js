import React, { Component } from 'react';
import Money from '../general/money';

class DisplayDetails extends Component {

    renderItemRow({ each, id, product, quantity, total }) {
        return (
            <tr key={id}>
                <td>
                    <img src={product.thumbnail.url} alt={product.thumbnail.altText} />
                </td>
                <td className="product-name">{product.name}</td>
                <td><Money>{each}</Money></td>
                <td>{quantity}</td>
                <td><Money>{total}</Money></td>
            </tr>
        );
    }

    renderOrderDetails(guest) {
        const { order } = this.props;

        if (!order) {
            return <h2 className="center">Loading Order Information...</h2>
        }

        return (
            <div className="details-container">
                <div className="center details-header">
                    <h1>Status: <span className="yellow-text">{order.status}</span></h1>
                    <h2>Order #: <span className="red-text">{order.id}</span></h2>
                    <p><small><em>{ guest && '** Save order number to check order status in the future **'}</em></small></p>
                </div>

                <p><strong>Order Placed:</strong> {new Date(order.createdAt).toLocaleString()}</p>
                <p><strong>Order Total Items:</strong> {order.itemCount}</p>
                <p><strong>Order Total Cost:</strong> <Money>{order.total}</Money></p>

                <h2>Order Items:</h2>

                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th className="header-product-name">Product</th>
                            <th>Each</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.items.map(this.renderItemRow)}
                        <tr className="cart-totals">
                            <td colSpan="3">Order Totals:</td>
                            <td>{order.itemCount}</td>
                            <td><Money>{order.total}</Money></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    render(){
        const { guest = false } = this.props;

        return (
            <div className="order-details">
                <h1 className="center"><span className="teal-text">{guest && 'Guest'}</span> Order Details</h1>
                {this.renderOrderDetails(guest)}
            </div>
        );
    }
}

export default DisplayDetails;
