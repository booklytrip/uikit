import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Icon from '../Icon';

describe('Icon', () => {
    it('renders without crashing', () => {
        mount(<Icon />);
    });
    
    it('should call onClick event if clicked', () => {
        const spy = jest.fn();
        const icon = mount(<Icon onClick={ spy } />)
        icon.simulate('click');
        
        expect(spy).toHaveBeenCalled();
    });
    
    describe('Snapshots', () => {
        it('renders loading spinner', () => {
            const rendered = renderer.create(<Icon name="spinner" loading />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders disabled icon', () => {
            const rendered = renderer.create(<Icon name="settings" disabled />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders with custom size', () => {
            const rendered = renderer.create(<Icon name="settings" size="mini" />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders formated as a link', () => {
            const rendered = renderer.create(<Icon name="settings" link />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders formatted to appear circular', () => {
            const rendered = renderer.create(<Icon name="settings" circular />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders formatted to appear bordered', () => {
            const rendered = renderer.create(<Icon name="settings" bordered />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders with different color', () => {
            const rendered = renderer.create(<Icon name="settings" color="red" />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });    
});
