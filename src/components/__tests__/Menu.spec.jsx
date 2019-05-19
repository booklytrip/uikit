import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MenuItem, Menu } from '../Menu';

describe('MenuItem', () => {
    it('renders without crashing', () => {
        mount(<MenuItem />);
    });

    it('should call onClick event with arguments if clicked', () => {
        const spy = jest.fn();
        const item = mount(
            <MenuItem
                value="value"
                label="label"
                onClick={ spy }
            />
        );
        item.simulate('click');

        expect(spy).toHaveBeenCalledWith('value', 'label');
    });

    describe('Snapshots', () => {
        it('renders with label', () => {
            const rendered = renderer.create(<MenuItem label="Label" />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders in active state', () => {
            const rendered = renderer.create(<MenuItem active />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});

describe('Menu', () => {
    const items = [
        { value: 1, label: 'First' },
        { value: 2, label: 'Second' },
        { value: 3, label: 'Third' },
    ];

    it('renders without crashing', () => {
        mount(<Menu />);
    });

    it('should call onClick event with arguments if clicked on item', () => {
        const spy = jest.fn();
        const menu = mount(
            <Menu items={ items } onClick={ spy } />
        );
        menu.find(MenuItem).at(1).simulate('click');

        expect(spy).toHaveBeenCalledWith(2, 'Second');
    });

    describe('Snapshots', () => {
        it('renders with items', () => {
            const rendered = renderer.create(<Menu items={ items } />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders with active item', () => {
            const rendered = renderer.create(<Menu items={ items } active={ 2 } />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders vertically', () => {
            const rendered = renderer.create(<Menu items={ items } vertically />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders secondary', () => {
            const rendered = renderer.create(<Menu items={ items } secondary />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders tabular', () => {
            const rendered = renderer.create(<Menu items={ items } tabular />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders attached', () => {
            const rendered = renderer.create(<Menu items={ items } attached="top" />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders pointing', () => {
            const rendered = renderer.create(<Menu items={ items } pointing />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});
