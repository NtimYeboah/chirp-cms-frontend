/**
 * Created by ntimobedyeboah on 4/15/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import UserProfile from './UserProfile';

class PostItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="column is-4">
                <Link to={ `posts/${ this.props.details.slug }`}>
                <div className="card">
                    <div className="card-content">
                        <p className="title is-4">{ this.props.details.title }</p>
                        <div className="content post-box">
                            <ReactMarkdown source={ this.props.details.content } />
                        </div>
                        <UserProfile />
                    </div>
                </div>
                </Link>
            </div>
        )
    }
}

export default PostItem;