import React, { Component } from 'react';

class GuestOrderDetails extends Component {
    render(){
        console.log('Props:', this.props);
        return (
            <div>
                <h1 className="center">Guest Order Details</h1>
            </div>
        );
    }
}

export default GuestOrderDetails;
