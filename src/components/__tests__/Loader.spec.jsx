import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Loader from '../Loader';

describe('Loader', () => {
    it('renders without crashing', () => {
        mount(<Loader />);
    });

    describe('Snapshots', () => {
        it('renders with custom size', () => {
            const rendered = renderer.create(<Loader size="mini" />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders with text', () => {
            const rendered = renderer.create(<Loader text="Loading" />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders inline', () => {
            const rendered = renderer.create(<Loader inline />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});
