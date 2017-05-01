/**
 * Created by ntimobedyeboah on 4/16/17.
 */
import React, { Component } from 'react';
import MDEditor from 'react-markdown-editor-hybrid';
import Post from '../services/post';
import 'font-awesome/css/font-awesome.css';
import MDEditorStyles from '../mdeditor-styles';


class CreatePostForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            content: '',
            title: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // Since the MDEditor's value is the event param
        // we have to check the type of the event param
        // in order to update the appropriate state
        this.setState({
            title: event && event.target && event.target.value ? event.target.value : this.state.title,
            content: typeof event !== 'object' ? event : this.state.content
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        Post.save(this.state).then(post => {
            //todo: Redirect to post details view

        })
        .catch(err => {
            throw new Error(err);
        });
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <form onSubmit={ this.handleSubmit }>
                                <div className="field">
                                    <div className="field-body">
                                        <div className="field">
                                            <label className="label">Title</label>
                                            <div className="control">
                                                <input value={ this.state.title } className="input" type="text"
                                                       placeholder="Title" onChange={ this.handleChange } />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="field" style={{marginTop:5 + '%' }}>
                                    <div className="field-body">
                                        <div className="field">
                                            <label className="label">Content</label>
                                            <MDEditor
                                                value={ this.state.content }
                                                onChange={ this.handleChange }
                                                textAreaStyle={ MDEditorStyles.textAreaStyle }
                                                buttonStyle={ MDEditorStyles.buttonStyle }/>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="field-body">
                                        <div className="field">
                                            <button type="submit" className="button is-primary" id="submit" style={{float:'right'}}>Save Post</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default CreatePostForm;