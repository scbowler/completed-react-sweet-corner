import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGuestOrderDetails } from '../../actions';
import { queryToObject } from '../../helpers';
import DisplayDetails from './display_details'
import './orders.scss';

class GuestOrderDetails extends Component {
    componentDidMount(){
        const { getGuestOrderDetails, location, match } = this.props;
        const orderId = match.params.order_id;
        const query = queryToObject(location.search);

        getGuestOrderDetails(orderId, query.email);
    }

    render(){

        return <DisplayDetails {...this.props} guest />
    }
}

function mapStateToProps({orders}){
    return {
        order: orders.details
    }
}

export default connect(mapStateToProps, { getGuestOrderDetails })(GuestOrderDetails);
