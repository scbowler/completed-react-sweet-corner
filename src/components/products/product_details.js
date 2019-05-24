import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductDetails } from '../../actions';

class ProductDetails extends Component {
    componentDidMount(){
        const { getProductDetails, match: { params } } = this.props;

        getProductDetails(params.product_id);
    }

    render(){
        const { details } = this.props;

        console.log('Product Details:', details);

        return (
            <div className="product-details">
                <h1>{details.name}</h1>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        details: state.products.details
    }
}

export default connect(mapStateToProps, {
    getProductDetails: getProductDetails
})(ProductDetails);
