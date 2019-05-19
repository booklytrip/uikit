import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Input } from '../Input';
import Icon from '../Icon';

describe('Input', () => {
    it('renders without crashing', () => {
        mount(<Input />);
    });
    
    it('should call onChange event if changed', () => {
        const spy = jest.fn();
        const input = mount(<Input onChange={ spy } />);
        input.find('input').simulate('change');
        
        expect(spy).toHaveBeenCalled();
    });
    
    describe('Snapshots', () => {
        it('renders showing that data contains error', () => {
            const rendered = renderer.create(<Input error />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders with icon on left position', () => {
            const rendered = renderer.create(
                <Input
                    icon={ <Icon name="user" /> }
                    labelPosition="left"
                />
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders with icon on right position', () => {
            const rendered = renderer.create(
                <Input
                    icon={ <Icon name="user" /> }
                    labelPosition="right"
                />
            );
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders with different size', () => {
            const rendered = renderer.create(<Input size="small" />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});
