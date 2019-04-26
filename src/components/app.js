import React from 'react';
import { Route } from 'react-router-dom';
import '../assets/css/app.scss';
import About from './about';
import Contact from './contact';
import Footer from './footer';
import Header from './header';
import Home from './home';
import Services from './services';

const App = () => (
    <div className="app">
        <div className="container">
            <Header />

            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            
            <Footer />
        </div>
    </div>
);

export default App;
