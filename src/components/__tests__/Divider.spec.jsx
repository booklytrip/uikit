import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Divider from '../Divider';

describe('Divider', () => {
    it('renders without crashing', () => {
        mount(<Divider />);
    });

    describe('Snapshots', () => {
        it('renders with vertical divider', () => {
            const rendered = renderer.create(<Divider vertical />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders with horizontal divider', () => {
            const rendered = renderer.create(<Divider horizontal />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders hidden divider', () => {
            const rendered = renderer.create(<Divider hidden />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders fitted divider', () => {
            const rendered = renderer.create(<Divider fitted />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});
