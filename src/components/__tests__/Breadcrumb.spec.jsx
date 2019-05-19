import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import {
    Breadcrumb,
    BreadcrumbSection,
    BreadcrumbDivider,
} from '../Breadcrumb';

describe('Breadcrumb', () => {
    it('renders without crashing', () => {
        mount(
            <Breadcrumb>
                <BreadcrumbSection>Item 1</BreadcrumbSection>
                <BreadcrumbDivider />
                <BreadcrumbSection>Item 2</BreadcrumbSection>
            </Breadcrumb>
        );
    });
    
    it('should call onClick event if clicked on section', () => {
        const spy = jest.fn();
        const section = mount(<BreadcrumbSection onClick={ spy } />);
        section.simulate('click');
        
        expect(spy).toHaveBeenCalled();
    });
    
    describe('Snapshots', () => {
        it('renders in different size', () => {
            const rendered = renderer.create(
                <Breadcrumb size="large">
                    <BreadcrumbSection>Item 1</BreadcrumbSection>
                    <BreadcrumbDivider />
                    <BreadcrumbSection>Item 2</BreadcrumbSection>
                </Breadcrumb>
            );
            
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders section as a link', () => {
            const rendered = renderer.create(
                <BreadcrumbSection link>Item 1</BreadcrumbSection>
            );
            
            expect(rendered.toJSON()).toMatchSnapshot();
        });

        it('renders active section', () => {
            const rendered = renderer.create(
                <BreadcrumbSection active>Item 1</BreadcrumbSection>
            );
            
            expect(rendered.toJSON()).toMatchSnapshot();
        });
        
        it('renders divder with an icon', () => {
            const rendered = renderer.create(
                <BreadcrumbDivider icon="right arrow" />
            );
            
            expect(rendered.toJSON()).toMatchSnapshot();
        });
    });
});
