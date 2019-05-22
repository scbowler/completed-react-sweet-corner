import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllProducts } from '../../actions';
import './products.scss';

class Products extends Component {
    componentDidMount(){
        this.props.getAllProducts();
    }

    render(){
        const { products } = this.props;

        console.log('Products from render:', products);

        return (
            <div className="products">
                <h1 className="center">Shop Our Cupcakes</h1>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        products: state.products.list
    };
}

export default connect(mapStateToProps, {
    getAllProducts: getAllProducts
})(Products);
