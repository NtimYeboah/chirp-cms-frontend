/**
 * Created by ntimobedyeboah on 4/21/17.
 */
import React, { Component } from 'react';
import Post from './../services/post';

class PostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = { post: null }
    }

    componentDidMount() {
        Post.getOne(this.props.match.params.cuid)
            .then(post => {
                this.setState({ post });
            })
            .catch(err => {
                throw new Error(err);
            });
    }

    render() {
        const { post } = this.state;

        if (! post) return (<div>Loading...</div>);

        return (
            <section className="section">
                <div className="container">
                    <div className="content">
                        <div className="columns">
                            <div className="column is-8 is-offset-2">
                                <h3 className="has-text-centered">{ post.title }</h3>
                                <p>{ post.content }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PostDetails;