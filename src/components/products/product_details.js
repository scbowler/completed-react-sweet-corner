import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearProductDetails, getProductDetails } from '../../actions';
import Money from '../general/money';
import './product_details.scss';

class ProductDetails extends Component {
    componentDidMount(){
        const { getProductDetails, match: { params } } = this.props;

        getProductDetails(params.product_id);
    }

    componentWillUnmount(){
        this.props.clearProductDetails();
    }

    render(){
        const { details } = this.props;

        if(!details){
            return <h1 className="details-loading">Loading product</h1>;
        }

        const { caption, cost, description, image, name, pid } = details;

        return (
            <div className="product-details">
                <div className="col s6 product-image center">
                    <img src={image.url} alt={image.altText} />
                </div>
                
                <div className="col s6 product-info">
                    <h1>{name}</h1>
                    <p className="caption fancy">{caption}</p>
                    <h2>Description</h2>
                    <p>{description}</p>
                    <h1 className="right"><Money>{cost}</Money></h1>
                </div>
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
    clearProductDetails: clearProductDetails,
    getProductDetails: getProductDetails
})(ProductDetails);
