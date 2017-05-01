/**
 * Created by ntimobedyeboah on 4/27/17.
 */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import PostDetails from './../src/components/PostDetails';

describe('PostDetails rendered output', () => {
    let mountedPostDetailsComponent;
    const match = {
        id: 1,
        title: 'Lorem ipsum',
        content: 'Dolor sit amet',
        slug: 'lorem-ipsum'
    };

    const postDetails = () => {
        if (! mountedPostDetailsComponent) {
            mountedPostDetailsComponent = shallow(<MemoryRouter><PostDetails match={ match } /></MemoryRouter>);
        }

        return mountedPostDetailsComponent;
    };

    beforeEach(() => {
        mountedPostDetailsComponent = undefined;
    });

    test('it should renders with match prop', () => {
        expect(postDetails().props().children.props.match.id).toBe(1);
        expect(postDetails().props().children.props.match.title).toBe('Lorem ipsum');
        expect(postDetails().props().children.props.match.content).toBe('Dolor sit amet');
        expect(postDetails().props().children.props.match.slug).toBe('lorem-ipsum');
    });
});