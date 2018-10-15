import React, {Component} from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'

import home from '../views/home'
import Login from '../views/login'
import Footer from '../components/footer'


class Router extends Component {
    constructor(props) {
        super(props)
    }

    state = {};

    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path='/' component={home} />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default Router