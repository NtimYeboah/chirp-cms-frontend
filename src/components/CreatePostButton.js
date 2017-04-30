/**
 * Created by ntimobedyeboah on 4/16/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreatePostButton extends Component {
    render() {
        return (
            <div className="columns">
                <div className="column is-12">
                    <nav>
                        <div className="container block">
                            <div className="level-right">
                                <Link className="button is-primary" to="/posts/create">Add A Post</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        )
    }
}

export default CreatePostButton;