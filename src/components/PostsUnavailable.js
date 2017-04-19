/**
 * Created by ntimobedyeboah on 4/16/17.
 */
import React, { Component } from 'react';

class PostsUnavailable extends Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-12">
                            <div className="card">
                                <header className="card-header">
                                    <p className="card-header-title">
                                        No Post Available
                                    </p>
                                    <a className="card-header-icon">
                                        <span className="icon">
                                            <i className="fa fa-angle-down"></i>
                                        </span>
                                    </a>
                                </header>
                                <div className="card-content">
                                    <div className="content">
                                        If you are the admin, add posts.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default PostsUnavailable;