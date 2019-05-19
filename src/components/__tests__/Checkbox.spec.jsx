import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Checkbox from '../Checkbox';

describe('Checbox', () => {
    it('renders without crashing', () => {
        mount(<Checkbox />);
    });

    it('should call onChange event if changed', () => {
        const spy = jest.fn();
        const checkbox = mount(<Checkbox onChange={spy} />);
        checkbox.find('input').simulate('change');

        expect(spy).toHaveBeenCalled();
    });

    describe('Snapshots', () => {
        it('renders default checkbox correctly', () => {
            const rendered = renderer.create(<Checkbox />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders radio type checkbox correctly', () => {
            const rendered = renderer.create(<Checkbox radio />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders toogle checkbox correctly', () => {
            const rendered = renderer.create(<Checkbox toggle />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});
