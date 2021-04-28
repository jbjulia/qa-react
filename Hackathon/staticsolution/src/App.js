import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';
import Content from './CommonComponents/Content';

const App = () => (
    <Router>
        <main>
            <Header/>
            <Content/>
            <Footer/>
        </main>
    </Router>
)

export default App;
