/**
 * Created by ntimobedyeboah on 4/15/17.
 */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import Posts from './../src/components/Posts';
import CreatePostButton from './../src/components/CreatePostButton';
import PostsUnavailable from './../src/components/PostsUnavailable';

describe('Post snapshot', () => {
    test('It should render posts component and take a snapshot', () => {
        const component = renderer.create(<Posts />);

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Post rendered output', () => {

    describe('Post component rendered with no state', () => {
        let mountedPostsComponent;

        const posts = () => {
            if (! mountedPostsComponent) {
                mountedPostsComponent = mount(<Posts />);
            }

            return mountedPostsComponent;
        };

        beforeEach(() => {
            mountedPostsComponent = undefined;
        });

        test('it always renders section as the enclosing tag', () => {
            const section = posts().find('section');

            expect(section.length).toBe(1);
        });

        test('it should have an initial state of posts being undefined', () => {
            expect(posts().state().posts).not.toBeDefined();
        });

        test('it renders PostsUnavailable component', () => {
            expect(posts().find(PostsUnavailable).length).toBe(1);
        });

        test('PostsUnavailable component does not receive any prop', () => {
            const postsUnavailable = posts().find(PostsUnavailable);

            expect(Object.keys(postsUnavailable.props()).length).toBe(0);
        });


        test('it should set the state of posts', () => {
            const posts = shallow(<Posts />);

            const postsBlog = [
                {
                    id: 1234,
                    title: 'Lorem ipsum',
                    content: 'Dolor sit amet',
                    slug: 'lorem-ipsum'
                },
                {
                    id: 1234566,
                    title: 'A title',
                    content: 'The content of post',
                    slug: 'a-title'
                }
            ];

            posts.setState({ posts: postsBlog });

            expect(posts.state()).toBeDefined();
            expect(posts.state().posts.length).toEqual(2);
        });
    });
});

