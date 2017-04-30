/**
 * Created by ntimobedyeboah on 4/30/17.
 */
import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import PostItem from './../src/components/PostItem';

describe('PostItem snapshot', () => {
    test('it should render PostItem component and take a snapshot', () => {
        const post = { id: 1234, title: 'Lorem ipsum', content: 'Dolor sit amet', slug: 'lorem-ipsum' };

        let component = renderer.create(
            <MemoryRouter>
                <PostItem details={ post } key={ post.id } />
            </MemoryRouter>
        );

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('PostItem rendered output', () => {
    let mountedPostItemComponent;
    const post = { id: 1234, title: 'Lorem ipsum', content: 'Dolor sit amet', slug: 'lorem-ipsum' };


    const postItem = () => {
        if (! mountedPostItemComponent) {
            mountedPostItemComponent = shallow(
                <MemoryRouter>
                    <PostItem details={ post } key={ post.id } />);
                </MemoryRouter>
            );
        }

        return mountedPostItemComponent;
    };

    beforeEach(() => {
        mountedPostItemComponent = undefined;
    });

    test('it should set PostItem props', () => {
        expect(postItem().props().children[0].props.details.title).toBe('Lorem ipsum');
        expect(postItem().props().children[0].props.details.content).toBe('Dolor sit amet');
        expect(postItem().props().children[0].props.details.slug).toBe('lorem-ipsum');
    })
});