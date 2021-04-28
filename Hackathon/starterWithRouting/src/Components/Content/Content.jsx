import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../Home/Home';
import Schedule from '../Schedule/Schedule';
import SignUp from '../SignUp/SignUp';

const Content = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/schedule" component={Schedule}/>
                <Route path="/signup" component={SignUp}/>
            </Switch>
        </main>
    );
}

export default Content;