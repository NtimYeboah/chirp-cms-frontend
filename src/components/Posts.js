/**
 * Created by ntimobedyeboah on 4/14/17.
 */
import React, { Component } from 'react';
import PostItem from './PostItem';
import PostsUnavailable from './PostsUnavailable';
import CreatePostButton from './CreatePostButton';
import Post from './../services/post';

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        Post.getAll()
            .then(posts => {
                this.setState({ posts });
            })
            .catch(err => {
                throw new Error(err);
            });
    }

    render() {
        let posts;

        if (! this.state.posts) return (<PostsUnavailable />);

        posts = this.state.posts.map(post => {
            return (
                <PostItem details={ post } key={ post.id } />
            )
        });

        return (
            <section className="section">
                <div className="container">
                    <CreatePostButton />
                    <div className="columns is-multiline">
                        { posts }
                    </div>
                </div>
            </section>
        )
    }
}

export default Posts;