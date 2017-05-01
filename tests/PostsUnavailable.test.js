/**
 * Created by ntimobedyeboah on 4/19/17.
 */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import PostsUnavailable from './../src/components/PostsUnavailable';

describe('PostsUnavailabe Snapshot', () => {
    test('it render PostsUnavailable component and take snapshot', () => {
        const component = renderer.create(<PostsUnavailable />);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});


describe('PostUnavailable rendered output', () => {
    test('it should display message to user', () => {
        const component = shallow(<PostsUnavailable />);

        expect(component.find('p.card-header-title').text()).toEqual('No Post Available');
        expect(component.find('div.content').text()).toEqual('If you are the admin, add posts.');
    });
});

