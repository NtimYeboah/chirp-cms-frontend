/**
 * Created by ntimobedyeboah on 4/8/17.
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Nav';
import Posts from './components/Posts';
import CreatePostForm from './components/CreatePostForm';
import PostDetails from './components/PostDetails';

class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route component={ Navbar }/>
                    <Route exact path="/posts" component={ Posts } />
                    <Route path="/posts/create" component={ CreatePostForm } />
                    <Route path="/posts/:slug" component={ PostDetails }/>
                </div>
            </Router>
        )
    }
}

export default Routes;

