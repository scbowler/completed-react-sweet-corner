import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './sign_in';
import SignOut from './sign_out';
import auth from '../../hoc/auth';
import './account.scss';

class AccountRoutes extends Component {
    render(){
        const { path } = this.props.match;

        return (
            <Switch>
                <Route path={`${path}/sign-in`} component={auth(SignIn, '/products', false)} />
                <Route path={`${path}/sign-out`} component={SignOut} />
            </Switch>
        );
    }
}

export default AccountRoutes;
