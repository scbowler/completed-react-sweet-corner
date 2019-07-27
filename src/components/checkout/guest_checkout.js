import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../general/form/input';
import './checkout.scss';

class GuestCheckout extends Component {
    handleGuestCheckout(values){
        console.log('Guest Information:', values);
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <div className="guest-checkout">
                <h1 className="center">Guest Checkout</h1>

                <form className="guest-form" onSubmit={handleSubmit(this.handleGuestCheckout)}>
                    <Field component={Input} name="firstName" placeholder="First Name" />
                    <Field color="yellow" component={Input} name="lastName" placeholder="Last Name" />
                    <Field color="teal" component={Input} name="email" placeholder="Email" />

                    <div className="form-actions center mt-3">
                        <button className="btn red">Submit Order</button>
                    </div>
                </form>
            </div>
        );
    }
}

GuestCheckout = reduxForm({
    form: 'guestCheckout'
})(GuestCheckout);

export default GuestCheckout;
