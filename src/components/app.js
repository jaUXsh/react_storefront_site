import React from 'react';
import Homepage from './homepage/homepage';
import Contact from './contact/contact'
import OurMacaron from './our_macarons/ourMacaron';
import GiftsAndParties from './gifts_and_parties/giftsAndParties';
import Header from './header';
import Footer from './footer';

import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Header />
            <Route exact path="/" component={Homepage} />
            <Route path="/our-macarons" component={OurMacaron} />
            <Route path="/gifts-and-parties" component={GiftsAndParties} />
            <Route path="/contact" component={Contact} />
            <Footer />
        </div>
    );
};

export default App;
