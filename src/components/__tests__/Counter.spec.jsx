import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Counter from '../Counter';

jest.mock('../Popup.jsx');

describe('Counter', () => {
    it('renders without crashing', () => {
        shallow(<Counter />);
    });

    it('should call onChange event decreased value by 1', () => {
        const spy = jest.fn();
        const counter = shallow(<Counter value={3} onChange={spy} />);
        counter.find('Button').at(0).simulate('click');

        expect(spy).toHaveBeenCalledWith(2);
    });

    it('should call onChange event with increase value by 1', () => {
        const spy = jest.fn();
        const counter = shallow(<Counter value={3} onChange={spy} />);
        counter.find('Button').at(1).simulate('click');

        expect(spy).toHaveBeenCalledWith(4);
    });

    it('should decrese value to 0', () => {
        const spy = jest.fn();
        const counter = shallow(<Counter value={1} onChange={spy} />);
        counter.find('Button').at(0).simulate('click');

        expect(spy).toHaveBeenCalledWith(0);
    });

    it('should not decrease value lower then specified min value', () => {
        const spy = jest.fn();
        const counter = shallow(<Counter value={3} min={3} onChange={spy} />);
        counter.find('Button').at(0).simulate('click');

        expect(spy).toHaveBeenCalledWith(3);
    });

    it('should not increase value higher then specified max value', () => {
        const spy = jest.fn();
        const counter = shallow(<Counter value={3} max={3} onChange={spy} />);
        counter.find('Button').at(1).simulate('click');

        expect(spy).toHaveBeenCalledWith(3);
    });

    describe('Snapshots', () => {
        it('renders with specified value', () => {
            const rendered = renderer.create(<Counter value={5} />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders with specified placeholder', () => {
            const rendered = renderer.create(
                <Counter placeholder="placeholder" />,
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});
