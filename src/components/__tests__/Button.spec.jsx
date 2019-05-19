import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('Button', () => {
    it('renders without crashing', () => {
        mount(<Button />);
    });

    it('should call onClick event if clicked', () => {
        const spy = jest.fn();
        const button = mount(<Button onClick={spy} />);
        button.simulate('click');

        expect(spy).toHaveBeenCalled();
    });

    describe('Snapshots', () => {
        it('renders primary button correctly', () => {
            const rendered = renderer.create(<Button primary />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders basic button correctly', () => {
            const rendered = renderer.create(<Button basic />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders loading button correctly', () => {
            const rendered = renderer.create(<Button loading />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders disabled button correctly', () => {
            const rendered = renderer.create(<Button disabled />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});
