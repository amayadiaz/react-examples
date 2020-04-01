import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import Jobs from './Jobs';
import Contacts from './Contacts';

import './Styles.css';

function App() {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/jobs" component={Jobs} />
                    <Route exact path="/contacts" component={Contacts} />
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App;