import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Search from '../Search';

describe('Search', () => {
    it('renders without crashing', () => {
        mount(<Search />);
    });
    
    describe('Snapshots', () => {
        it('renders with placeholder', () => {
            const rendered = renderer.create(<Search placeholder="Placeholder" />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders in loading state', () => {
            const rendered = renderer.create(<Search loading />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders with different size', () => {
            const rendered = renderer.create(<Search size="small" />);
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});
