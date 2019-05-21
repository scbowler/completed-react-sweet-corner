import React, { Component } from 'react';
import './products.scss';

class Products extends Component {
    componentDidMount(){
        console.log('Products Component Mounted');
    }

    render(){
        return (
            <div className="products">
                <h1 className="center">Shop Our Cupcakes</h1>
            </div>
        );
    }
}

export default Products;
