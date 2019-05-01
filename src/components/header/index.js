import React from 'react';
import Nav from '../nav';
import './header.scss';

export default props => {
    return (
        <div className="header">
            <div className="header-awning"/>
            
            <Nav/>

            <div className="header-logo"/>
            <h1 className="center fancy">We deliver cupcakes for the important events in your life!</h1>
            <div className="header-bottom-bar"/>
        </div>
    );
}
