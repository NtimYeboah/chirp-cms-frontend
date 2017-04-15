/**
 * Created by ntimobedyeboah on 4/15/17.
 */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Posts from './../src/components/Posts';

describe('Post snapshot', () => {
    test('It should render posts component and take a snapshot', () => {
        const component = renderer.create(<Posts />);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Post rendered output', () => {
    test('It should render Post component text', () => {
        const posts = shallow(<Posts />);

        expect(posts.find('h1').text()).toEqual('Post component');
    });
});

