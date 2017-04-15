/**
 * Created by ntimobedyeboah on 4/8/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav className="nav has-shadow">
                <div className="container">
                    <div className="nav-left">
                        <a className="nav-item">
                            <h3 className="title">CHIRP</h3>
                        </a>
                        <Link className="nav-item is-tab is-hidden-mobile is-active" to="/">Home</Link>
                        <Link className="nav-item is-tab is-hidden-mobile" to="/posts">Posts</Link>
                    </div>
                    <span className="nav-toggle">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                </div>
            </nav>
        )
    }
}

export default Nav;