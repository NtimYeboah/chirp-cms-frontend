/**
 * Created by ntimobedyeboah on 4/27/17.
 */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import CreatePostForm from './../src/components/CreatePostForm';

describe('CreatePostForm snapshot', () => {
    test('it should render CreatePostForm component and take a snapshot', () => {
        const component = renderer.create(<CreatePostForm />);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('CreatePostForm rendered output', () => {
    let mountedCreatePostFormComponent;

    const createPostForm = () => {
        if (! mountedCreatePostFormComponent) {
            mountedCreatePostFormComponent = mount(<CreatePostForm />);
        }

        return mountedCreatePostFormComponent;
    };

    beforeEach(() => {
        mountedCreatePostFormComponent = undefined;
    });

    test('it should render section as the enclosing tag', () => {
        const section = createPostForm().find('section');

        expect(section.length).toBe(1);
    });

    test('it should render MDEditor component', () => {
        expect(createPostForm().find(MDEditor).length).toBe(1);
    });

    test('it should have an initial state of content and title empty', () => {
        expect(createPostForm().state().title).toBe('');
        expect(createPostForm().state().content).toBe('');
    });

    test('it should set the state of content and title when submitted', () => {
        const input = createPostForm().find('input');
        input.node.value = 'Lorem ipsum';
        input.simulate('change', input);

        const markdownEditor = createPostForm().find('textarea');
        markdownEditor.node.value = 'Dolor sit amet';
        markdownEditor.simulate('change', markdownEditor);

        createPostForm().find('button#submit').simulate('click');

        expect(createPostForm().state().title).toEqual('Lorem ipsum');
        expect(createPostForm().state().content).toEqual('Dolor sit amet');
    });
});