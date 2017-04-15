/**
 * Created by ntimobedyeboah on 4/14/17.
 */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Navbar from './../src/components/Nav';

describe('Navbar snapshot', () => {
    test('It should render the navbar and take a snapshot', () => {
        const component = renderer.create(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Navbar rendered output', () => {
    test('Navbar renders CHIRP in h3', () => {
        const navbar = shallow( <Navbar />);

        expect(navbar.find('h3').text()).toEqual('CHIRP');
        expect(navbar.find('h3').text()).not.toEqual('CHIPR');

    });

    test('Navbar renders 3 children anchor tags', () => {
        const navbar = shallow( <Navbar />);

        expect(navbar.find('div.nav-left').children()).toHaveLength(3);
        expect(navbar.find('div.nav-left').children()).not.toHaveLength(4);
        expect(navbar.find('div.nav-left').childAt(0).text()).toEqual('CHIRP');
        expect(navbar.find('div.nav-left').childAt(0).text()).not.toEqual('CHIPR');
    });
});

describe('Navigating with the rendered navbar menu items', () => {
    test('Navigates to home page when home menu item is clicked', () => {
        const navbar = shallow(<Navbar />);

        navbar.find('div.nav-left').childAt(1).simulate('click');
        expect(location.pathname).toEqual('/');
    });
});