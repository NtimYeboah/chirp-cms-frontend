/**
 * Created by ntimobedyeboah on 4/8/17.
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Nav';
import Posts from './components/Posts';

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route component={ Navbar }/>
                    <Route path="/posts" component={ Posts } />
                </div>
            </Router>
        )
    }
}

module.exports = Routes;

