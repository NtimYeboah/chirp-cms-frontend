/**
 * Created by ntimobedyeboah on 4/19/17.
 */
import React from 'react';
import renderer from 'react-test-renderer';

import UserProfile from './../src/components/UserProfile';

describe('UserProfile snapshot', () => {
    test('it should render component and take snapshot', () => {
        const component = renderer.create( <UserProfile />);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});