/**
 * Created by ntimobedyeboah on 4/19/17.
 */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';

import CreatePostButton from './../src/components/CreatePostButton';

describe('CreatePostButton test', () => {
   test('it should render component and take snapshot', () => {
       const component = renderer.create(<MemoryRouter><CreatePostButton /></MemoryRouter>);

       let tree = component.toJSON();
       expect(tree).toMatchSnapshot();
   });
});

describe('CreatePostButton rendered output', () => {
   test('it should a link', () => {
       const createPostButton = mount(<MemoryRouter><CreatePostButton /></MemoryRouter>);

       expect(createPostButton.find(Link).text()).toEqual('Add A Post');
   });
});