import React from 'react';
import Homepage from './homepage';
import Contact from './contact'
import OurMacaron from './ourMacaron';
import GiftsAndParties from './giftsAndParties';

import {Route} from 'react-router-dom';

const App = () => {
    return (
            <div>
                <Route exact path="/" component={Homepage}/>
                <Route path="/our-macarons" component={OurMacaron}/>
                <Route path="/gifts-and-parties" component={GiftsAndParties}/>
                <Route path="/contact" component={Contact}/>
            </div>
    );
};

export default App;
